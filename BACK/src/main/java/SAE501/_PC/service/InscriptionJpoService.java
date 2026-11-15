package SAE501._PC.service;

import SAE501._PC.entity.InscriptionJPO;
import SAE501._PC.repository.InscriptionJpoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InscriptionJpoService {
    
    @Autowired 
    private InscriptionJpoRepo inscriptionJpoRepo;
    
    public InscriptionJPO saveInscriptionJPO(InscriptionJPO inscriptionJPO) {
        return inscriptionJpoRepo.save(inscriptionJPO);
    }
    
    public Iterable<InscriptionJPO> getAllInscriptionJpos() {
        return inscriptionJpoRepo.findAll();
    }
    
    public InscriptionJPO getInscriptionJpoById(Long id){
        return inscriptionJpoRepo.findById(id).orElse(null);
    }
    
    public void deleteInscriptionJpoById(Long id){
        inscriptionJpoRepo.deleteById(id);
    }
}
