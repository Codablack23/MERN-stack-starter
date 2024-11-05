import SearchIcon from "../../icons/search.icon";

export default function SearchBar(){
    return (
        <form action="" className="bg-[#F5F5F5]  rounded-[4px] flex items-center py-[7px] gap-[34px] pl-5 pr-3 flex-1">
            <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-0"
            />
            <button>
                <SearchIcon/>
            </button>
        </form>
    )
}