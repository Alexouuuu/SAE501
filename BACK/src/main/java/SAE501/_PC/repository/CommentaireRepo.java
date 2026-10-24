package SAE501._PC.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import SAE501._PC.entity.Commentaire;

public interface CommentaireRepo extends JpaRepository<Commentaire, Long>{
    
}
