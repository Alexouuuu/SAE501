import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";

// Aide IA
// Pour ajouter une vue 360° : copier un bloc et reprendre les valeurs de l'URL Google Maps
// .../@latitude,longitude,3a,75y,<cap>h,<inclinaison>t/data=...!1s<idPhoto>!2e10...
// Attention : tangage = inclinaison - 90
const PANORAMAS = [
    {
        id: "zyUBgD1I9haUe2K0Oj9urg",
        streetView: true,
        nom: "L’extérieur",
        latitude: 48.9551557,
        longitude: 2.87794,
        cap: 180.2,
        tangage: 0,
        lien: "https://maps.app.goo.gl/iTSvtWZy8F8dRiJu8",
    },
    {
        id: "CIHM0ogKEICAgICxzMvL9AE",
        nom: "L’entrée",
        latitude: 48.9548415,
        longitude: 2.8779401,
        cap: 300,
        tangage: 10,
        lien: "https://maps.app.goo.gl/u4eq5DBkhRMcUG2G8",
    },
    {
        id: "CIHM0ogKEICAgICxzMvz9QE",
        nom: "L’accueil",
        latitude: 48.9548415,
        longitude: 2.8779401,
        cap: 200,
        tangage: 10,
        lien: "https://maps.app.goo.gl/qXe4vTsjXQwi9wbC9",
    },
    {
        id: "CIHM0ogKEICAgICxzIuHKw",
        nom: "Amphithéatre Luxembourg",
        latitude: 48.9548415,
        longitude: 2.8779401,
        cap: 100,
        tangage: 0,
        lien: "https://maps.app.goo.gl/bQULcwc4PA4yywRV8",
    },
    {
        id: "CIHM0ogKEICAgICxzNuh9wE",
        nom: "Espace de travail MMI",
        latitude: 48.9548415,
        longitude: 2.8779401,
        cap: 120,
        tangage: 0,
        lien: "https://maps.app.goo.gl/yKQWFGD8TnFw7o368",
    },
    {
        id: "CIHM0ogKEICAgICxzIvBeA",
        nom: "Studio",
        latitude: 48.9548415,
        longitude: 2.8779401,
        cap: 0,
        tangage: 0,
        lien: "https://maps.app.goo.gl/RVfyHoabJg3YPuhf9",
    },
    {
        id: "CIHM0ogKEICAgIDRm8TqCg",
        nom: "Fond vert",
        latitude: 48.9548415,
        longitude: 2.8779401,
        cap: 180,
        tangage: 10,
        lien: "https://maps.app.goo.gl/4a347Ufr6btU7gK1A",
    },
    {
        id: "CIHM0ogKEICAgICxzKuwmgE",
        nom: "Salle gaming 1",
        latitude: 48.9548415,
        longitude: 2.8779401,
        cap: 150.64,
        tangage: -14.08,
        lien: "https://maps.app.goo.gl/LGaGQFNMDcKoTTzA9",
    },
    {
        id: "CIHM0ogKEICAgICxzMuORA",
        nom: "Salle gaming 2",
        latitude: 48.9548415,
        longitude: 2.8779401,
        cap: 240,
        tangage: 0,
        lien: "https://maps.app.goo.gl/ui8y62hysWxNf2VY7",
    },

];

const MODES = [
    { cle: "360", nom: "Visite 360°" },
    { cle: "3d", nom: "Visite 3D" },
];

// Une photo déposée par un utilisateur ne s'affiche que si son identifiant est encodé.
// Les vues prises par Google (streetView: true) gardent leur identifiant tel quel.
function identifiantIntegration({ id, streetView }) {
    if (streetView) return id;
    return btoa(`\x08\x0a\x12${String.fromCharCode(id.length)}${id}`).replace(/=/g, ".");
}

