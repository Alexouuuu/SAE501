import { Link } from "react-router-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import { FaLocationArrow } from "react-icons/fa";

const bg = "../images/IUT.webp";

export default function HeroFormation() {
    function scrollToFormation(event) {
        event.preventDefault();
        const target = document.querySelector("#formation");
        if (!target) return;

        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.scrollTo(target, true);
        } else {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <header className="relative isolate overflow-hidden bg-[#2f2a85] text-white">
            <img src={bg} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div className="absolute inset-0 -z-10 bg-[#2f2a85]/60" />
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                        Métiers du multimédia et de l’internet
                    </p>
                    <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
                        BUT MMI
                        <span className="mt-2 block text-2xl font-medium text-white sm:text-3xl">
                            Créez, développez, racontez.
                        </span>
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-7 text-gray-100 sm:text-lg">
                        Une formation pluridisciplinaire pour imaginer et réaliser
                        des projets numériques : du développement web au design,
                        de l’audiovisuel à la création 3D.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            to="/visite-virtuelle"
                            className="gap-3 group inline-flex min-h-12 items-center rounded-md border px-5 py-3 font-semibold text-white transition hover:bg-white/20"
                        >
                            Visiter le bâtiment
                            <FaLocationArrow color="white" className="mt-1 transform transition-transform duration-300 group-hover:rotate-45" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}