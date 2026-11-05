import { Link } from "react-router-dom";

export default function LandingAccueil({
    ecole = "Journée Portes Ouvertes 2026",
    titre = "Le numérique, la création et la communication réunis en une formation",
    description = "Découvrez le BUT Métiers du Multimédia et de l’Internet : une formation pluridisciplinaire pour imaginer, concevoir et réaliser des projets numériques.",
    backgroundImage = "/images/IUT.webp",
}) {
    return (
        <section>
            <section className="relative isolate flex min-h-144 w-full items-center overflow-hidden py-16 sm:min-h-160 sm:py-20">
                <img
                    src={backgroundImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
                />
                
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#2f2a85]/85 via-[#2f2a85]-950/65 to-[#2f2a85]-950/25" />

                <div className="relative z-10 mx-auto max-w-4xl w-full px-6 text-center text-white sm:px-10 md:mx-0 md:px-16 md:text-left">
                    <p className="mb-3 text-lg font-medium sm:text-xl">{ecole}</p>
                    <h1 className="mx-auto max-w-6xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:mx-0 md:text-4xl lg:text-6xl">
                        {titre}
                    </h1>
                    <p className="mx-auto mt-6 text-base leading-7 text-white/90 sm:text-lg sm:leading-8 md:mx-0">
                        {description}
                    </p>
                </div>
            </section>
            <section className="bg-[#3c3792] py-2 text-center text-white"></section>
        </section>
    );
}