import { useState } from "react";

// Traduit l'état de validité natif d'un champ en message lisible
function messageNatif(champ) {
    const v = champ.validity;

    if (champ.required && champ.type !== "checkbox" && champ.value.trim() === "") {
        return "Ce champ est obligatoire.";
    }
    if (v.valid) return "";
    if (v.valueMissing) {
        return champ.type === "checkbox" ? "Cette case doit être cochée." : "Ce champ est obligatoire.";
    }
    if (v.typeMismatch && champ.type === "email") {
        return "Saisissez une adresse e-mail valide (ex. nom@exemple.fr).";
    }
    if (v.tooShort) return `Saisissez au moins ${champ.minLength} caractères.`;
    if (v.patternMismatch) return champ.dataset.messageFormat || "Le format n'est pas valide.";
    return "La valeur saisie n'est pas valide.";
}

// Gère les erreurs affichées sous chaque champ.
// `regleSupp(nom, formulaire)` permet d'ajouter des règles (ex. confirmation du mot de passe).
export default function useValidation(regleSupp) {
    const [erreurs, setErreurs] = useState({});

    function erreurDe(champ, formulaire) {
        return messageNatif(champ) || (regleSupp && regleSupp(champ.name, formulaire)) || "";
    }

    function champsValidables(formulaire) {
        return Array.from(formulaire.elements).filter(
            (champ) => champ.name && champ.willValidate
        );
    }

    // À la sortie d'un champ : on ne signale pas un champ vide que l'utilisateur n'a fait que traverser
    function surSortie(event) {
        const champ = event.target;
        if (!champ.name || !champ.willValidate || champ.type === "checkbox") return;
        if (champ.value === "" && !erreurs[champ.name]) return;

        setErreurs((actuelles) => ({
            ...actuelles,
            [champ.name]: erreurDe(champ, event.currentTarget),
        }));
    }

    // Pendant la saisie : on met à jour uniquement les champs déjà en erreur
    function surSaisie(event) {
        const formulaire = event.currentTarget;
        const enErreur = champsValidables(formulaire).filter((champ) => erreurs[champ.name]);
        if (enErreur.length === 0) return;

        setErreurs((actuelles) => {
            const suivantes = { ...actuelles };
            enErreur.forEach((champ) => {
                suivantes[champ.name] = erreurDe(champ, formulaire);
            });
            return suivantes;
        });
    }

    // À l'envoi : valide tout et place le focus sur le premier champ en erreur
    function validerTout(formulaire) {
        const nouvelles = {};
        let premier = null;

        champsValidables(formulaire).forEach((champ) => {
            const message = erreurDe(champ, formulaire);
            if (message) {
                nouvelles[champ.name] = message;
                premier = premier || champ;
            }
        });

        setErreurs(nouvelles);
        if (premier) premier.focus();
        return !premier;
    }

    return { erreurs, surSortie, surSaisie, validerTout };
}
