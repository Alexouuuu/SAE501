package SAE501._PC.entity;

import java.util.ArrayList;
import java.util.List;
import java.time.LocalDate;
import jakarta.persistence.*;

public class JPO {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private LocalDate date;
    private Boolean inscriptionsOuvertes;
    
    @OneToMany(mappedBy = "jpo") //Une JPO contient plusieurs evenements
    private List<Evenement> evenements = new ArrayList<>();
    
    @OneToMany(mappedBy = "jpo") //Une JPO obtient plusieurs inscriptions
    private List<InscriptionJPO> inscriptions = new ArrayList<>();
    
    //Constructeur
    public JPO() {}
    
    //getters
    public Long getId() { return this.id;}
    public String getTitre() { return this.titre;}
    public LocalDate getDate() { return this.date;}
    public Boolean isInscriptionOuvertes() { return this.inscriptionsOuvertes;}
    
    //setters
    public void setTitre(String titre) { this.titre = titre;}
    public void setDate(LocalDate date) { this.date = date;}
    
    //methodes
    public void ouvrirInscriptions() {} //A completer
    public void fermerInscriptions() {} //A completer
}
