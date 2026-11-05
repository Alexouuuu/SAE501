// maxime derènes

import { gsap } from "gsap";
import { FaArrowUp } from "react-icons/fa";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function GoUpArrow() {
    const scrollToTop = () => {
        const smoother = ScrollSmoother.get();

        if (smoother) {
            smoother.scrollTo(0, true);
        } else {
            const scrollPosition = { y: window.scrollY };

            gsap.to(scrollPosition, {
                y: 0,
                duration: 1,
                ease: "power2.out",
                onUpdate: () => window.scrollTo(0, scrollPosition.y),
            });
        }
    };

    return (
        <div className="fixed bottom-6 md:bottom-20 right-6 z-50 rounded-full border border-black/50 bg-white p-1">
            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Revenir en haut de la page"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2f2a85] cursor-pointer text-white shadow-lg transition hover:bg-[#3c3796] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003b71]"
            >
                <FaArrowUp aria-hidden="true" />
            </button>
        </div>
    );
}