import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageProvider";
import "./navbar.css"

function Navbar() {
    const [navbarshow, setNavbarShow] = useState(false);
    const { setLanguage, lang } = useLanguage();

    const changeLanguages = (e) => {
        setLanguage(e.target.value)
    }

    const handleClose = () => {
    };

    window.addEventListener('unload', handleClose);

    return (
        <>
            <div className="w-100 text-end text-white d-flex justify-content-end header-container">
                <Link className="cursor-pointer text-white text-decoration-none" to="/partnerlogin">{lang.navbar.partnerlogin}</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link className="cursor-pointer text-white text-decoration-none" to="/login">{lang.navbar.login}</Link>
                <select className=" border-0 form-select text-white bg-blue" id="selLanguage" onChange={changeLanguages}>
                    <option className="cursor-pointer bg-blue text-white" value="nl_NL">NL</option>
                    <option className="cursor-pointer bg-blue text-white" value="en_EN">EN</option>
                    <option className="cursor-pointer bg-blue text-white" value="es_ES">SP</option>
                    <option className="cursor-pointer bg-blue text-white" value="fr_FR">FR</option>
                    <option className="cursor-pointer bg-blue text-white" value="de_DE">DU</option>
                </select>
            </div>
            <nav className="navbar navbar-expand-xl bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        <img src="/assets/img/logo.png" />
                    </Link>
                    <img src='/assets/img/navbar-logo.png' className="navbar-logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" onClick={() => setNavbarShow(!navbarshow)} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" style={navbarshow ? { display: "block" } : { display: 'none' }} id="collapsibleNavbar">
                        <div className="me-auto"></div>
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item menu-item">
                                    <Link to="/" aria-current="page" className="nav-link">
                                        {lang.navbar.home}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/o365" target="_blank" className="nav-link">
                                        {lang.navbar.o365}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/aboutapp" className="nav-link">{lang.navbar.aboutapp}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/workflow" className="nav-link">
                                        {lang.navbar.workflow}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/erp" className="nav-link">
                                        {lang.navbar.ERP}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/agenda" className="nav-link">
                                        {lang.navbar.agenda}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/price" className="nav-link">
                                        {lang.navbar.price}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/reviews" className="nav-link">
                                        {lang.navbar.reviews}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/aboutus" className="nav-link">
                                        {lang.navbar.aboutus}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/contact" className="nav-link">
                                        {lang.navbar.contact}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item">
                                    <Link to="/partnerup" className="nav-link">
                                        {lang.navbar.partnerup}
                                    </Link>
                                </li>
                                <li className="nav-item menu-item position-relative">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {lang.navbar.knowCenter.title}
                                    </a>
                                    <ul className="dropdown-menu bg-primary border-0" aria-labelledby="navbarDropdown">
                                        <li>
                                            <Link to='/brochures' className="dropdown-item bg-hover-primary">
                                                {lang.navbar.knowCenter.brochures}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/video' className="dropdown-item bg-hover-primary">
                                                {lang.navbar.knowCenter.videos}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/whitepaper' className="dropdown-item bg-hover-primary">
                                                {lang.navbar.knowCenter.whitepapers}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/webinar' className="dropdown-item bg-hover-primary">
                                                {lang.navbar.knowCenter.webinars}
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item borderNavItem">
                                    <Link className="nav-link ps-3 pe-3" to="/tryfree">
                                        {lang.navbar.tryit}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;