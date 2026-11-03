import { useEffect, useRef } from "react";
import { FaCode, FaPenFancy } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionEnseignements() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const enseign = [
        {
            id: 1,
            logo: <FaCode />,
            matiere: 'Développement et intégration web',
            description: 'Conception et réalisation de sites web et d\'applications interactives en maîtrisant les langages de programmation du web et les bonnes pratiques d\'intégration.',
            image: '/images/IUT.jpg'
        },
        {
            id: 2,
            logo: <FaPenFancy />,
            matiere: 'Création graphique et infographie',
            description: 'Apprentissage des fondamentaux du design visuel, de la charte graphique et de la création de supports de communication plurinumérique.',
            image: '/images/IUT.jpg'
        },
        {
            id: 3,
            logo: <MdOutlineVideoLibrary />,
            matiere: 'Production audiovisuelle',
            description: 'Maîtrise de la chaîne de production audiovisuelle, de l\'écriture de scénario au tournage en passant par le montage numérique et les effets visuels.',
            image: '/images/IUT.jpg'
        },
    ];

    useEffect(() => {
        const section = sectionRef.current;
        const cards = cardsRef.current.filter(Boolean);
        if (!section || cards.length === 0) return;

        let ctx;
        const frame = requestAnimationFrame(() => {
            ctx = gsap.context(() => {
                const renderProgress = (progress) => {
                    const { width, height } = section.getBoundingClientRect();
                    const firstMove = gsap.utils.clamp(0, 1, progress / 0.5);
                    const secondMove = gsap.utils.clamp(
                        0,
                        1,
                        (progress - 0.5) / 0.18
                    );
                    const thirdReveal = gsap.utils.clamp(
                        0,
                        1,
                        (progress - 0.72) / 0.18
                    );
                    cards.forEach((card, index) => {
                        const position = index === 0
                            ? {
                                x: 0.8 + (0.22 - 0.8) * firstMove,
                                y: 0.16 + (0.76 - 0.16) * firstMove,
                                autoAlpha: 1,
                            }
                            : index === 1
                                ? {
                                    x: 0.78 + (0.5 - 0.78) * secondMove,
                                    y: 0.22 + (0.5 - 0.22) * secondMove,
                                    autoAlpha: secondMove,
                                }
                                : {
                                    x: 0.78,
                                    y: 0.22,
                                    autoAlpha: thirdReveal,
                                };

                        gsap.set(card, {
                            x: (position.x - 0.5) * width,
                            y: (position.y - 0.5) * height,
                            xPercent: -50,
                            yPercent: -50,
                            autoAlpha: position.autoAlpha,
                        });
                    });
                };

                renderProgress(0);
                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    end: () => `+=${window.innerHeight * (cards.length - 1)}`,
                    pin: true,
                    scrub: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => renderProgress(self.progress),
                    onRefresh: (self) => renderProgress(self.progress),
                });
            }, section);

            ScrollTrigger.refresh();
        });

        return () => {
            cancelAnimationFrame(frame);
            ctx?.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden text-black">
            <header className="absolute left-6 top-10 z-20 flex max-w-xl flex-col gap-3 sm:left-12 sm:top-14 lg:left-16">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Les enseignements
                </h2>
                <p className="hidden text-md font-bold leading-relaxed text-black sm:block sm:text-base">
                    La formation MMI associe créativité et maîtrise des outils numériques.<br></br>
                    Découvrez les grands domaines enseignés.
                </p>
            </header>

            {enseign.map((enseignement, index) => (
                <article
                    key={enseignement.id}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="absolute left-1/2 top-1/2 aspect-square w-[min(38vw,38vh)] max-w-[400px]"
                >
                    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-full border-2 border-black/80">
                        <img
                            src={enseignement.image}
                            alt=""
                            className="h-full w-full object-cover opacity-100"
                        />
                    </div>

                    <div className="absolute inset-[12%] z-10 flex flex-col items-center justify-center p-2 rounded-full border-2 border-white bg-black px-[9%] text-center text-white shadow-2xl">
                        <span className="mb-1 text-2xl sm:mb-3 sm:text-4xl" aria-hidden="true">
                            {enseignement.logo}
                        </span>
                        <h3 className="mb-1 text-xs font-bold leading-tight sm:mb-2 sm:text-lg lg:text-xl">
                            {enseignement.matiere}
                        </h3>
                        <p className="hidden text-[10px] leading-relaxed text-white/90 sm:block sm:text-xs sm:leading-5 lg:text-sm">
                            {enseignement.description}
                        </p>
                    </div>
                </article>
            ))}
        </section>
    );
}