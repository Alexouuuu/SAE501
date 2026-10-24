package SAE501._PC.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import SAE501._PC.entity.Evenement;

public interface EvenementRepo extends JpaRepository<Evenement, Long>{
    
}
