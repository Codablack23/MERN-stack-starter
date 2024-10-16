import HomePage from "../features/home/home.page";
import ShopPage from "../features/shop/shop.page";

export const appRoutes = [
    {
        path: "",
        id:"routes.home",
        index:true,
        element:<HomePage/>,
        loader:async({params})=>{console.log(params)},
        action:async({request})=>{
            console.log(request);
        },
        errorElement:<p>Error</p>
    },
    {
        path: "/shop",
        name:"routes.shop",
        index:true,
        element:<ShopPage/>,
        loader:async({params})=>{console.log(params)},
        action:async({request})=>{
            console.log(request);
        },
        errorElement:<p>Error</p>
    },
]