package SAE501._PC.entity;

import java.time.Instant;
import jakarta.persistence.*;
import org.hibernate.annotations.Formula;

@Entity
public class Evenement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEvenement;
    @Column(nullable = false)
    private String titre;
    @Column(nullable = false)
    private Instant debut;
    @Column(nullable = false)
    private Instant fin;
    @Lob
    private String description;
    private String salle;
    private Integer capaciteMax;
    // Un événement appartient à une seule JPO (1..1) ; une JPO peut avoir plusieurs événements (1..*)
    @Column(nullable = false)
    private Long idJpo;

    @Formula("(select count(*) from inscription_evenement i where i.id_evenement = id_evenement and i.statut_inscription <> 'ANNULEE')")
    private Long nbrInscripts;

    public Evenement() {}

    public Evenement(String titre, Instant debut, Instant fin, String description, String salle, Integer capaciteMax, Long idJpo) {
        this.titre = titre;
        this.debut = debut;
        this.fin = fin;
        this.description = description;
        this.salle = salle;
        this.capaciteMax = capaciteMax;
        this.idJpo = idJpo;
    }

    public Long getIdEvenement() { return this.idEvenement; }
    public String getTitre() { return this.titre; }
    public Instant getDebut() { return this.debut; }
    public Instant getFin() { return this.fin; }
    public String getDescription() { return this.description; }
    public String getSalle() { return this.salle; }
    public Integer getCapaciteMax() { return this.capaciteMax; }
    public Long getNbrInscripts() { return this.nbrInscripts == null ? 0L : this.nbrInscripts; }
    public Long getIdJpo() { return this.idJpo; }

    public void modifierEvenement(String titre, String description, String salle, Integer capaciteMax) {
        this.titre = titre;
        this.description = description;
        this.salle = salle;
        this.capaciteMax = capaciteMax;
    }

    public void reprogrammer(Instant debut, Instant fin) {
        this.debut = debut;
        this.fin = fin;
    }
}
