package SAE501._PC.service;

import SAE501._PC.entity.Evenement;
import SAE501._PC.repository.EvenementRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service 
public class EvenementService {
    
    @Autowired
    private EvenementRepo evenementRepo;
    
    public Evenement saveEvenement(Evenement evenement) {
        return evenementRepo.save(evenement);
    }
    
    public Iterable<Evenement> getAllEvenements(){
        return evenementRepo.findAll();
    }
    
    public Evenement getEvenementById(Long id) {
        return evenementRepo.findById(id).orElse(null);
    }
    
    public void deleteEvenementById(Long id) {
        evenementRepo.deleteById(id);
    }
}
