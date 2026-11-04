package SAE501._PC.controller;

import SAE501._PC.entity.Evenement;
import SAE501._PC.service.EvenementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/evenements")
@CrossOrigin(origins = "http://localhost:5173")
public class EvenementController {
    
    @Autowired 
    private EvenementService evenementService;
    
    @PostMapping
    public EvenementPayload createEvenement(@RequestBody EvenementPayload payload){
        return EvenementPayload.from(evenementService.saveEvenement(payload));
    }
    
    @GetMapping 
    public List<EvenementPayload> getAllEvenements() {
        return evenementService.getAllEvenements().stream().map(EvenementPayload::from).toList();
    }

    @GetMapping("/jpo")
    public List<EvenementPayload> getEvenementsJpo() {
        return evenementService.getEvenementsJpo().stream().map(EvenementPayload::from).toList();
    }
    
    @GetMapping("/{id}")
    public EvenementPayload getEvenementById(@PathVariable Long id) {
        return EvenementPayload.from(evenementService.getEvenementById(id));
    }

    @PutMapping("/{id}")
    public EvenementPayload updateEvenement(@PathVariable Long id, @RequestBody EvenementPayload payload) {
        return EvenementPayload.from(evenementService.updateEvenement(id, payload));
    }
    
    @DeleteMapping("/{id}")
    public void deleteEvenement(@PathVariable Long id) {
        evenementService.deleteEvenementById(id);
    }
}
