import img1 from "../../images/actualités/portes_ouvertes.webp";

// les variables elles vont etre importées plus tard la c pour remplir
const contenu = (
    <>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula dui sed massa hendrerit, eu consequat tellus aliquam. Curabitur justo dolor, ornare nec pretium in, dapibus vel elit. Nulla interdum est in egestas commodo. Cras commodo erat vel molestie rhoncus. Sed commodo neque nisi, sed aliquet turpis consequat in. Suspendisse potenti. Sed eu feugiat quam, et facilisis sem. Praesent maximus ullamcorper nunc, non aliquet leo euismod at. In id efficitur sem.
    <br/><br/>
    Pellentesque quis odio ac quam aliquam porttitor id id risus. Donec faucibus euismod lectus, sit amet fermentum est facilisis et. Cras at nulla ultrices, pharetra massa ut, dignissim libero. Fusce ornare sodales mauris quis sagittis. Vivamus tristique ut nibh eget aliquet. Cras vestibulum nibh luctus ex bibendum molestie. Fusce non pretium augue. Phasellus pellentesque ultricies cursus. Aliquam nec velit ultricies, tempus purus a, laoreet leo. Phasellus malesuada tincidunt laoreet. Morbi pulvinar orci arcu.
    <br/><br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a sem a augue fermentum elementum id at urna. Vestibulum magna orci, dictum ac sodales id, rhoncus ut est. Pellentesque tempor quam sit amet mi accumsan dignissim. In pulvinar, eros in tempor auctor, massa lorem bibendum nunc, nec sodales nulla dolor et metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc laoreet dictum maximus. Quisque ullamcorper sollicitudin metus, in lobortis magna pretium nec. Praesent sit amet turpis hendrerit leo tincidunt rutrum. Aenean quis metus dictum, consequat orci nec, feugiat sapien. Pellentesque urna lorem, vehicula ut sagittis vitae, mollis quis dui. Aenean sodales gravida erat eu feugiat. Nunc at felis in mauris accumsan malesuada ac ac lorem.
    <br/><br/>
    Donec eu vulputate ante. Nullam molestie ullamcorper volutpat. Vivamus placerat non mi non sagittis. Nulla laoreet efficitur tortor, ac gravida nisl euismod dapibus. Sed hendrerit nulla ipsum, vel fringilla tortor hendrerit ac. Aliquam rutrum felis vel tellus dictum, sit amet vehicula erat pharetra. Donec eu augue lorem. Morbi finibus dapibus malesuada. Mauris venenatis arcu et ipsum vehicula, in rutrum velit maximus. Nullam iaculis justo odio, vitae iaculis velit tristique sed. Morbi urna risus, vulputate vel odio sed, porttitor molestie orci. Fusce gravida varius ante, ut aliquam nunc dictum at. Vivamus semper nisl augue, nec efficitur nisl blandit vel. Nulla in mi sem. Aenean rhoncus tincidunt arcu, a interdum nisl varius nec. Aliquam sed elit justo.
    <br/><br/>
    Nulla nec lectus massa. Integer euismod facilisis sapien, nec bibendum ligula auctor a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vel leo sed odio elementum varius. Ut ut ullamcorper ligula. Phasellus at ullamcorper diam. Donec in sapien fringilla, tempus libero a, ornare metus. Phasellus eu varius urna, ac venenatis dui. Donec aliquam vulputate nisi, in placerat justo consequat fermentum. 
    </p>
    </>
)
const auteur = "Témi Kergastel"
const titre = "Journée portes ouvertes"
const imgUrl = img1

// ajouter en props : titre, Auteur, imgUrl, contenu
export default function ArticleDetails({idArticle, datePublication }){

    return(
        <section>
            <TitreProps titre="Programme de la JPO" />
            <div>

                <p>Article (placeholder)</p>
                <h1>{titre}</h1>
                <span>par {auteur}, le {datePublication}</span>
                <div>{imgUrl}</div>
                <p>{contenu}</p>
            </div>
        </section>
    )
}