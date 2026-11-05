// sebastian chisiu

import { useState } from "react";
import { Link } from "react-router-dom";
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";
import Espacement from "../../composants/espacement"

import { MdAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";


export default function Contact() {
    const [accepteDonnees, setAccepteDonnees] = useState(false);
    const [champsValides, setChampsValides] = useState(false);

    function verifierChamps(event) {
        const champs = event.currentTarget.querySelectorAll(
            "input[required]:not([type=checkbox]), textarea[required]"
        );
        setChampsValides(
            Array.from(champs).every(
                (champ) => champ.value.trim() !== "" && champ.validity.valid
            )
        );
    }

    return (
        <section className="min-h-screen">
            <TitreProps titre={"Nous contacter"}></TitreProps>
            <BannerHead/>
            <Filarial titrePage={"Nous contacter"}/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[85vh] w-[90%] lg:w-[80%] mx-auto my-10 items-stretch max-w-7xl">
                <div className="flex flex-col h-full text-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col bg-[#00936e] rounded-md items-center justify-center p-6 text-center gap-3">
                            <div className="mb-2">
                                <MdAlternateEmail size={30} />
                            </div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-sm text-white mt-1">example.jpo@gmail.com</p>
                        </div>
                        <div className="flex flex-col bg-[#00936e] rounded-md items-center justify-center p-6 text-center gap-3">
                            <div className="mb-2">
                                <BsFillTelephoneFill size={30}/>
                            </div>
                            <h3 className="text-xl font-semibold">Téléphone</h3>
                            <p className="text-sm text-white mt-1">01 64 36 44 15</p>
                        </div>
                        <div className="flex flex-col bg-[#00936e] rounded-md items-center justify-center p-6 text-center gap-3 sm:col-span-2">
                            <div className="mb-2">
                                <FaMapPin size={30}/>
                            </div>
                            <h3 className="text-xl font-semibold">Adresse</h3>
                            <p className="text-sm text-white mt-1">17 Rue Jablinot, 77100 Meaux - France</p>
                        </div>
                    </div>
                    <div className="w-full mt-4 flex-1 min-h-62.5">
                        <iframe
                            src="https://www.google.com/maps/d/u/0/embed?mid=1CL_CfHqV1qgPkJAHlLORT95OJFVJYCc&ehbc=2E312F&noprof=1"
                            title="Carte Google Maps de l'IUT de Meaux"
                            className="block h-full w-full border-0 rounded-lg shadow-lg"
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                </div>
                <div className="bg-white rounded-md px-8 py-8 border border-gray-300 flex flex-col justify-start">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Nous Contacter</h2>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed italic">Les champs obligatoires sont indiqués d'une étoile (*).</p>

                    <form className="flex flex-col gap-4" onChange={verifierChamps}>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="nom" className="text-xs font-semibold text-gray-700">Nom*</label>
                            <input id="nom" name="nom" type="text" required placeholder="Exemple : Dupont" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212684] focus:border-[#212684] transition" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="prenom" className="text-xs font-semibold text-gray-700">Prénom*</label>
                            <input id="prenom" name="prenom" type="text" required placeholder="Exemple : Jean" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212684] focus:border-[#212684] transition" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="email" className="text-xs font-semibold text-gray-700">Email*</label>
                            <input id="email" name="email" type="email" required placeholder="Exemple : JeanDupont@univ-eiffel.fr" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212684] focus:border-[#212684] transition" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="sujet" className="text-xs font-semibold text-gray-700">Sujet*</label>
                            <input id="sujet" name="sujet" type="text" required placeholder="Exemple : Renseignement" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212684] focus:border-[#212684] transition" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="message" className="text-xs font-semibold text-gray-700">Message*</label>
                            <textarea id="message" name="message" rows="13" required placeholder="Ecrivez votre message ici" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212684] focus:border-[#212684] transition resize-none" />
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                            <div className="flex items-start gap-3">
                                <input
                                    id="accepteDonnees"
                                    name="accepteDonnees"
                                    type="checkbox"
                                    required
                                    checked={accepteDonnees}
                                    onChange={(event) => setAccepteDonnees(event.target.checked)}
                                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-gray-300 accent-[#212684] focus:ring-2 focus:ring-[#212684]/20"
                                />
                                <label
                                    htmlFor="accepteDonnees"
                                    className="text-sm leading-6 text-gray-700"
                                >
                                    Les informations recueillies dans ce formulaire sont traitées par
                                    l’Université Gustave Eiffel afin de répondre à votre demande.
                                    En cochant cette case, j’accepte que mes données personnelles
                                    soient collectées et stockées conformément aux{" "}
                                    <Link
                                        to="/mentions-legales"
                                        className="font-semibold text-[#212684] underline underline-offset-2 hover:text-[#161b7d]"
                                    >
                                        mentions légales
                                    </Link>.
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" disabled={!accepteDonnees || !champsValides} className="flex flex-row p-3 items-center gap-2 mt-2 bg-[#31379A] hover:bg-[#4146aa] text-white font-medium rounded-md transition duration-200 cursor-pointer text-sm disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#31379A]">
                                <p>Envoyer</p>
                                <RiMailSendLine/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Espacement/>
        </section>
    );
}