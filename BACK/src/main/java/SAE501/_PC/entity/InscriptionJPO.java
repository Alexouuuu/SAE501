package SAE501._PC.entity;

import SAE501._PC.enums.StatutInscription;
import java.time.Instant;
import jakarta.persistence.*;

@Entity
public class InscriptionJPO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idInscriptionJpo;
    private Instant dateInscription;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutInscription statutInscription = StatutInscription.EN_ATTENTE;
    // Une inscription concerne un seul utilisateur (1..1) ; un utilisateur peut avoir plusieurs inscriptions (1..*)
    @Column(nullable = false)
    private Long idUtilisateur;
    // Une inscription concerne une seule JPO (1..1) ; une JPO peut recevoir plusieurs inscriptions (1..*)
    @Column(nullable = false)
    private Long idJpo;

    public InscriptionJPO() {}

    public InscriptionJPO(Long idUtilisateur, Long idJpo) {
        this.idUtilisateur = idUtilisateur;
        this.idJpo = idJpo;
        this.dateInscription = Instant.now();
    }

    public Long getIdInscriptionJpo() { return this.idInscriptionJpo; }
    public Instant getDateInscription() { return this.dateInscription; }
    public StatutInscription getStatutInscription() { return this.statutInscription; }
    public Long getIdUtilisateur() { return this.idUtilisateur; }
    public Long getIdJpo() { return this.idJpo; }

    public void confirmer() { this.statutInscription = StatutInscription.CONFIRMEE; }
    public void annuler() { this.statutInscription = StatutInscription.ANNULEE; }
}
