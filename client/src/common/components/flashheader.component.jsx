import { Link } from "react-router-dom";
import DropDownIcon from "../../icons/dropdown.icon";

export default function FlashHeader(){
    return(
        <div className="bg-black text-white">
            <div className="max-w-[1170px] h-12 mx-auto flex items-center">
                <div className="mx-auto flex items-center gap-2">
                    <p className="text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <Link>
                        <button className="text-sm font-semibold leading-6">Shop Now</button>
                    </Link>
                </div>
                <div className="flex gap-[5px] items-center">
                    <p className="text-sm leading-[21px]">English</p>
                    <button>
                        <DropDownIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
}