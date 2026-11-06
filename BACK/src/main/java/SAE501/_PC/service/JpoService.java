package SAE501._PC.service;

import SAE501._PC.entity.JPO;
import SAE501._PC.repository.JpoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class JpoService {
    
    @Autowired 
    private JpoRepo jpoRepo;
    
    public JPO saveJpo(JPO jpo) {
        valider(jpo);
        return jpoRepo.save(jpo);
    }

    public JPO updateJpo(Long id, JPO donnees) {
        JPO jpo = getJpoById(id);
        valider(donnees);
        jpo.setTitre(donnees.getTitre().trim());
        jpo.setDate(donnees.getDate());
        jpo.setInscriptionsOuvertes(donnees.getInscriptionsOuvertes());
        return jpoRepo.save(jpo);
    }

    private void valider(JPO jpo) {
        if (jpo.getTitre() == null || jpo.getTitre().isBlank() || jpo.getDate() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Le titre et la date sont obligatoires.");
        }
    }
    
    public Iterable<JPO> getAllJpos() {
        return jpoRepo.findAll();
    }
    
    public JPO getJpoById(Long id) {
        return jpoRepo.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "JPO introuvable."));
    }
    
    public void deleteJpoById(Long id) {
        jpoRepo.delete(getJpoById(id));
    }
}
