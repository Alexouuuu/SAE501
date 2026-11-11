// maxime derènes

import { Link } from "react-router-dom";

export default function Filarial({ titrePage }) {
    return (
        <section className="flex flex-row w-full bg1 h-10 items-center justify-start space-x-2 border border-black/20 md:pl-20 pl-2">
            <Link to="/" className="text-[10px] hover:underline font-bold uppercase tracking-[0.2em] hover:text-black transition-colors cursor-pointer">
                Accueil
            </Link>

            {titrePage && (
                <div className="flex items-center space-x-2 ">
                    <span className="text-[10px] text-gray-400">/</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text1c font-medium">
                        {titrePage}
                    </span>
                </div>
            )}
        </section>
    );
}