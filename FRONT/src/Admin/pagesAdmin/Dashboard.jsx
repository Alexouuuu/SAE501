// Dashboard admin
import TitreProps from "../../composants/titreProps";

import EventsGestion from "../CategoriesAdmin/EventsGestion";
import JPOGestion from "../CategoriesAdmin/JPOgestion";
import { useState } from "react";

export default function DashBoardAdmin(){
    const [section, setSection] = useState("evenements");
    const sections = [
        { id: "evenements", label: "Événements" },
        { id: "jpo", label: "JPO et programme" },
    ];

    return(
        <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
            <TitreProps titre={"Administration"} />
            <div className="mb-8 flex flex-wrap gap-3" role="tablist" aria-label="Gestion des événements">
                {sections.map((item) => (
                    <button key={item.id} type="button" role="tab" aria-selected={section === item.id} onClick={() => setSection(item.id)} className={`rounded-full px-5 py-2.5 font-semibold ${section === item.id ? "bg-[#212684] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                        {item.label}
                    </button>
                ))}
            </div>
            <div role="tabpanel" className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
                {section === "evenements" ? <EventsGestion /> : <JPOGestion />}
            </div>
        </section>
    )
}