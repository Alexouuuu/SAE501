import { useRef, useState } from "react";
import { Link } from 'react-router-dom';

import gsap from "gsap";

const faqItems = [
    {
        question: "Peut on visiter l'université sans inscription préalable ?",
        answer: "Non, une inscription préalable est requise pour visiter l'université. Vous pouvez vous inscrire en vous rendant sur la page d'inscription à la journée portes ouvertes :",
        urltitle: "Inscription à la journée porte ouverte",
        url: "/jpo"
    },
    {
        question: "La journée porte ouverte est elle gratuite ?",
        answer: "Oui, l'entrée est gratuite pour tous les visiteurs.",
        url: null
    },
    {
        question: "Est-ce que l'université a des parkings pour les visiteurs ?",
        answer: "Non, il n'y a pas de parking pour les visiteurs. Il est recommandé d'utiliser les transports en commun ou de se garer dans les parkings publics à proximité.",
        url: null
    },
    {
        question: "Que faire si j'ai un problème / plus de questions ?",
        answer: "Vous pouvez nous contacter via le formulaire de contact disponible sur notre site web.",
        urltitle: "Formulaire de contact",
        url: "/contact"
    },
];

export default function FAQ({ items = faqItems }) {
    const [openId, setOpenId] = useState(null);
    const panelsRef = useRef([]);

    const toggleItem = (id) => {
        // Réduit le panneau et le masque une fois l'animation terminée.
        const closePanel = (panel) => {
            if (!panel) return;

            gsap.killTweensOf(panel);
            gsap.to(panel, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
                onComplete: () => {
                    panel.hidden = true;
                    gsap.set(panel, { clearProps: "height,opacity" });
                },
            });
        };

        // Referme le panneau actif si la question sélectionnée est déjà ouverte.
        if (openId === id) {
            closePanel(panelsRef.current[id]);
            setOpenId(null);
            return;
        }

        // Un seul panneau reste ouvert à la fois.
        if (openId !== null) {
            closePanel(panelsRef.current[openId]);
        }

        // Déplie le nouveau panneau après l'avoir rendu visible.
        const panel = panelsRef.current[id];
        if (panel) {
            gsap.killTweensOf(panel);
            if (panel.hidden) {
                gsap.set(panel, { height: 0, opacity: 0 });
                panel.hidden = false;
            }
            gsap.to(panel, {
                height: "auto",
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => gsap.set(panel, { clearProps: "height,opacity" }),
            });
        }

        setOpenId(id);
    };

    return (
        <section
            aria-labelledby="faq-title"
            className="mx-auto mt-16 grid min-h-152 w-full max-w-7xl content-start grid-cols-1 gap-8 px-4 sm:px-6 md:min-h-120 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16"
        >
            <div>
                <h2
                    id="faq-title"
                    className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                    DES QUESTIONS ?
                </h2>
                <div
                    aria-hidden="true"
                    className="mt-3 h-1 w-16 rounded-full bg-[#2f2a85]"
                />
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600">
                    Retrouvez ici les réponses aux questions les plus fréquentes.
                </p>
            </div>

            <div className="space-y-3">
                {items.map((item, id) => {
                    const isOpen = openId === id;
                    const questionId = `faq-question-${id}`;
                    const answerId = `faq-answer-${id}`;

                    return (
                        <article
                            key={questionId}
                            className="overflow-hidden rounded-xl border border-gray-200 bg-white p-1"
                        >
                            <h3>
                                <button
                                    id={questionId}
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={answerId}
                                    className={`flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-base font-semibold text-gray-900 sm:text-lg ${isOpen ? "rounded-t-lg" : "rounded-lg"
                                        }`}
                                    onClick={() => toggleItem(id)}
                                >
                                    <span>{item.question}</span>
                                    <span aria-hidden="true" className="shrink-0 text-2xl font-normal">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>
                            </h3>
                            <div
                                id={answerId}
                                role="region"
                                aria-labelledby={questionId}
                                ref={(element) => {
                                    panelsRef.current[id] = element;
                                }}
                                hidden
                                className="overflow-hidden rounded-b-lg border-t border-gray-200"
                            >
                                <p className="px-4 py-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                                    {item.answer}
                                </p>
                                {item.url && (
                                    <Link
                                        to={item.url}
                                        className="block px-4 py-3 text-sm font-medium text-[#2f2a85] hover:underline sm:text-base"
                                    >
                                        {item.urltitle || "En savoir plus"}
                                    </Link>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
