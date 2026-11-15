package SAE501._PC.controller;

import SAE501._PC.entity.InscriptionJPO;
import SAE501._PC.service.InscriptionJpoService;
import SAE501._PC.service.SessionAuth;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/inscriptionsjpo")
public class InscriptionsJpoController {
    
    @Autowired 
    private InscriptionJpoService inscriptionJpoService;
    @Autowired
    private SessionAuth sessionAuth;
    
    @PostMapping
    public InscriptionJPO createInscriptionJpo(@RequestBody InscriptionJPO inscriptionJpo, HttpSession session){
        sessionAuth.exigerAdmin(session);
        return inscriptionJpoService.saveInscriptionJPO(inscriptionJpo);
    }
    
    @GetMapping 
    public Iterable<InscriptionJPO> getAllInscriptionJpos(HttpSession session) {
        sessionAuth.exigerAdmin(session);
        return inscriptionJpoService.getAllInscriptionJpos();
    }
    
    @GetMapping("/{id}")
    public InscriptionJPO getInscriptionJpoById(@PathVariable Long id, HttpSession session) {
        sessionAuth.exigerAdmin(session);
        return inscriptionJpoService.getInscriptionJpoById(id);
    }
    
    @DeleteMapping("/{id}")
    public void deleteInscriptionJpo(@PathVariable Long id, HttpSession session) {
        sessionAuth.exigerAdmin(session);
        inscriptionJpoService.deleteInscriptionJpoById(id);
    }
}
