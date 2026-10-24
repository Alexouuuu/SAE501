package SAE501._PC.entity;

import SAE501._PC.enums.Role;
import java.util.List;
import java.util.ArrayList;
import jakarta.persistence.*;

@Entity
public class Utilisateur {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    
    @OneToMany(mappedBy = "auteur")//un utilisateur peut ecrire plusieurs commentaires
    private List<Commentaire> commentaires = new ArrayList<>();
    
    //Constructeur
    public Utilisateur() {}
    
    //getters
    public Long getId() { return this.id;}
    public String getNom() { return this.nom;}
    public String getPrenom() { return this.prenom;}
    public String getEmail() { return this.email;}
    public Role getRole() { return this.role;}
    
    //setters
    public void setNom(String nom) { this.nom = nom;}
    public void setPrenom(String prenom) { this.prenom = prenom;}
    public void setEmail(String email) { this.email = email;}
    
    //methodes
    public void changerRole(Role nouveauRole) { this.role = nouveauRole;}
    public void modifierProfil(String nom, String prenom, String email) { 
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }
}
