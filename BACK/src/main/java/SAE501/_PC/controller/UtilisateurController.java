package SAE501._PC.controller;

import SAE501._PC.dto.PresenceJpoPayload;
import SAE501._PC.dto.UtilisateurAdminPayload;
import SAE501._PC.service.SessionAuth;
import SAE501._PC.service.UtilisateurService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/utilisateurs")
public class UtilisateurController {
    @Autowired private UtilisateurService utilisateurService;
    @Autowired private SessionAuth sessionAuth;

    @GetMapping
    public Iterable<UtilisateurAdminPayload> getAllUtilisateurs(HttpSession session) {
        sessionAuth.exigerAdmin(session);
        return utilisateurService.getAllUtilisateurs();
    }

    @PatchMapping("/{id}/presence-jpo")
    public UtilisateurAdminPayload modifierPresenceJpo(
        @PathVariable Long id,
        @RequestBody PresenceJpoPayload payload,
        HttpSession session
    ) {
        sessionAuth.exigerAdmin(session);
        return utilisateurService.modifierPresenceJpo(id, Boolean.TRUE.equals(payload.present()));
    }
}
