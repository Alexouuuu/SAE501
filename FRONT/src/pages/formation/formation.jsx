import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import HeroFormation from "./FormationsComps/HeroFormation";
import DomainesFormation from "./FormationsComps/DomainesFormation";
import VideoFormation from "./FormationsComps/VideoFormation";
import AnneesFormation from "./FormationsComps/AnneesFormation";
import OrientationFormation from "./FormationsComps/OrientationFormation";
import LiensFormation from "./FormationsComps/LiensFormation";

export default function Formation() {
    return (
        <main className="text-gray-900">
            <TitreProps titre="BUT MMI - La formation" />
            <HeroFormation />
            <Filarial titrePage="La formation" />
            <DomainesFormation />
            <VideoFormation />
            <AnneesFormation />
            <OrientationFormation />
            <LiensFormation />
        </main>
    );
}
