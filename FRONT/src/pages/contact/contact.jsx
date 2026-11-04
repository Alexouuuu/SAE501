import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";

import { MdAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="min-h-screen">
            <TitreProps titre={"Nous contacter"}></TitreProps>
            <BannerHead/>
            <Filarial titrePage={"Nous contacter"}/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[85vh] w-[90%] lg:w-[80%] mx-auto my-10 items-stretch">
                <div className="flex flex-col h-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col bg-[#92c56e] rounded-md items-center justify-center p-6 text-center gap-3">
                            <div className="mb-2">
                                <MdAlternateEmail size={30} />
                            </div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-sm text-gray-800 mt-1">example.jpo@gmail.com</p>
                        </div>
                        <div className="flex flex-col bg-[#92c56e] rounded-md items-center justify-center p-6 text-center gap-3">
                            <div className="mb-2">
                                <BsFillTelephoneFill size={30}/>
                            </div>
                            <h3 className="text-xl font-semibold">Téléphone</h3>
                            <p className="text-sm text-gray-800 mt-1">01 64 36 44 15</p>
                        </div>
                        <div className="flex flex-col bg-[#92c56e] rounded-md items-center justify-center p-6 text-center gap-3">
                            <div className="mb-2">
                                <FaMapPin size={30}/>
                            </div>
                            <h3 className="text-xl font-semibold">Adresse</h3>
                            <p className="text-sm text-gray-800 mt-1">17 Rue Jablinot, 77100 Meaux - France</p>
                        </div>
                        <div className="flex flex-col bg-[#92c56e] rounded-md items-center justify-center p-6 text-center">
                            <div><FaRegQuestionCircle size={30}/></div>
                            <h3 className="text-xl font-semibold">à trouver</h3>
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
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas inventore recusandae voluptate, ea quasi voluptatum nemo laudantium rerum non totam doloremque. Debitis ipsam voluptatibus officia corrupti dolore dolores alias aspernatur.</p>

                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="nom" className="text-xs font-semibold text-gray-700">Nom</label>
                            <input id="nom" type="text" placeholder="Exemple : Dupont" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212684] focus:border-[#212684] transition" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="prenom" className="text-xs font-semibold text-gray-700">Prénom</label>
                            <input id="prenom" type="text" placeholder="Exemple : Jean" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212684] focus:border-[#212684] transition" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="email" className="text-xs font-semibold text-gray-700">Email</label>
                            <input id="email" type="email" placeholder="Exemple : JeanDupont@univ-eiffel.fr" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212684] focus:border-[#212684] transition" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="sujet" className="text-xs font-semibold text-gray-700">Sujet</label>
                            <input id="sujet" type="text" placeholder="Exemple : Renseignement" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212684] focus:border-[#212684] transition" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="message" className="text-xs font-semibold text-gray-700">Message</label>
                            <textarea id="message" rows="13" placeholder="Ecrivez votre message ici" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212684] focus:border-[#212684] transition resize-none" />
                        </div>
                    </form>
                    <div className="flex justify-end">
                        <button type="submit" className="flex flex-row p-3 items-center gap-2 mt-2 bg-[#31379A] hover:bg-[#4146aa] text-white font-medium rounded-md transition duration-200 cursor-pointer text-sm">
                            <p>Envoyer</p> 
                            <RiMailSendLine/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}