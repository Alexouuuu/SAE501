// Dashboard admin
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";

import EventsGestion from "../CategoriesAdmin/EventsGestion";
import JPOGestion from "../CategoriesAdmin/JPOgestion";
import UsersGestion from "../CategoriesAdmin/UsersGestion";
import Stats from "../CategoriesAdmin/Stats";
import CommentsGestion from "../CategoriesAdmin/CommentsGestion";

import { useState } from "react";

export default function DashBoardAdmin() {
    const [section, setSection] = useState("evenements");
    const sections = [
        { id: "evenements", label: "Événements" },
        { id: "jpo", label: "Activités JPO" },
        { id: "utilisateurs", label: "Utilisateurs" },
        { id: "stats", label: "Statistiques" },
        { id: "commentaires", label: "Commentaires" },
    ];

    return(
        <section>
            <TitreProps titre={"Gestion du site"} />
            <BannerHead />
            <Filarial titrePage={"Gestion du site"} />
            <div className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8">
                <div className="mb-8 flex flex-wrap gap-3" role="tablist" aria-label="Gestion du site">
                    {sections.map((item) => (
                        <button key={item.id} type="button" role="tab" aria-selected={section === item.id} onClick={() => setSection(item.id)} className={`cursor-pointer rounded-full px-5 py-2.5 font-semibold ${section === item.id ? "bg-[#212684] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                            {item.label}
                        </button>
                    ))}
                </div>
                <div role="tabpanel">
                    <hr className="border-gray-200 my-5" />
                    {section === "evenements" && <EventsGestion />}
                    {section === "jpo" && <JPOGestion />}
                    {section === "utilisateurs" && <UsersGestion />}
                    {section === "stats" && <Stats />}
                    {section === "commentaires" && <CommentsGestion />}
                </div>
                
            </div>
        </section>
    )
}