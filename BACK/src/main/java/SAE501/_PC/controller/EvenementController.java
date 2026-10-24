package SAE501._PC.controller;

import SAE501._PC.entity.Evenement;
import SAE501._PC.service.EvenementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/evenements")
public class EvenementController {
    
    @Autowired 
    private EvenementService evenementService;
    
    @PostMapping
    public Evenement createEvenement(@RequestBody Evenement evenement){
        return evenementService.saveEvenement(evenement);
    }
    
    @GetMapping 
    public Iterable<Evenement> getAllEvenements() {
        return evenementService.getAllEvenements();
    }
    
    @GetMapping("/{id}")
    public Evenement getEvenementById(@PathVariable Long id) {
        return evenementService.getEvenementById(id);
    }
    
    @DeleteMapping("/{id}")
    public void deleteEvenement(@PathVariable Long id) {
        evenementService.deleteEvenementById(id);
    }
}
