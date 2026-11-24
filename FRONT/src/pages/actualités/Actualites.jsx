import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";

export default function Actualites() {
    return (
        <section>
            <TitreProps titre={"Actualités"}></TitreProps>
            <BannerHead />
            <Filarial titrePage={"Actualités"} /> {/*id event*/}
            <div>
                <p>Actualités</p>
            </div>
        </section>
    )
}