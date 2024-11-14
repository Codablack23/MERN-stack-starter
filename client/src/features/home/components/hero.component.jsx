import HeroSideMenu from "./sidemenu.component";
import HeroSlider from "./slider.component";

export default function HeroSection(){
    return (
        <section className="border-t-[0.5px] border-[#7D8184]">
            <div className="max-w-[1170px] flex mx-auto">
                <HeroSideMenu/>
                <div className="flex-1 pt-10 pl-[45px]">
                    <HeroSlider/>
                </div>
            </div>
        </section>
    )
}