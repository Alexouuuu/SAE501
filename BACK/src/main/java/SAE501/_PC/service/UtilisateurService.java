package SAE501._PC.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import SAE501._PC.entity.Utilisateur;
import SAE501._PC.repository.UtilisateurRepo;

@Service 
public class UtilisateurService {
    
    @Autowired 
    private UtilisateurRepo utilisateurRepo;
    
    public Utilisateur saveUtilisateur(Utilisateur utilisateur){
        return utilisateurRepo.save(utilisateur);
    }
    
    public Iterable<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepo.findAll();
    }
    
    public Utilisateur getUtilisateurById(Long id){
        return utilisateurRepo.findById(id).orElse(null);
    }
    
    public void deleteUtilisateurById(Long id){
        utilisateurRepo.deleteById(id);
    }
}
