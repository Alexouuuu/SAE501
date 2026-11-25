package SAE501._PC.entity;

import SAE501._PC.enums.StatutActualite;
import java.time.Instant;
import jakarta.persistence.*;

@Entity
public class Actualite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idActualite;
    @Column(nullable = false)
    private String titre;
    @Lob
    private String contenu;
    private Instant datePublication;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutActualite statutActualite = StatutActualite.BROUILLON;
    private String imgURL;
    // Une actualité a un seul auteur (1..1) ; un utilisateur peut écrire plusieurs actualités (1..*)
    @Column(nullable = false)
    private Long idAuteur;

    public Actualite() {}

    public Actualite(String titre, String contenu, String imgURL, Long idAuteur) {
        this.titre = titre;
        this.contenu = contenu;
        this.imgURL = imgURL;
        this.idAuteur = idAuteur;
    }

    public Long getIdActualite() { return this.idActualite; }
    public String getTitre() { return this.titre; }
    public String getContenu() { return this.contenu; }
    public Instant getDatePublication() { return this.datePublication; }
    public StatutActualite getStatutActualite() { return this.statutActualite; }
    public String getImgURL() { return this.imgURL; }
    public Long getIdAuteur() { return this.idAuteur; }

    public void modifierActualite(String titre, String contenu, String imgURL) {
        this.titre = titre;
        this.contenu = contenu;
        this.imgURL = imgURL;
    }

    // Passe l'actualité en PUBLIE et enregistre la date de publication
    public void publierActualite() {
        this.statutActualite = StatutActualite.PUBLIE;
        this.datePublication = Instant.now();
    }

    public void archiverActualite() {
        this.statutActualite = StatutActualite.ARCHIVE;
    }
}
