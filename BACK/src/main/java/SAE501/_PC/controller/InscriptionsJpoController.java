package SAE501._PC.controller;

import SAE501._PC.entity.InscriptionJPO;
import SAE501._PC.service.InscriptionJpoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/inscriptionsjpo")
public class InscriptionsJpoController {
    
    @Autowired 
    private InscriptionJpoService inscriptionJpoService;
    
    @PostMapping
    public InscriptionJPO createInscriptionJpo(@RequestBody InscriptionJPO inscriptionJpo){
        return inscriptionJpoService.saveInscriptionJPO(inscriptionJpo);
    }
    
    @GetMapping 
    public Iterable<InscriptionJPO> getAllInscriptionJpos() {
        return inscriptionJpoService.getAllInscriptionJpos();
    }
    
    @GetMapping("/{id}")
    public InscriptionJPO getInscriptionJpoById(@PathVariable Long id) {
        return inscriptionJpoService.getInscriptionJpoById(id);
    }
    
    @DeleteMapping("/{id}")
    public void deleteInscriptionJpo(@PathVariable Long id) {
        inscriptionJpoService.deleteInscriptionJpoById(id);
    }
}
