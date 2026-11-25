package SAE501._PC.controller;

import SAE501._PC.entity.Utilisateur;
import SAE501._PC.entity.Adresse;
import SAE501._PC.enums.Genre;
import SAE501._PC.enums.Role;
import SAE501._PC.dto.InscriptionRequest;
import SAE501._PC.dto.ConnexionRequest;
import SAE501._PC.repository.AdresseRepo;
import SAE501._PC.repository.UtilisateurRepo;
import SAE501._PC.service.SessionAuth;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.server.ResponseStatusException;
import java.time.LocalDate;
import java.util.Locale;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UtilisateurRepo utilisateurRepo; //rechercher les comptes
    private final AdresseRepo adresseRepo;
    private final SessionAuth sessionAuth;

    public AuthController(
        UtilisateurRepo utilisateurRepo,
        AdresseRepo adresseRepo,
        SessionAuth sessionAuth
    ) {
        this.utilisateurRepo = utilisateurRepo;
        this.adresseRepo = adresseRepo;
        this.sessionAuth = sessionAuth;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    @Transactional
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
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Date trop éloignée");
        }
        if (utilisateurRepo.existsByEmailIgnoreCase(email)) { // vérifier utilisation d'un email
            throw new ResponseStatusException(HttpStatus.CONFLICT, "L'adresse email est déjà utilisée.");
        }
        //créer le compte 
        Adresse adresse = new Adresse();
        adresse.setVille(donnees.ville());
        adresse = adresseRepo.save(adresse);

        Utilisateur utilisateur = new Utilisateur(
            donnees.prenom().trim(),
            donnees.nom().trim(),
            convertirGenre(donnees.genre()),
            donnees.dateNaissance(),
            email,
            donnees.password(),
            Role.VISITEUR,
            adresse.getIdAdresse()
        );
        utilisateur.modifierIsInteresse(donnees.interesseFormation());
        
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
        
        if (!utilisateur.verifierPassword(donnees.password())) {
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

    // "non-precise" (front) -> NON_PRECISE ; valeur vide ou absente -> null
    private Genre convertirGenre(String genre) {
        if (genre == null || genre.isBlank()) { return null; }
        try {
            return Genre.valueOf(genre.trim().toUpperCase(Locale.ROOT).replace('-', '_'));
        } catch (IllegalArgumentException exception) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Le genre est invalide.");
        }
    }
}
