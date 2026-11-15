// MentionsLegales
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";

import LoremIpsum from "../../composants/loremIpsum";
import Espacement from "../../composants/espacement"

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const liensdroits = [
    {id : 1, titre : "Conditions Générales d'Utilisation", lien : "/cgu"},
    {id : 2, titre : "Politique de Cookies", lien : "/cookies"},
    {id : 3, titre : "Mentions Légales", lien : "/mentions-legales"},
    {id : 4, titre : "Politique de confidentialité", lien : "/politique-confidentialite"},
]

export default function MentionsLegales() {
    const [activePage, setActivePage] = useState("/mentions-legales");
    const contentRef = useRef(null);
    const navigationRef = useRef(null);

    useEffect(() => {
        const media = gsap.matchMedia();

        media.add("(min-width: 1024px)", () => {
            const content = contentRef.current;
            const navigation = navigationRef.current;
            if (!content || !navigation) return;

            ScrollTrigger.create({
                trigger: content,
                start: "top top+=96",
                endTrigger: content,
                end: () => `bottom top+=${navigation.offsetHeight + 96}`,
                pin: navigation,
                pinSpacing: false,
                invalidateOnRefresh: true,
            });
        });

        return () => media.revert();
    }, []);

    return (
        <section>
            
            <TitreProps titre={"Mentions Légales"}></TitreProps>
            <BannerHead />
            <Filarial titrePage={"Mentions Légales"} />
            
            <div ref={contentRef} className="mx-auto my-15 flex w-[85%] max-w-7xl flex-col gap-8 lg:flex-row lg:gap-12">
                <nav ref={navigationRef} aria-label="Pages juridiques" className="self-start lg:w-64 lg:shrink-0">
                    {liensdroits.map((lien) => (
                        <Link
                            key={lien.id}
                            to={lien.lien}
                            onClick={() => setActivePage(lien.lien)}
                            aria-current={activePage === lien.lien ? "page" : undefined}
                            className={`mb-2 block rounded px-3 py-2 hover:underline ${
                                activePage === lien.lien
                                    ? "bg-blue-50 font-semibold text-[#2f2a85]"
                                    : "text-blue-500"
                            }`}
                        >
                            {lien.titre}
                        </Link>
                    ))}
                </nav>
                <section aria-label="titre et texte" className="min-w-0 flex-1">
                    <h1 className="mb-8 text-3xl font-bold text-gray-800">
                    Mentions Légales
                    </h1>
                    <hr className="my-3 border-gray-300"/>

                    <article>
                        <LoremIpsum />
                    </article>
                </section>
            </div>
            <Espacement />
        </section>
    )
}