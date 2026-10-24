package SAE501._PC.service;

import SAE501._PC.entity.JPO;
import SAE501._PC.repository.JpoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JpoService {
    
    @Autowired 
    private JpoRepo jpoRepo;
    
    public JPO saveJpo(JPO jpo) {
        return jpoRepo.save(jpo);
    }
    
    public Iterable<JPO> getAllJpos() {
        return jpoRepo.findAll();
    }
    
    public JPO getJpoById(Long id) {
        return jpoRepo.findById(id).orElse(null);
    }
    
    public void deleteJpoById(Long id) {
        jpoRepo.deleteById(id);
    }
}
