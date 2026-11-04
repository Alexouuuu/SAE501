package SAE501._PC.service;

import SAE501._PC.entity.Utilisateur;
import SAE501._PC.enums.Role;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Component
public class SessionAuth {
    private static final String USER_ID = "utilisateurId";
    private static final String USER_ROLE = "role";
    private final Environment environment;
    private final boolean developmentAccess;

    public SessionAuth(Environment environment, @Value("${app.admin.dev-access:false}") boolean developmentAccess) {
        this.environment = environment;
        this.developmentAccess = developmentAccess;
    }

    public boolean isDevelopmentAccessEnabled() {
        return developmentAccess && environment.acceptsProfiles(Profiles.of("local", "dev"));
    }

    public void ouvrir(HttpSession session, Utilisateur utilisateur) {
        session.setAttribute(USER_ID, utilisateur.getId());
        session.setAttribute(USER_ROLE, utilisateur.getRole().name());
    }

    public void exigerAdmin(HttpSession session) {
        if (isDevelopmentAccessEnabled()) return;
        if (session == null || session.getAttribute(USER_ID) == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Connexion requise.");
        }
        if (!Role.ADMIN.name().equals(session.getAttribute(USER_ROLE))) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Accès réservé aux administrateurs.");
        }
    }

    public void exigerConnexion(HttpSession session) {
        if (isDevelopmentAccessEnabled()) return;
        if (session == null || session.getAttribute(USER_ID) == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Connexion requise.");
        }
    }

    public Long utilisateurId(HttpSession session) {
        exigerConnexion(session);
        if (isDevelopmentAccessEnabled()) return 0L;
        return (Long) session.getAttribute(USER_ID);
    }

    public String role(HttpSession session) {
        exigerConnexion(session);
        if (isDevelopmentAccessEnabled()) return Role.ADMIN.name();
        return (String) session.getAttribute(USER_ROLE);
    }
}
