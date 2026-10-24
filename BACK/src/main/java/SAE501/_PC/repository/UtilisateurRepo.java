package SAE501._PC.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import SAE501._PC.entity.Utilisateur;

public interface UtilisateurRepo extends JpaRepository<Utilisateur, Long>{
    
}
