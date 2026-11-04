import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";

import { Link } from "react-router-dom";


const planDuSiteData = [
    {
        id: 1,
        titreSection: "L'IUT & FORMATION",
        categories: [{
            titre: "Découverte",
            liens: [
                { nom: "Accueil", route: "/" },
                { nom: "La Formation", route: "/formation" },
                { nom: "Visite Virtuelle", route: "/visite-virtuelle" },
            ]
        }, {
            titre: "Évènements & Contact",
            liens: [
                { nom: "Événements de la formation", route: "/evenements" },
                { nom: "S'inscrire à la JPO", route: "/jpo" },
                { nom: "Nous contacter", route: "/contact" },
            ]
        }]
    }, {
        id: 2,
        titreSection: "ESPACE PERSONNEL",
        categories: [{
            titre: "Gestion du Compte",
            liens: [
                { nom: "Mon Compte", route: "/mon-compte" },
                { nom: "Connexion/Inscription", route: "/auth" },
            ]
        }, {
            titre: "Navigation",
            liens: [
                { nom: "Plan du Site", route: "/planDuSite" },
            ]
        }]
    }, {
        id: 3,
        titreSection: "LÉGAL & CONFIDENTIALITÉ",
        categories: [{
            titre: "Informations Légales",
            liens: [
                { nom: "Mentions Légales", route: "/mentions-legales" },
                { nom: "Conditions Générales d'Utilisation", route: "/cgu" },
            ]
        }, {
            titre: "Données Personnelles",
            liens: [
                { nom: "Politique de Confidentialité", route: "/politique-confidentialite" },
                { nom: "Utilisation des Cookies", route: "/cookies" },
            ]
        }]
    }
];

export default function PlanDuSite() {
    return (
        <section>
            <TitreProps titre={"Plan du site"} />
            <BannerHead />
            <Filarial titrePage={"Plan du site"} />
            <div className="w-[85%] mx-auto my-10">
                {planDuSiteData.map((section, index) => (
                    <div key={section.id}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">{section.titreSection}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">{section.categories.map((cat, catIndex) => (
                            <div key={catIndex} className="flex flex-col">
                                <h3 className="text-sm font-semibold text-gray-800 mb-3">{cat.titre}</h3>
                                <div className="flex flex-col gap-1.5 mb-8">{cat.liens.map((lien, lienIndex) => (
                                    <Link key={lienIndex} to={lien.route} className="text-sm text-gray-600 hover:text-black hover:underline">{lien.nom}</Link>
                                ))}
                                </div></div>
                        ))}
                        </div>
                        {index < planDuSiteData.length - 1 && (<hr className="border-gray-300 mb-8" />)}
                    </div>
                ))}
            </div>
        </section>
    );
}