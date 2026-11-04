import pattern from "/images/pattern.webp"

export default function bannerHead(){
    return(
        <section className="w-full">
            <img src={pattern} alt="pattern" className="w-full h-50 object-cover"/>
        </section>
    )
}