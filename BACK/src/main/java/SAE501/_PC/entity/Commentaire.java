package SAE501._PC.entity;

import SAE501._PC.enums.StatutCommentaire;
import java.time.Instant;
import jakarta.persistence.*;

@Entity
public class Commentaire {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String contenu;
    private Instant dateCreation;
    @Enumerated(EnumType.STRING)
    private StatutCommentaire statut;
    
    @ManyToOne //Un utilisateur peut écrire plusieurs commentaires qui seront listés dans Utilisateur
    @JoinColumn(name="auteur_id")
    private Utilisateur auteur;
    
    @ManyToOne //Un evenement peut contenir plusieurs commentaires qui seront listés dans Evenement
    @JoinColumn(name="evenement_id")
    private Evenement evenement;
    
    //constructeur
    public Commentaire() {}
    
    // getters 
    public Long getId() { return this.id; }
    public String getContenu() { return this.contenu; }
    public Instant getDateCreation() { return this.dateCreation;}
    public StatutCommentaire getStatut() { return this.statut;}
    
    public Utilisateur getAuteur() { return this.auteur;}
    public Evenement getEvenement() { return this.evenement;}
    
    // setters
    public void setContenu(String contenu) { this.contenu = contenu;}
    public void setDateCreation(Instant dateCreation) { this.dateCreation = dateCreation;}
    public void setStatut(StatutCommentaire statut) { this.statut = statut;}
    
    public void setAuteur(Utilisateur auteur) { this.auteur = auteur;}
    public void setEvenement(Evenement evenement) { this.evenement = evenement;}
}
