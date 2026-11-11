package SAE501._PC.repository;

import SAE501._PC.entity.Utilisateur;
import SAE501._PC.enums.Role;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
import java.util.Optional;

public interface UtilisateurRepo extends CrudRepository<Utilisateur, Long>{
    Optional<Utilisateur> findByEmailIgnoreCase(String email); //Optional sert à renvoyer meme si ya pas d'Utilisateur avec l'id recherché.
    boolean existsByEmailIgnoreCase(String email); //vérifier qu'un email soit pas en double
    List<Utilisateur> findByRoleOrderByNomAsc(Role role);  //retourne tous les utilisateurs ayant le role passé en parametre
}
