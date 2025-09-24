import React  from "react";
import Sidebar from "./sections/Sidebar";
import PortfolioDetails from "./PortfolioDetails";
import ScrollTop from './ScrollTop';
import Preloader from "./Preloader";

function PortfolioPage() {
    return (
        <>
            <Preloader/>

            <Sidebar/>

            <main className="main">
                <PortfolioDetails/>
            </main>

            <ScrollTop/>
        </>
        
    )
}

export default PortfolioPage;