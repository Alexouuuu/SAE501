package SAE501._PC.entity;

import SAE501._PC.enums.StatutCommentaire;
import java.time.Instant;
import jakarta.persistence.*;

@Entity
public class Commentaire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCommentaire;
    @Lob
    @Column(nullable = false)
    private String contenu;
    @Column(nullable = false)
    private Instant dateCreation;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutCommentaire statutCommentaire = StatutCommentaire.EN_ATTENTE;
    // Un commentaire provient d'un seul utilisateur (1..1) ; un utilisateur peut poster plusieurs commentaires (1..*)
    @Column(nullable = false)
    private Long idAuteur;
    // Un commentaire est posté sur un seul événement (1..1) ; un événement peut avoir plusieurs commentaires (1..*)
    @Column(nullable = false)
    private Long idEvenement;

    public Commentaire() {}

    // Un nouveau commentaire est en attente de modération
    public Commentaire(String contenu, Long idAuteur, Long idEvenement) {
        this.contenu = contenu;
        this.idAuteur = idAuteur;
        this.idEvenement = idEvenement;
        this.dateCreation = Instant.now();
    }

    public Long getIdCommentaire() { return this.idCommentaire; }
    public String getContenu() { return this.contenu; }
    public Instant getDateCreation() { return this.dateCreation; }
    public StatutCommentaire getStatutCommentaire() { return this.statutCommentaire; }
    public Long getIdAuteur() { return this.idAuteur; }
    public Long getIdEvenement() { return this.idEvenement; }

    public void modifierContenu(String contenu) { this.contenu = contenu; }

    public void publier() { this.statutCommentaire = StatutCommentaire.PUBLIE; }
    public void masquer() { this.statutCommentaire = StatutCommentaire.MASQUE; }
    // Suppression logique : la ligne reste en base avec le statut SUPPRIME pour garder en archive
    public void supprimer() { this.statutCommentaire = StatutCommentaire.SUPPRIME; }
}
