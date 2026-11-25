package SAE501._PC.entity;

import java.time.LocalDate;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class JPO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idJpo;
    @Column(nullable = false)
    private String titre;
    // "date" est un mot réservé en SQL : on renomme la colonne
    @Column(name = "date_jpo", nullable = false)
    private LocalDate date;
    @Column(nullable = false)
    private Boolean inscriptionPossible = false;

    public JPO() {}

    // Une nouvelle JPO est créée avec les inscriptions fermées
    public JPO(String titre, LocalDate date) {
        this.titre = titre;
        this.date = date;
    }

    public Long getIdJpo() { return this.idJpo; }
    public String getTitre() { return this.titre; }
    public LocalDate getDate() { return this.date; }

    @JsonProperty("inscriptionPossible")
    public Boolean isInscriptionPossible() { return this.inscriptionPossible; }

    public void modifierJpo(String titre, LocalDate date) {
        this.titre = titre;
        this.date = date;
    }

    public void ouvrirInscriptions() { this.inscriptionPossible = true; }
    public void fermerInscriptions() { this.inscriptionPossible = false; }
}
