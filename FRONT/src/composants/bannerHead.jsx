// maxime derènes

import pattern from "../images/pattern2.webp"

export default function BannerHead({ banner = pattern } = {}) {
    return(
        <section className="w-full">
            <img src={banner} alt="" className="w-full h-50 object-cover"/>
        </section>
    )
}