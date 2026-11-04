package SAE501._PC.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import SAE501._PC.entity.Utilisateur;
import SAE501._PC.repository.UtilisateurRepo;
import SAE501._PC.controller.UtilisateurAdminPayload;
import SAE501._PC.enums.Role;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@Service 
public class UtilisateurService {
    
    @Autowired 
    private UtilisateurRepo utilisateurRepo;
    
    public List<UtilisateurAdminPayload> getAllUtilisateurs() {
        return utilisateurRepo.findByRoleOrderByNomAsc(Role.VISITEUR).stream()
            .map(UtilisateurAdminPayload::from).toList();
    }

    public UtilisateurAdminPayload modifierPresenceJpo(Long id, boolean present) {
        Utilisateur utilisateur = utilisateurRepo.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Utilisateur introuvable."));
        utilisateur.setPresentJpo(present);
        return UtilisateurAdminPayload.from(utilisateurRepo.save(utilisateur));
    }
}
