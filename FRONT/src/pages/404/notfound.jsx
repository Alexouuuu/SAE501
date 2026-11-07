// sebastian chisiu

import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="h-screen w-full flex flex-col md:flex-row items-center justify-center pb-2">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center md:items-start text-center md:text-left mx-auto justify-center">
                    <h1 className="text-8xl sm:text-9xl text-[#252B90] font-bold tracking-tight">404</h1>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2 mb-3"><span className="text-[#D2213C]">OOPS !</span> Vous semblez perdu</h2>
                    <p className="text-gray-500 text-sm sm:text-base mb-8 leading-relaxed">Désolé, nous ne parvenons pas à trouver la page que vous recherchez.<br />L'adresse a peut-être changé ou elle n'existe plus.</p>
                    <Link to="/" className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#252B90] hover:bg-[#212684] text-white text-sm font-semibold cursor-pointer duration-200 transition">Retourner à L'accueil</Link>
                </div>
                <div className="w-full h-full flex items-center justify-center"><img src="/images/IUT.webp" alt="Photo de l'IUT" className="w-full h-full object-cover" /></div>
            </div>
        </section>
    );
}

export default NotFound;