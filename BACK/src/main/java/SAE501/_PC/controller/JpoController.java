package SAE501._PC.controller;

import SAE501._PC.entity.JPO;
import SAE501._PC.service.JpoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/jpo")
public class JpoController {
    
    @Autowired 
    private JpoService jpoService;
    
    @PostMapping
    public JPO createeJpo(@RequestBody JPO jpo){
        return jpoService.saveJpo(jpo);
    }
    
    @GetMapping 
    public Iterable<JPO> getAllJpos() {
        return jpoService.getAllJpos();
    }
    
    @GetMapping("/{id}")
    public JPO getJpoById(@PathVariable Long id) {
        return jpoService.getJpoById(id);
    }
    
    @DeleteMapping("/{id}")
    public void deleteJpo(@PathVariable Long id) {
        jpoService.deleteJpoById(id);
    }
}
