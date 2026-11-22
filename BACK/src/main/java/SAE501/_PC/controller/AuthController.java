package SAE501._PC.controller;

import SAE501._PC.entity.Utilisateur;
import SAE501._PC.entity.Adresse;
import SAE501._PC.enums.Role;
import SAE501._PC.dto.InscriptionRequest;
import SAE501._PC.dto.ConnexionRequest;
import SAE501._PC.repository.UtilisateurRepo;
import SAE501._PC.service.SessionAuth;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.server.ResponseStatusException;
import java.time.LocalDate;
import java.util.Locale;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UtilisateurRepo utilisateurRepo; //rechercher les comptes
    private final PasswordEncoder passwordEncoder; //hacher le mdp
    private final SessionAuth sessionAuth;

    public AuthController(
        UtilisateurRepo utilisateurRepo,
        PasswordEncoder passwordEncoder,
        SessionAuth sessionAuth
    ) {
        this.utilisateurRepo = utilisateurRepo;
        this.passwordEncoder = passwordEncoder;
        this.sessionAuth = sessionAuth;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public Utilisateur register(@RequestBody InscriptionRequest donnees, HttpServletRequest request) {
        if (donnees.nom() == null || donnees.nom().isBlank() || donnees.prenom() == null || donnees.prenom().isBlank() || donnees.email() == null || donnees.email().isBlank() || donnees.password() == null || donnees.password().isBlank()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Le nom, prénom, l'email et le mot de passe sont obligatoires.");
        }
        String email = donnees.email().trim().toLowerCase(Locale.ROOT); //vérifier format email
        if (email.length() > 254 || !email.matches("^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"L'adresse email est invalide.");
        }
        if (donnees.password().length() < 8) { //vérifier longueur mdp
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Le mot de passe doit contenir au moins 8 caractères.");
        }
        if (donnees.dateNaissance() != null && donnees.dateNaissance().isAfter(LocalDate.now())) { //vérifier date de naissance
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Vous ne pouvez pas être né dans le futur.");
        }
        if (utilisateurRepo.existsByEmailIgnoreCase(email)) { // vérifier utilisation d'un email
            throw new ResponseStatusException(HttpStatus.CONFLICT, "L'adresse email est déjà utilisée.");
        }
        //créer le compte 
        Utilisateur utilisateur = new Utilisateur();
        
        utilisateur.setNom(donnees.nom().trim());
        utilisateur.setPrenom(donnees.prenom().trim());
        utilisateur.setEmail(email);
        utilisateur.setPassword(passwordEncoder.encode(donnees.password()));
        
        utilisateur.setRole(Role.VISITEUR);
        utilisateur.setGenre(donnees.genre());
        Adresse adresse = new Adresse();
        adresse.setVille(donnees.ville());
        utilisateur.setAdresse(adresse);
        utilisateur.setDateNaissance(donnees.dateNaissance());
        utilisateur.setFiliere(donnees.filiere());
        
        utilisateur.setInteresseFormation(Boolean.TRUE.equals(donnees.interesseFormation()));
        
        //enregistrer le compte en base de données
        try {
            utilisateur = utilisateurRepo.save(utilisateur);
        } catch (DataIntegrityViolationException exception) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Impossible de créer le compte: vérifiez les informations fournies.");
        }
        
        sessionAuth.fermer(request.getSession(false));
        sessionAuth.ouvrir(request.getSession(true), utilisateur);
        
        return utilisateur;
    }
    
    @PostMapping("/login")
    public Utilisateur login(@RequestBody ConnexionRequest donnees, HttpServletRequest request) {
        
        if (donnees.email() == null || donnees.email().isBlank() || donnees.password() == null || donnees.password().isBlank()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Le mot de passe ou l'email sont obligatoires.");
        }
        String email = donnees.email().trim().toLowerCase(Locale.ROOT);
        Utilisateur utilisateur = utilisateurRepo.findByEmailIgnoreCase(email).orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Email ou mot de passe incorrect"));
        
        if (!passwordEncoder.matches(donnees.password(),utilisateur.getPassword())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Email ou mot de passe incorrect.");
        }
        
        sessionAuth.fermer(request.getSession(false));
        sessionAuth.ouvrir(request.getSession(true), utilisateur);
        
        return utilisateur;
    }
    
    @GetMapping("/session")
    public Utilisateur me(HttpServletRequest request) { //recupere l'utilisateur connecté -> si pas de session renvoie null
        return sessionAuth.utilisateurConnecte(
            request.getSession(false)
        );
    }

    @PostMapping("/logout")
    @ResponseStatus(HttpStatus.NO_CONTENT) //appelle la méthode fermer pour detruire la session
    public void logout(HttpServletRequest request) {
        sessionAuth.fermer(request.getSession(false));
    }
}