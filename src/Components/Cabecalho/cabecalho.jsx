import React, { useState, useEffect } from 'react';

export const Cabecalho = () => {
    var logo=require('./img/logo-01.png');

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) {
            backdrop.classList.remove('show');
        }
        setIsMenuOpen(false);
    };    

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className={`navbar navbar-expand-lg border-bottom fixed-top ${isScrolled ? 'active' : ''}`} aria-label="Offcanvas navbar large" style={{backgroundColor: '#f8f9fa'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo Pedro Mota"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`offcanvas offcanvas-end ${isMenuOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <img src={logo} alt="Logo Pedro Mota"/>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={closeMenu}></button>
                        </div>
                        <hr className="featurette-divider" />
                        <div className='offcanvas-body'>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link text-decoration-none text-dark" aria-current="page" href="/" onClick={closeMenu}><i className="fas fa-home nav-icon"></i> Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-decoration-none text-dark" href="#about" onClick={closeMenu}><i className="fas fa-user-circle nav-icon"></i> About me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-decoration-none text-dark" href="#contato" onClick={closeMenu}><i className="fas fa-phone-square-alt nav-icon"></i> Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <a href="#top" className={`back-top-btn ${isScrolled ? 'active' : ''}`} aria-label="back to top" data-back-top-btn onClick={scrollToTop}>
                <i className="fas fa-chevron-up"></i>
            </a>
        </div>
    )
}