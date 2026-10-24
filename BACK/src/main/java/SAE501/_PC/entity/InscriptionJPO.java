package SAE501._PC.entity;

import SAE501._PC.enums.StatutInscription;
import java.time.Instant;
import jakarta.persistence.*;

public class InscriptionJPO {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Instant dateInscription;
    @Enumerated(EnumType.STRING)
    private StatutInscription statut;
    
    @ManyToOne //Une JPO peut avoir plusieurs inscriptions , listées dans JPO
    @JoinColumn(name = "jpo_id")
    private JPO jpo;
    
    @ManyToOne //Plusieurs inscriptions peuvent appartenir au meme Utilisateur
    @JoinColumn(name= "utilisateur_id")
    private Utilisateur utilisateur;
    
    //Constructeur
    public InscriptionJPO() {}
    
    //getters
    public Long getId() { return this.id;}
    public Instant getDateInscription() { return this.dateInscription; }
    public StatutInscription getStatut() { return this.statut; }
    
    public Utilisateur getUtilisateur() { return this.utilisateur; }
    public JPO getJpo() { return this.jpo;}
    
    //setters
    public void setDateInscription(Instant dateInscription) { this.dateInscription = dateInscription;}
    public void setStatut(StatutInscription statut) { this.statut = statut;}
    public void setUtilisateur(Utilisateur utilisateur) { this.utilisateur = utilisateur;}
    
    //methodes
    public void confirmer() {} // A completer
    public void annuler() {} // A completer 
}
