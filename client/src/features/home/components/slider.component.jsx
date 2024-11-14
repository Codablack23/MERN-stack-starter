import ArrowRightIcon from "../../../icons/arrow-right.icon";

export default function HeroSlider(){
    return (
        <div className="bg-black h-[344px] px-16 relative flex items-center">
            <div className="flex-1 max-w-[294px]">
                <p className="text-white text-5xl font-semibold leading-[60px]">Up to 10% off Voucher</p>
                <button className="mt-[22px] text-white flex gap-x-2">
                    <span>Shop Now</span>
                    <span><ArrowRightIcon/></span>
                </button>
            </div>
            <div className="absolute bottom-[11px] justify-center w-full flex gap-x-4">
                <button className="h-3 w-3 rounded-full bg-[#7D8184]"></button>
                <button className="h-3 w-3 rounded-full bg-[#7D8184]"></button>
                <button className="h-3 w-3 rounded-full bg-[#7D8184]"></button>
                <button className="h-3 w-3 rounded-full bg-[#7D8184]"></button>
                <button className="h-3 w-3 rounded-full bg-[#7D8184]"></button>
                <button className="h-3 w-3 rounded-full bg-[#7D8184]"></button>
            </div>
        </div>
    )
}