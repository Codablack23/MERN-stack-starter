import { links } from "../../../lib/data/herolinks.data";

export default function HeroSideMenu(){
    return (
        <aside className="w-[233px] pt-10 pr-4 border-r-[0.5px] border-[#7D8184]">
            {
                links.map((link) => (
                    <button className="min-h-6 mb-4 block" key={link.slug}>{link.title}</button>
                ))
            }
        </aside>
    )
}