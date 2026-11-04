package SAE501._PC.service;

import SAE501._PC.entity.Utilisateur;
import SAE501._PC.enums.Role;
import SAE501._PC.repository.UtilisateurRepo;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class InitialAdmin implements CommandLineRunner {
    private final UtilisateurRepo utilisateurRepo;
    private final PasswordEncoder passwordEncoder;
    private final String email;
    private final String password;

    public InitialAdmin(
        UtilisateurRepo utilisateurRepo,
        PasswordEncoder passwordEncoder,
        @Value("${app.admin.email:}") String email,
        @Value("${app.admin.password:}") String password
    ) {
        this.utilisateurRepo = utilisateurRepo;
        this.passwordEncoder = passwordEncoder;
        this.email = email;
        this.password = password;
    }

    @Override
    public void run(String... args) {
        if (email.isBlank() || password.isBlank() || utilisateurRepo.existsByEmailIgnoreCase(email)) {
            return;
        }
        if (password.length() < 12) {
            throw new IllegalStateException("APP_ADMIN_PASSWORD doit contenir au moins 12 caractères.");
        }
        Utilisateur admin = new Utilisateur();
        admin.setNom("Administrateur");
        admin.setPrenom("Site");
        admin.setEmail(email.trim().toLowerCase());
        admin.setPassword(passwordEncoder.encode(password));
        admin.setRole(Role.ADMIN);
        utilisateurRepo.save(admin);
    }
}
