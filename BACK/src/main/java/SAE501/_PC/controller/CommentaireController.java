package SAE501._PC.controller;

import SAE501._PC.entity.Commentaire;
import SAE501._PC.service.CommentaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/commentaires")
public class CommentaireController {
    
    @Autowired 
    private CommentaireService commentaireService;
    
    @PostMapping
    public Commentaire createCommentaire(@RequestBody Commentaire commentaire){
        return commentaireService.saveCommentaire(commentaire);
    }
    
    @GetMapping 
    public Iterable<Commentaire> getAllCommentaires() {
        return commentaireService.getAllCommentaires();
    }
    
    @GetMapping("/{id}")
    public Commentaire getCommentaireById(@PathVariable Long id) {
        return commentaireService.getCommentaireById(id);
    }
    
    @DeleteMapping("/{id}")
    public void deleteCommentaire(@PathVariable Long id) {
        commentaireService.deleteCommentaireById(id);
    }
}
