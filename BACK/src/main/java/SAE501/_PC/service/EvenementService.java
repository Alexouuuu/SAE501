package SAE501._PC.service;

import SAE501._PC.entity.Evenement;
import SAE501._PC.repository.EvenementRepo;
import SAE501._PC.dto.EvenementPayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@Service 
public class EvenementService {
    
    @Autowired
    private EvenementRepo evenementRepo;
    
    public Evenement saveEvenement(EvenementPayload payload) {
        return saveEvenement(new Evenement(), payload);
    }
    
    public Evenement updateEvenement(Long id, EvenementPayload payload) {
        return saveEvenement(getEvenementById(id), payload);
    }
    
    private Evenement saveEvenement(Evenement evenement, EvenementPayload payload) {
        if (payload.titre() == null || payload.titre().isBlank() || payload.debut() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Le titre et la date de début sont obligatoires.");
        }
        evenement.setTitre(payload.titre().trim());
        evenement.setDescription(payload.description());
        evenement.setDebut(payload.debut());
        evenement.setFin(payload.fin());
        evenement.setCapaciteMax(payload.capaciteMax());
        evenement.setSalle(payload.salle());
        evenement.setMatiere(payload.matiere());
        evenement.setActiviteJpo(Boolean.TRUE.equals(payload.activiteJpo()));
        evenement.setJpo(null);
        return evenementRepo.save(evenement);
    }
    
    public List<Evenement> getAllEvenements() {
        return evenementRepo.findByActiviteJpoFalseOrActiviteJpoIsNullOrderByDebutAsc();
    }

    public List<Evenement> getEvenementsJpo() {
        return evenementRepo.findByActiviteJpoTrueOrderByDebutAsc();
    }

    public Evenement getEvenementById(Long id) {
        return evenementRepo.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Événement introuvable."));
    }

    public void deleteEvenementById(Long id) {
        evenementRepo.delete(getEvenementById(id));
    }
}
