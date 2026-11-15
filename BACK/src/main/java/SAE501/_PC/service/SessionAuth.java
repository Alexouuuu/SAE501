package SAE501._PC.service;

import SAE501._PC.entity.Utilisateur;
import SAE501._PC.repository.UtilisateurRepo;
import SAE501._PC.enums.Role;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Component 
public class SessionAuth {
    private static final String USER_ID = "utilisateurId";
    
    private final UtilisateurRepo utilisateurRepo;
    
    public SessionAuth(UtilisateurRepo utilisateurRepo) {
        this.utilisateurRepo = utilisateurRepo;
    }
    
    //On mémorise qui est connecté dans la session -> Appelé une fois à la connexion
    public void ouvrir(HttpSession session, Utilisateur utilisateur) {
        session.setAttribute(USER_ID, utilisateur.getId());
    }
    
    public Utilisateur utilisateurConnecte(HttpSession session) {
        if (session == null || session.getAttribute(USER_ID) == null) { //vérifie la session
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Connexion Requise.");
        }
        Long id = (Long) session.getAttribute(USER_ID); //récupérer l'id enregistré a la connexion
        return utilisateurRepo.findById(id).orElseThrow(() -> {  //Cherche le compte s'il existe -> si supprimé entre temps , session deconnectée.
            session.invalidate(); 
            return new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Ce compte n'existe pas.");
        });
    }
    
    //Vérifier si connecté -> erreur sinon
    public void exigerConnexion(HttpSession session) {
        utilisateurConnecte(session);
    }
    
    //Vérification si connecté Admin -> Erreur sinon
    public void exigerAdmin(HttpSession session) {
        Utilisateur utilisateur = utilisateurConnecte(session);
        
        if (utilisateur.getRole() != Role.ADMIN) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Accès réservé aux admins.");
        }
    }
    
    //Retourner l'ID de l'utilisateur connecté
    public Long utilisateurId(HttpSession session) {
        return utilisateurConnecte(session).getId();
    }
    
    //Retourne le role de l'utilisateur connecté
    public String role(HttpSession session){
        return utilisateurConnecte(session).getRole().name();
    }
    
    //détruire la session a la deconnexion
    public void fermer(HttpSession session) {
        if (session != null) {
            session.invalidate();
        }
    }
}
