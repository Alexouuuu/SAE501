package SAE501._PC.entity;

import jakarta.persistence.*;

@Entity
public class Adresse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAdresse;

    private String adresse;
    private String complementAdresse;
    private String codePostal;
    private String ville;

    public Adresse() {}

    public Adresse(String adresse, String complementAdresse, String codePostal, String ville) {
        this.adresse = adresse;
        this.complementAdresse = complementAdresse;
        this.codePostal = codePostal;
        this.ville = ville;
    }

    public Long getIdAdresse() { return this.idAdresse; }
    public String getAdresse() { return this.adresse; }
    public String getComplementAdresse() { return this.complementAdresse; }
    public String getCodePostal() { return this.codePostal; }
    public String getVille() { return this.ville; }

    public void modifierAdresse(String adresse, String complementAdresse, String codePostal, String ville) {
        this.adresse = adresse;
        this.complementAdresse = complementAdresse;
        this.codePostal = codePostal;
        this.ville = ville;
    }
}
