package SAE501._PC.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @OneToOne
    @JoinColumn(name = "idUtilisateur", unique = true)
    private Utilisateur utilisateur;

    public Adresse() {}

    public Long getIdAdresse() { return this.idAdresse; }
    public String getAdresse() { return this.adresse; }
    public String getComplementAdresse() { return this.complementAdresse; }
    public String getCodePostal() { return this.codePostal; }
    public String getVille() { return this.ville; }

    @JsonIgnore
    public Utilisateur getUtilisateur() { return this.utilisateur; }

    public void setAdresse(String adresse) { this.adresse = adresse; }
    public void setComplementAdresse(String complementAdresse) { this.complementAdresse = complementAdresse; }
    public void setCodePostal(String codePostal) { this.codePostal = codePostal; }
    public void setVille(String ville) { this.ville = ville; }

    void setUtilisateur(Utilisateur utilisateur) { this.utilisateur = utilisateur; }
}
