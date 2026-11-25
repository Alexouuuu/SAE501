package SAE501._PC.entity;

import SAE501._PC.enums.StatutProjet;
import SAE501._PC.enums.TypeProjet;
import java.time.Instant;
import jakarta.persistence.*;

@Entity
public class Projet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProjet;
    @Column(nullable = false)
    private String titre;
    @Lob
    private String contenu;
    private Instant datePublication;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutProjet statutProjet = StatutProjet.BROUILLON;
    @Enumerated(EnumType.STRING)
    private TypeProjet type;
    private String imgURL;
    private String lienExterne;
    // Un projet a un seul auteur (1..1) ; un utilisateur peut publier plusieurs projets (0..*)
    @Column(nullable = false)
    private Long idAuteur;

    public Projet() {}

    // Un nouveau projet est créé en brouillon, sans date de publication
    public Projet(String titre, String contenu, TypeProjet type, String imgURL, String lienExterne, Long idAuteur) {
        this.titre = titre;
        this.contenu = contenu;
        this.type = type;
        this.imgURL = imgURL;
        this.lienExterne = lienExterne;
        this.idAuteur = idAuteur;
    }

    public Long getIdProjet() { return this.idProjet; }
    public String getTitre() { return this.titre; }
    public String getContenu() { return this.contenu; }
    public Instant getDatePublication() { return this.datePublication; }
    public StatutProjet getStatutProjet() { return this.statutProjet; }
    public TypeProjet getType() { return this.type; }
    public String getImgURL() { return this.imgURL; }
    public String getLienExterne() { return this.lienExterne; }
    public Long getIdAuteur() { return this.idAuteur; }

    public void modifierProjet(String titre, String contenu, TypeProjet type, String imgURL, String lienExterne) {
        this.titre = titre;
        this.contenu = contenu;
        this.type = type;
        this.imgURL = imgURL;
        this.lienExterne = lienExterne;
    }

    // Passe le projet en PUBLIE et enregistre la date de publication
    public void publierProjet() {
        this.statutProjet = StatutProjet.PUBLIE;
        this.datePublication = Instant.now();
    }

    public void archiverProjet() {
        this.statutProjet = StatutProjet.ARCHIVE;
    }
}
