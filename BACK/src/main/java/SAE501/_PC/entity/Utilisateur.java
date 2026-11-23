package SAE501._PC.entity;

import SAE501._PC.enums.Role;
import java.time.LocalDate;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Utilisateur {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    @Column(unique = true, nullable = false)
    private String email;
    @JsonIgnore
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    
    private String genre;
    private LocalDate dateNaissance;
    private String filiere;
    private Boolean interesseFormation = false;
    private Boolean presentJpo = false;
    @OneToOne(mappedBy = "utilisateur", cascade = CascadeType.ALL, orphanRemoval = true)
    private Adresse adresse;
    
    public Utilisateur() {} 
    
    public Long getId() { return this.id; }
    public String getNom() { return this.nom; }
    public String getPrenom() { return this.prenom; }
    public String getEmail() { return this.email; }
    
    @JsonIgnore 
    public String getPassword() { return this.password; }
    
    public Role getRole() { return this.role; }
    public String getGenre() { return this.genre; }
    public LocalDate getDateNaissance() { return this.dateNaissance; }
    public String getFiliere() { return this.filiere; }
    public Boolean getInteresseFormation() { return this.interesseFormation; }
    public Boolean getPresentJpo() { return this.presentJpo; }
    public Adresse getAdresse() { return this.adresse; }
    
    public void setNom(String nom) { this.nom = nom;}
    public void setPrenom(String prenom) { this.prenom = prenom;}
    public void setEmail(String email) { this.email = email;}
    public void setPassword(String password) { this.password = password;}
    public void setRole(Role role) { this.role = role;}
    public void setGenre(String genre) { this.genre = genre;}
    public void setDateNaissance(LocalDate dateNaissance) { this.dateNaissance = dateNaissance;}
    public void setFiliere(String filiere) { this.filiere = filiere;}
    public void setInteresseFormation(boolean interesseFormation) { this.interesseFormation = interesseFormation; }
    public void setPresentJpo(Boolean presentJpo) { this.presentJpo = presentJpo;}

    public void setAdresse(Adresse adresse) {
        if (this.adresse != null && this.adresse != adresse) {
            this.adresse.setUtilisateur(null);
        }
        this.adresse = adresse;
        if (adresse != null && adresse.getUtilisateur() != this) {
            adresse.setUtilisateur(this);
        }
    }
}
