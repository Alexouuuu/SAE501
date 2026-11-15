//Un DTO sert à transmettre les données entre le front et le controller , en l'occurence ici il s'agit de AuthController.java

package SAE501._PC.dto;

import java.time.LocalDate;

public record InscriptionRequest(String nom, String prenom, String email, String password, String sexe, String ville, LocalDate dateNaissance, String filiere, Boolean interesseFormation) {}
