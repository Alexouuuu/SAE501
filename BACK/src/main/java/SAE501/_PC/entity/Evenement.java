package SAE501._PC.entity;

import java.util.List;
import java.util.ArrayList;
import java.time.Instant;
import jakarta.persistence.*;

public class Evenement {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private Instant debut;
    private Instant fin;
    private Integer capaciteMax;
    
    @ManyToOne //Chaque evenement appartient a une JPO , listés dans JPO 
    @JoinColumn(name = "jpo_id")
    private JPO jpo;
    
    @OneToMany(mappedBy = "evenement") //chaque evenement peut recevoir plusieurs commentaires donc on les liste (array)
    private List<Commentaire> commentaires = new ArrayList<>();
    
    //constructeur
    public Evenement() {}
    
    //getters
    public Long getId() { return this.id;}
    public String getTitre() { return this.titre;}
    public Instant getDebut() { return this.debut;}
    public Instant getFin() { return this.fin;}
    public Integer getCapaciteMax() { return this.capaciteMax;}
    
    public JPO getJpo() { return this.jpo; }
    
    //setters    
    public void setTitre(String titre) { this.titre = titre;}
    public void setDebut(Instant debut) { this.debut = debut;}
    public void setFin(Instant fin) { this.fin = fin;}
    public void setCapaciteMax(Integer capaciteMax) { this.capaciteMax = capaciteMax;}
    
    public void setJpo(JPO jpo) { this.jpo = jpo;}
    
    //methodes
    public void reprogrammer(Instant debut, Instant fin) {
        this.debut = debut;
        this.fin = fin;
    }
}
