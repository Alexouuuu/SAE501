import TitreProps from "../../composants/titreProps";

export default function Contact(){
    return(
        <section className="min-h-screen py-6">
            <TitreProps titre={"Nous contacter"}></TitreProps>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[85vh] w-[90%] lg:w-[80%] max-w-6xl mx-auto my-10 items-stretch">
                <div className="flex flex-col h-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col bg-[#FAF5F2] rounded-md items-center justify-center p-6 text-center gap-3">
                            <div className="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentcolor" viewBox="0 0 24 24">
	                                <path d="M0 0h24v24H0z" fill="none" />
	                                <path fill="currentColor" d="M18.75 12a6.75 6.75 0 1 0-3.375 5.846a.75.75 0 0 1 .75 1.299A8.251 8.251 0 1 1 20.25 12a.75.75 0 0 1-1.5 0" />
	                                <path fill="currentColor" d="M15.75 13a1.5 1.5 0 0 0 3 0h1.5a3 3 0 0 1-6 0z" />
	                                <path fill="currentColor" d="M14.25 12a2.25 2.25 0 1 0-4.5 0a2.25 2.25 0 0 0 4.5 0m1.5 0a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0m4.5-.75V13h-1.5v-1.75z" />
	                                <path fill="currentColor" d="M14.25 14V9a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.5 0" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-sm text-gray-800 mt-1">example.jpo@gmail.com</p> 
                        </div>
                        <div className="flex flex-col bg-[#FAF5F2] rounded-md items-center justify-center p-6 text-center gap-3">
                            <div className="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentcolor" viewBox="0 0 16 16">
	                                <path d="M0 0h16v16H0z" fill="none" />
	                                <path fill="currentColor" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608a17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42a18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Téléphone</h3>
                            <p className="text-sm text-gray-800 mt-1">01 64 36 44 15</p>
                        </div>
                        <div className="flex flex-col bg-[#FAF5F2] rounded-md items-center justify-center p-6 text-center gap-3">
                            <div className="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentcolor" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22.39v-10.4" />
                                        <circle cx="12" cy="6.87" r="5.13" fill="currentColor" opacity=".2" transform="rotate(90 12 6.87)" />
                                        <circle cx="12" cy="6.87" r="5.13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="rotate(90 12 6.87)" />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Adresse</h3>
                            <p className="text-sm text-gray-800 mt-1">17 Rue Jablinot, 77100 Meaux - France</p>
                        </div>
                        <div className="flex flex-col bg-[#FAF5F2] rounded-md items-center justify-center p-6 text-center">
                            <h3 className="text-xl font-semibold">à trouver</h3>
                        </div>
                    </div>
                    <div className="w-full mt-4 flex-1 min-h-[250px]">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.9286211451595!2d2.875359812365191!3d48.9548449937939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e8a11cceb9ee4f%3A0x143615de96b042c5!2sIUT%20De%20Meaux%20Universit%C3%A9%20Gustave%20Eiffel!5e0!3m2!1sfr!2sfr!4v1793624747829!5m2!1sfr!2sfr" 
                            className="h-full w-full rounded-md border-0" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="strict-origin-when-cross-origin">
                        </iframe>
                    </div>
                </div>
                <div className="bg-white rounded-md px-8 py-8 border border-gray-300 flex flex-col justify-start">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Nous Contacter</h2>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas inventore recusandae voluptate, ea quasi voluptatum nemo laudantium rerum non totam doloremque. Debitis ipsam voluptatibus officia corrupti dolore dolores alias aspernatur.</p>

                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="nom" className="text-xs font-semibold text-gray-700">Nom</label>
                            <input id="nom" type="text" placeholder="Exemple : Dupont" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-green-300 transition" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="prenom" className="text-xs font-semibold text-gray-700">Prénom</label>
                            <input id="prenom" type="text" placeholder="Exemple : Jean" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-green-300 transition" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="email" className="text-xs font-semibold text-gray-700">Email</label>
                            <input id="email" type="email" placeholder="Exemple : JeanDupont@univ-eiffel.fr" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-green-300 transition" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="sujet" className="text-xs font-semibold text-gray-700">Sujet</label>
                            <input id="sujet" type="text" placeholder="Exemple : Renseignement" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-green-300 transition" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="message" className="text-xs font-semibold text-gray-700">Message</label>
                            <textarea id="message" rows="10" placeholder="Ecrivez votre message ici" className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-green-300 transition resize-none" />
                        </div>
                        <button type="submit" className="w-full mt-2 py-3 bg-[#31379A] hover:bg-[#31379D] text-white font-medium rounded-md transition duration-200 cursor-pointer text-sm">Envoyer →</button>
                    </form>
                </div>
            </div>
        </section>
    );
}