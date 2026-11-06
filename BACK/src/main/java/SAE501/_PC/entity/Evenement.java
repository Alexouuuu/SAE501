package SAE501._PC.entity;

import java.time.Instant;
import jakarta.persistence.*;

@Entity
public class Evenement {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    @Column(length = 2000)
    private String description;
    private Instant debut;
    private Instant fin;
    private Integer capaciteMax;
    private String salle;
    private String matiere;
    private Boolean activiteJpo = false;
    
    public Evenement() {}
    
    // Getters
    public Long getId() { return this.id; }
    public String getTitre() { return this.titre; }
    public String getDescription() { return this.description; }
    public Instant getDebut() { return this.debut; }
    public Instant getFin() { return this.fin; }
    public Integer getCapaciteMax() { return this.capaciteMax; }
    public String getSalle() { return this.salle; }
    public String getMatiere() { return this.matiere; }
    public Boolean getActiviteJpo() { return this.activiteJpo; }
    
    // Setters    
    public void setTitre(String titre) { this.titre = titre; }
    public void setDescription(String description) { this.description = description; }
    public void setDebut(Instant debut) { this.debut = debut; }
    public void setFin(Instant fin) { this.fin = fin; }
    public void setCapaciteMax(Integer capaciteMax) { this.capaciteMax = capaciteMax; }
    public void setSalle(String salle) { this.salle = salle; }
    public void setMatiere(String matiere) { this.matiere = matiere; }
    public void setActiviteJpo(Boolean activiteJpo) { this.activiteJpo = activiteJpo; }
    
    // Methodes
    public void reprogrammer(Instant debut, Instant fin) {
        this.debut = debut;
        this.fin = fin;
    }
}
