/* eslint-disable react/prop-types */
import FlashHeader from "../components/flashheader.component";
import Navbar from "../components/navbar.component";

export default function MainLayout({children}){
    return (
        <main>
            <FlashHeader/>
            <div className="mt-10 mb-4">
                <Navbar/>
            </div>
            <section>
                {children}
            </section>
        </main>
    )
}