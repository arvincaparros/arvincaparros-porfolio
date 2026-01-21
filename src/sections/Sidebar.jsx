import React from "react";


function Sidebar() {
    return (
       <header id="header" className="header dark-background d-flex flex-column justify-content-start">
            <i className="header-toggle d-xl-none bi bi-list"></i>

            <div className="header-container d-flex flex-column align-items-start">
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
                        <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
                        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
                        <li><a href="#projects"><i className="bi bi-images navicon"></i> Projects</a></li>
                        <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Sidebar;