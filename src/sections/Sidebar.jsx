import React, { useState, useEffect } from "react";

function Sidebar() {
    const [isHeaderShow, setIsHeaderShow] = useState(false);

    const headerToggle = () => {
        setIsHeaderShow(!isHeaderShow);
    };

    const closeNav = () => {
        if (isHeaderShow) {
            setIsHeaderShow(false);
        }
    };

    // Handle dropdown toggles
    const handleDropdownToggle = (e) => {
        e.preventDefault();
        const parentNode = e.currentTarget.parentNode;
        const nextSibling = parentNode.nextElementSibling;
        
        parentNode.classList.toggle('active');
        if (nextSibling) {
            nextSibling.classList.toggle('dropdown-active');
        }
        e.stopPropagation();
    };

    return (
        <header 
            id="header" 
            className={`header dark-background d-flex flex-column justify-content-start ${isHeaderShow ? 'header-show' : ''}`}
        >
            <i 
                className={`header-toggle d-xl-none bi ${isHeaderShow ? 'bi-x' : 'bi-list'}`}
                onClick={headerToggle}
                style={{ cursor: 'pointer' }}
            ></i>

            <div className="header-container d-flex flex-column align-items-start">
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <a href="#hero" className="active" onClick={closeNav}>
                                <i className="bi bi-house navicon"></i>Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={closeNav}>
                                <i className="bi bi-person navicon"></i> About
                            </a>
                        </li>
                        <li>
                            <a href="#resume" onClick={closeNav}>
                                <i className="bi bi-file-earmark-text navicon"></i> Resume
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={closeNav}>
                                <i className="bi bi-app navicon"></i> Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={closeNav}>
                                <i className="bi bi-envelope navicon"></i> Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Sidebar;