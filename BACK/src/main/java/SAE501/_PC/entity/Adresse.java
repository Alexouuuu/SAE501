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

    public Long getIdAdresse() { return this.idAdresse; }
    public String getAdresse() { return this.adresse; }
    public String getComplementAdresse() { return this.complementAdresse; }
    public String getCodePostal() { return this.codePostal; }
    public String getVille() { return this.ville; }

    public void setAdresse(String adresse) { this.adresse = adresse; }
    public void setComplementAdresse(String complementAdresse) { this.complementAdresse = complementAdresse; }
    public void setCodePostal(String codePostal) { this.codePostal = codePostal; }
    public void setVille(String ville) { this.ville = ville; }
}
