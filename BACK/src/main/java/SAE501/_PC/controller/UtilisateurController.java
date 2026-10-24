package SAE501._PC.controller;

import SAE501._PC.entity.Utilisateur;
import SAE501._PC.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/utilisateurs")
public class UtilisateurController {
    
    @Autowired 
    private UtilisateurService utilisateurService;
    
    @PostMapping
    public Utilisateur createCommentaire(@RequestBody Utilisateur utilisateur){
        return utilisateurService.saveUtilisateur(utilisateur);
    }
    
    @GetMapping 
    public Iterable<Utilisateur> getAllUtilisateurs() {
        return utilisateurService.getAllUtilisateurs();
    }
    
    @GetMapping("/{id}")
    public Utilisateur getUtilisateurById(@PathVariable Long id) {
        return utilisateurService.getUtilisateurById(id);
    }
    
    @DeleteMapping("/{id}")
    public void deleteUtilisateur(@PathVariable Long id) {
        utilisateurService.deleteUtilisateurById(id);
    }
}
