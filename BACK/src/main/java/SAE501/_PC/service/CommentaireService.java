package SAE501._PC.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import SAE501._PC.entity.Commentaire;
import SAE501._PC.repository.CommentaireRepo;

@Service 
public class CommentaireService {
    
    @Autowired 
    private CommentaireRepo commentaireRepo;
    
    public Commentaire saveCommentaire(Commentaire commentaire){
        return commentaireRepo.save(commentaire);
    }
    
    public Iterable<Commentaire> getAllCommentaires(){
        return commentaireRepo.findAll();
    }
    
    public Commentaire getCommentaireById(Long id){
        return commentaireRepo.findById(id).orElse(null);
    }
    
    public void deleteCommentaireById(Long id){
        commentaireRepo.deleteById(id);
    }
}
