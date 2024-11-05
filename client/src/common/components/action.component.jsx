import { Link } from "react-router-dom";
import WishlistIcon from "../../icons/wishlist.icon";
import CartIcon from "../../icons/cart.icon";

export default function ActionHeader(){
    return (
        <div className="flex items-center gap-4">
            <Link>
                <button><WishlistIcon/></button>
            </Link>
            <Link>
                <button><CartIcon/></button>
            </Link>
        </div>
    )
}