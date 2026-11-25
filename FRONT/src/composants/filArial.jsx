// maxime derènes

import { Link } from "react-router-dom";

export default function Filarial({ titrePage }) {
    return (
        <section className="flex flex-row w-full h-10 items-center justify-start space-x-2 border border-black/20 md:pl-20 pl-2">
            <Link to="/" className="text-xs hover:underline font-bold uppercase tracking-[0.2em] hover:text-black transition-colors cursor-pointer">
                Accueil
            </Link>

            {titrePage && (
                <div className="flex items-center space-x-2 ">
                    <span className="text-xs text-gray-400">/</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#212684] font-medium">
                        {titrePage}
                    </span>
                </div>
            )}
        </section>
    );
}