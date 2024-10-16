import { Route, Routes,} from "react-router-dom";
import { appRoutes } from "../lib/routes";

export default function AppRouter(){
    return (
        <Routes>
            {appRoutes.map(route => (
                <Route key={route.name} {...route}/>
            ))}
        </Routes>
    )
}