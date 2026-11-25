package SAE501._PC.entity;

import SAE501._PC.enums.Genre;
import SAE501._PC.enums.Role;
import java.time.LocalDate;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Entity
public class Utilisateur {

    private static final PasswordEncoder ENCODEUR = new BCryptPasswordEncoder();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUtilisateur;
    private String prenom;
    private String nom;
    @Enumerated(EnumType.STRING)
    private Genre genre;
    private LocalDate dateNaissance;
    @Column(unique = true, nullable = false)
    private String email;
    @JsonIgnore
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    private Boolean isInteresse = false;
    private Long idAdresse;

    public Utilisateur() {}

    public Utilisateur(String prenom, String nom, Genre genre, LocalDate dateNaissance, String email, String password, Role role, Long idAdresse) {
        this.prenom = prenom;
        this.nom = nom;
        this.genre = genre;
        this.dateNaissance = dateNaissance;
        this.email = email;
        this.password = ENCODEUR.encode(password);
        this.role = role;
        this.idAdresse = idAdresse;
    }

    public Long getIdUtilisateur() { return this.idUtilisateur; }
    public String getPrenom() { return this.prenom; }
    public String getNom() { return this.nom; }
    public Genre getGenre() { return this.genre; }
    public LocalDate getDateNaissance() { return this.dateNaissance; }
    public String getEmail() { return this.email; }
    public Role getRole() { return this.role; }
    public Boolean getIsInteresse() { return this.isInteresse; }
    public Long getIdAdresse() { return this.idAdresse; }

    public Boolean verifierPassword(String password) {
        return password != null && this.password != null && ENCODEUR.matches(password, this.password);
    }

    public void modifierProfil(String prenom, String nom, Genre genre, LocalDate dateNaissance, String email) {
        this.prenom = prenom;
        this.nom = nom;
        this.genre = genre;
        this.dateNaissance = dateNaissance;
        this.email = email;
    }

    public void modifierPassword(String password) { this.password = ENCODEUR.encode(password); }
    public void modifierIsInteresse(Boolean isInteresse) { this.isInteresse = Boolean.TRUE.equals(isInteresse); }
    public void changerRole(Role role) { this.role = role; }
}
