import TitreProps from "../../composants/titreProps"
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";

import EventsInscriptionsList from "./MonEspaceComps/EventsInscriptionsList"
import JPOInscriptionsList from "./MonEspaceComps/JPOInscriptionsList";
import PlanningCreation from "./MonEspaceComps/PlanningCreation";
import SettingsUsers from "./MonEspaceComps/SettingsUsers";

import { useState } from "react";
import { FaCalendarAlt, FaClipboardList, FaListAlt, FaUserCog } from "react-icons/fa";

export default function MonEspace() {
    const [section, setSection] = useState("jpo");
    const sections = [
        { id: "parametres", label: "Paramètres", Icon: FaUserCog },
        { id: "planning", label: "Mon planning", Icon: FaListAlt },
        { id: "evenements", label: "Mes événements", Icon: FaCalendarAlt },
        { id: "jpo", label: "Mes inscriptions JPO", Icon: FaClipboardList },
    ];
    return (
        <section>
            <TitreProps titre={"Mon espace"} />
            <BannerHead />
            <Filarial titrePage={"Mon espace"} />
            <div className="px-4 py-8 sm:px-8 lg:py-12">
                <div className="mx-auto">


                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                        <nav
                            className="w-full shrink-0 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm lg:sticky lg:top-6 lg:w-64"
                            role="tablist"
                            aria-label="Sections de mon espace"
                            aria-orientation="vertical"
                        >
                            <p className="px-3 pb-3 pt-2 text-xs font-semibold uppercase tracking-wider text-[#212684]">Navigation</p>
                            <div className="flex flex-col gap-2">
                                {sections.map(({ id, label, Icon }) => (
                                    <button
                                        key={id}
                                        id={`${id}-tab`}
                                        type="button"
                                        role="tab"
                                        aria-selected={section === id}
                                        aria-controls={`${id}-panel`}
                                        tabIndex={section === id ? 0 : -1}
                                        onClick={() => setSection(id)}
                                        className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors ${section === id
                                            ? "bg-[#212684]/10 text-[#212684]"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                            }`}
                                    >
                                        <Icon className="shrink-0 text-base" aria-hidden="true" />
                                        <span>{label}</span>
                                    </button>
                                ))}
                            </div>
                        </nav>

                        <div
                            id={`${section}-panel`}
                            className="min-h-72 min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
                            role="tabpanel"
                            aria-labelledby={`${section}-tab`}
                            tabIndex={0}
                        >
                            {section === "parametres" && <SettingsUsers />}
                            {section === "planning" && <PlanningCreation />}
                            {section === "evenements" && <EventsInscriptionsList />}
                            {section === "jpo" && <JPOInscriptionsList />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}