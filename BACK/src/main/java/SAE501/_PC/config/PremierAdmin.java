package SAE501._PC.config;

import SAE501._PC.entity.Utilisateur;
import SAE501._PC.enums.Role;
import SAE501._PC.repository.UtilisateurRepo;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Locale;
import java.util.Optional;

@Component
public class PremierAdmin implements CommandLineRunner {
    private final UtilisateurRepo utilisateurRepo;
    private final String adminEmail;
    private final String adminPassword;
    
    public PremierAdmin(UtilisateurRepo utilisateurRepo, @Value("${app.admin.email:}") String adminEmail, @Value("${app.admin.password:}") String adminPassword) {
        this.utilisateurRepo = utilisateurRepo;
        this.adminEmail = adminEmail;
        this.adminPassword = adminPassword;
    }
    
    @Override
    public void run(String... args) { //on ne créé pas d'admin si ya pas de configuration
        if (adminEmail.isBlank() && adminPassword.isBlank()) { return;}
        if (adminEmail.isBlank() || adminPassword.isBlank()) { throw new IllegalStateException("Renseignez l'identifiant et le mot de passe Admin");}
        String email = adminEmail.trim().toLowerCase(Locale.ROOT);
        Optional<Utilisateur> compteExistant = utilisateurRepo.findByEmailIgnoreCase(email); //vérifier si un compte utilise deja cet email
        if (compteExistant.isPresent()) {
            if (compteExistant.get().getRole() != Role.ADMIN) {
                throw new IllegalStateException("L'adresse email appartient deja à un compte");
            }
            return;
        }
        if (email.length() > 254 || !email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")) { //vérification email (longueur + format)
            throw new IllegalStateException("L'adresse email n'est pas conforme");
        }
        if (adminPassword.isBlank() || adminPassword.length() < 8) { //vérification longueur mdp 
            throw new IllegalStateException("Le mot de passe doit contenir au moins 8 caracteres");
        }
        
        Utilisateur admin = new Utilisateur("SAE501", "Administrateur", null, null, email, adminPassword, Role.ADMIN, null);
        
        utilisateurRepo.save(admin);
    }
}
