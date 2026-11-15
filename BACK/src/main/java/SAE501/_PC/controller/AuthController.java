package SAE501._PC.controller;

import SAE501._PC.entity.Utilisateur;
import SAE501._PC.enums.Role;
import SAE501._PC.repository.UtilisateurRepo;
import SAE501._PC.service.SessionAuth;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired private UtilisateurRepo utilisateurRepo;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private SessionAuth sessionAuth;

    @PostMapping("/register")
    public Map<String, Object> inscrire(@RequestBody InscriptionPayload payload, HttpSession session, HttpServletRequest request) {
        if (payload.nom() == null || payload.nom().isBlank()
            || payload.prenom() == null || payload.prenom().isBlank()
            || payload.email() == null || !payload.email().matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")
            || payload.password() == null || payload.password().length() < 8
            || payload.ville() == null || payload.ville().isBlank()
            || payload.filiere() == null || payload.filiere().isBlank()
            || payload.dateNaissance() == null || payload.dateNaissance().isAfter(LocalDate.now())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Vérifiez les champs obligatoires et utilisez un mot de passe d’au moins 8 caractères.");
        }
        if (utilisateurRepo.existsByEmailIgnoreCase(payload.email().trim())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Cette adresse e-mail possède déjà un compte.");
        }
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setNom(payload.nom().trim());
        utilisateur.setPrenom(payload.prenom().trim());
        utilisateur.setEmail(payload.email().trim().toLowerCase());
        utilisateur.setPassword(passwordEncoder.encode(payload.password()));
        utilisateur.setRole(Role.VISITEUR);
        utilisateur.setSexe(payload.sexe());
        utilisateur.setVille(payload.ville());
        utilisateur.setDateNaissance(payload.dateNaissance());
        utilisateur.setFiliere(payload.filiere());
        utilisateur.setInteresseFormation(Boolean.TRUE.equals(payload.interesseFormation()));
        utilisateur.setPresentJpo(false);
        utilisateurRepo.save(utilisateur);
        request.changeSessionId();
        sessionAuth.ouvrir(session, utilisateur);
        return profil(utilisateur);
    }

    @PostMapping("/login")
    public Map<String, Object> connecter(@RequestBody ConnexionPayload payload, HttpSession session, HttpServletRequest request) {
        Utilisateur utilisateur = payload.email() == null
            ? null
            : utilisateurRepo.findByEmailIgnoreCase(payload.email().trim()).orElse(null);
        if (utilisateur == null || utilisateur.getRole() == null || payload.password() == null
            || !passwordEncoder.matches(payload.password(), utilisateur.getPassword())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Adresse e-mail ou mot de passe incorrect.");
        }
        request.changeSessionId();
        sessionAuth.ouvrir(session, utilisateur);
        return profil(utilisateur);
    }

    @GetMapping("/me")
    public Map<String, Object> profilConnecte(HttpSession session) {
        if (sessionAuth.isDevelopmentAccessEnabled()) {
            return Map.of("id", 0L, "nom", "Développement", "prenom", "Compte", "email", "", "role", Role.ADMIN.name());
        }
        Long id = sessionAuth.utilisateurId(session);
        Utilisateur utilisateur = utilisateurRepo.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Session invalide."));
        return profil(utilisateur);
    }

    @PostMapping("/logout")
    public void deconnecter(HttpSession session) {
        if (session != null) session.invalidate();
    }

    private Map<String, Object> profil(Utilisateur utilisateur) {
        return Map.of(
            "id", utilisateur.getId(),
            "nom", utilisateur.getNom(),
            "prenom", utilisateur.getPrenom(),
            "email", utilisateur.getEmail(),
            "role", utilisateur.getRole().name()
        );
    }
}