function urlIntegration(panorama) {
    const { latitude, longitude, cap, tangage } = panorama;
    return `https://www.google.com/maps/embed?pb=!4v1!6m8!1m7!1s${identifiantIntegration(panorama)}!2m2!1d${latitude}!2d${longitude}!3f${cap}!4f${tangage}!5f0.7820865974627469`;
}

const boutonClasses = (actif) =>
    `min-h-11 cursor-pointer rounded-md border px-5 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c3792] ${actif
        ? "border-[#212684] bg-[#212684] text-white"
        : "border-[#212684]/30 bg-white text-[#212684] hover:border-[#212684]"
    }`;

function Visite360() {
    const [indexActif, setIndexActif] = useState(0);
    const panorama = PANORAMAS[indexActif];

    return (
        <div>

            {/* Le choix de la vue n'apparaît que s'il y en a plusieurs */}
            {PANORAMAS.length > 1 && (
                <div role="group" aria-label="Choisir un lieu" className="mb-4 flex flex-wrap gap-x-2 gap-y-1">
                    {PANORAMAS.map((vue, index) => (
                        <button
                            key={vue.id}
                            type="button"
                            aria-pressed={index === indexActif}
                            onClick={() => setIndexActif(index)}
                            className={`min-h-11 cursor-pointer border-b-4 px-3 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c3792] ${index === indexActif
                                ? "border-[#212684] text-[#212684]"
                                : "border-transparent text-gray-600 hover:text-[#212684]"
                                }`}
                        >
                            {vue.nom}
                        </button>
                    ))}
                </div>
            )}

            <p className="my-4 flex items-start gap-2 rounded-md bg-[#212684]/5 px-4 py-3 text-sm text-gray-600">
                <FaInfoCircle aria-hidden="true" className="mt-0.5 shrink-0 text-[#212684]" />
                Les vues 360° proviennent de Google Maps : certaines photos datent un peu et les lieux ont pu évoluer depuis.
            </p>

            <iframe
                key={panorama.id}
                src={urlIntegration(panorama)}
                title={`Vue à 360° : ${panorama.nom}`}
                className="block h-[70vh] min-h-80 w-full rounded-md border-0 bg-gray-100"
                loading="lazy"
                allow="accelerometer; gyroscope; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
            />

            <div className="mt-3 flex flex-wrap justify-between gap-2 text-sm text-gray-600">
                <p>Faites glisser l’image pour regarder autour de vous.</p>
                <a
                    href={panorama.lien}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#212684] underline underline-offset-4"
                >
                    Ouvrir dans Google Maps (nouvel onglet)
                </a>
            </div>
        </div>
    );
}

// Emplacement de la future visite 3D
function Visite3D() {
    return (
        <div className="flex h-[70vh] min-h-80 w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-[#212684]/30 px-5 text-center">
            <p className="text-xl font-bold text-[#212684]">La visite 3D arrive bientôt</p>
            <p className="mt-2 text-gray-600">En attendant, explorez l’IUT avec la visite 360°.</p>
        </div>
    );
}

export default function VisiteVirtuelle() {
    const [mode, setMode] = useState("360");

    return (
        <section>
            <TitreProps titre={"Visite Virtuelle"}></TitreProps>
            <BannerHead />
            <Filarial titrePage={"Visite Virtuelle"} />

            <header className="bg-[#212684] text-white">
                <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Visite virtuelle</h1>
                    <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                        Découvrez l’IUT de Meaux depuis chez vous, avant de venir sur place.
                    </p>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
                <div role="group" aria-label="Type de visite" className="mb-6 flex flex-wrap gap-2">
                    {MODES.map(({ cle, nom }) => (
                        <button
                            key={cle}
                            type="button"
                            aria-pressed={mode === cle}
                            onClick={() => setMode(cle)}
                            className={boutonClasses(mode === cle)}
                        >
                            {nom}
                        </button>
                    ))}
                </div>

                {mode === "360" ? <Visite360 /> : <Visite3D />}
            </div>
        </section>
    );
}
