package SAE501._PC.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import SAE501._PC.entity.Evenement;
import java.util.List;

public interface EvenementRepo extends JpaRepository<Evenement, Long>{
    List<Evenement> findByActiviteJpoFalseOrActiviteJpoIsNullOrderByDebutAsc();
    List<Evenement> findByActiviteJpoTrueOrderByDebutAsc();
}
