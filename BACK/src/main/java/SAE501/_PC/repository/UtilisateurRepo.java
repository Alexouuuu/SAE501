package SAE501._PC.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import SAE501._PC.entity.Utilisateur;
import SAE501._PC.enums.Role;
import java.util.List;

public interface UtilisateurRepo extends JpaRepository<Utilisateur, Long>{
    boolean existsByEmailIgnoreCase(String email);
    java.util.Optional<Utilisateur> findByEmailIgnoreCase(String email);
    List<Utilisateur> findByRoleOrderByNomAsc(Role role);
}
