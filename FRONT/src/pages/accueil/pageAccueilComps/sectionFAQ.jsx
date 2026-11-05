import { useRef, useState } from "react";
import gsap from "gsap";

const faqItems = [
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        question: "Quis autem vel eum iure reprehenderit qui in ea voluptate ?",
        answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
    {
        question: "Duis aute irure dolor in reprehenderit in voluptate velit ?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
];

export default function SectionFAQ({ items = faqItems }) {
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
            className="mx-auto my-16 grid min-h-152 w-full max-w-7xl content-start grid-cols-1 gap-8 px-4 sm:px-6 md:min-h-120 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16"
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
                                    className={`flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-base font-semibold text-gray-900 sm:text-lg ${
                                        isOpen ? "rounded-t-lg" : "rounded-lg"
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
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
