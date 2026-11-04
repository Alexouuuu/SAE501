# SAE501
-----

## Créer le compte administrateur initial

Le compte administrateur initial est créé au démarrage du backend si les variables d’environnement suivantes sont définies. Choisissez un mot de passe unique d’au moins 12 caractères et ne l’ajoutez pas aux fichiers du dépôt.

Dans PowerShell, avant de démarrer le backend :

```powershell
$env:APP_ADMIN_EMAIL = "admin@example.fr"
$env:APP_ADMIN_PASSWORD = "choisir-un-mot-de-passe-unique-de-12-caracteres-minimum"
Set-Location BACK
.\mvnw.cmd spring-boot:run
```

En développement local, vous pouvez ouvrir le tableau de bord sans créer de compte administrateur en démarrant le backend avec le profil `local` :

```powershell
Set-Location BACK
.\mvnw.cmd spring-boot:run "-Dspring-boot.run.profiles=local"
```

La page du tableau de bord est accessible sans connexion pendant le développement. Ce profil utilise une base H2 en mémoire : aucune base MySQL ni aucun compte admin à créer pour tester les onglets et leurs opérations. Les données de test sont supprimées à l’arrêt du backend. Le contournement d’authentification des API d’administration est uniquement autorisé avec les profils Spring `local` ou `dev`. N’activez pas `app.admin.dev-access` pour une instance exposée ou de production ; hors de ces profils, les opérations d’administration côté API exigent une session administrateur.

Les profils élèves enregistrent la date de naissance pour calculer des tranches d’âge ; le tableau de bord n’affiche que l’âge calculé, et non la date de naissance. En production derrière HTTPS, définissez `SESSION_COOKIE_SECURE=true` pour marquer le cookie de session comme sécurisé.