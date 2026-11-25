package SAE501._PC.entity;

import SAE501._PC.enums.StatutInscription;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class InscriptionEvenement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idInscriptionEvenement;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutInscription statutInscription = StatutInscription.EN_ATTENTE;
    @Column(nullable = false)
    private Boolean present = false;
    // Une inscription concerne un seul utilisateur (1..1) ; un utilisateur peut avoir plusieurs inscriptions (1..*)
    @Column(nullable = false)
    private Long idUtilisateur;
    // Une inscription concerne un seul événement (1..1) ; un événement peut recevoir plusieurs inscriptions (1..*)
    @Column(nullable = false)
    private Long idEvenement;

    public InscriptionEvenement() {}

    public InscriptionEvenement(Long idUtilisateur, Long idEvenement) {
        this.idUtilisateur = idUtilisateur;
        this.idEvenement = idEvenement;
    }

    public Long getIdInscriptionEvenement() { return this.idInscriptionEvenement; }
    public StatutInscription getStatutInscription() { return this.statutInscription; }

    @JsonProperty("present")
    public Boolean isPresent() { return this.present; }

    public Long getIdUtilisateur() { return this.idUtilisateur; }
    public Long getIdEvenement() { return this.idEvenement; }

    public void confirmer() { this.statutInscription = StatutInscription.CONFIRMEE; }
    public void annuler() { this.statutInscription = StatutInscription.ANNULEE; }
    public void modifierPresence(Boolean present) { this.present = Boolean.TRUE.equals(present); }
}
