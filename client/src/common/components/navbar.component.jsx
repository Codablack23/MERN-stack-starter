import { Link } from "react-router-dom";
import SearchBar from "./searchbar.component";
import ActionHeader from "./action.component";

export default function Navbar(){
    return (
        <nav className="py-[7px] flex items-center max-w-[1170px] mx-auto">
            <p className="text-4xl font-bold leading-[30px] tracking-[4%]">Exclusive</p>
            <div className="flex ml-[129px] items-center gap-12">
                <Link>
                    <button className="text-base leading-6 underline">Home</button>
                </Link>
                <Link>
                    <button className="text-base leading-6">Contact</button>
                </Link>
                <Link>
                    <button className="text-base leading-6">About</button>
                </Link>
                <Link>
                    <button className="text-base leading-6">Signup</button>
                </Link>
            </div>
            <div className="ml-auto flex items-center gap-6">
                <SearchBar/>
                <ActionHeader/>
            </div>
        </nav>
    )
}