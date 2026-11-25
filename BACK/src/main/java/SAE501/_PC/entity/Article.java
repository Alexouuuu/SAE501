package SAE501._PC.entity;

import SAE501._PC.enums.StatutArticle;
import java.time.Instant;
import jakarta.persistence.*;

@Entity
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idArticle;
    @Column(nullable = false)
    private String titre;
    @Lob
    private String contenu;
    private Instant datePublication;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutArticle statutArticle = StatutArticle.BROUILLON;
    private String imgURL;
    // Un article a un seul auteur (1..1) ; un utilisateur peut écrire plusieurs articles (1..*)
    @Column(nullable = false)
    private Long idAuteur;

    public Article() {}

    public Article(String titre, String contenu, String imgURL, Long idAuteur) {
        this.titre = titre;
        this.contenu = contenu;
        this.imgURL = imgURL;
        this.idAuteur = idAuteur;
    }

    public Long getIdArticle() { return this.idArticle; }
    public String getTitre() { return this.titre; }
    public String getContenu() { return this.contenu; }
    public Instant getDatePublication() { return this.datePublication; }
    public StatutArticle getStatutArticle() { return this.statutArticle; }
    public String getImgURL() { return this.imgURL; }
    public Long getIdAuteur() { return this.idAuteur; }

    public void modifierArticle(String titre, String contenu, String imgURL) {
        this.titre = titre;
        this.contenu = contenu;
        this.imgURL = imgURL;
    }

    // Passe l'article en PUBLIE et enregistre la date de publication
    public void publierArticle() {
        this.statutArticle = StatutArticle.PUBLIE;
        this.datePublication = Instant.now();
    }

    public void archiverArticle() {
        this.statutArticle = StatutArticle.ARCHIVE;
    }
}
