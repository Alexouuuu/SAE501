// maxime derènes

import "./bandeau.css"

const message = "JPO 2026 - 17 Rue Jablinot, 77100 Meaux";

function MarqueeContent() {
    return (
        <span className="marquee-copy">
            {Array.from({ length: 4 }, (_, index) => (
                <span key={index} className="marquee-message">
                    {message}
                </span>
            ))}
        </span>
    );
}

export default function BandeauNavbar() {
    return (
        <section
            aria-label="Journée portes ouvertes 2026"
            className="overflow-hidden bg-[#3c3792] py-2 text-white shadow-xl"
        >
            <div className="marquee-track" aria-hidden="true">
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
            </div>
        </section>
    );
}