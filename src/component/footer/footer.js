import React from "react";
import { useLanguage } from "../../context/LanguageProvider";
import './footer.css';

function Footer() {
    const { lang } = useLanguage();
    return (
        <footer className="pt-50 pb-26 bg-primary footer">
            <div className="container ps-5">
                <div className="row w-100">
                    <div className="col-md-7">
                        <img src="/assets/img/logo.png" />
                    </div>
                    <div className="col-md-2 mt-3">
                        <ul className="navbar-nav">
                            <li><a href="http://localhost/cim/" className="nav-link text-white">{lang.footer.home}</a></li>
                            <li className="text-white"><a href="https://cimonline.eu/o365/" className="nav-link text-white">{lang.footer.o365}</a></li>
                            <li className="text-white"><a href="https://cimonline.eu/app/" className="nav-link text-white">{lang.footer.aboutapp}</a></li>
                            <li className="text-white"><a href="https://cimonline.eu/price/" className="nav-link text-white">{lang.footer.price}</a></li>
                            <li className="text-white"><a href="https://cimonline.eu/reviews/" className="nav-link text-white">{lang.footer.reviews}</a></li>
                            <li className="text-white"><a href="https://cimonline.eu/us/" className="nav-link text-white">{lang.footer.aboutus}</a></li>
                            <li className="text-white"><a href="https://cimonline.eu/contact/" className="nav-link text-white">{lang.footer.contact}</a></li>
                            <li className="text-white"><a href="https://cimonline.eu/partnerup/" className="nav-link text-white">{lang.footer.faq}</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-3">
                        <ul className="navbar-nav">
                            <li><a href="https://linkedin" className="nav-link text-white">{lang.footer.linkedin}</a></li>
                            <li><a href="https://facebook" className="nav-link text-white">{lang.footer.facebook}</a></li>
                            <li><a href="https://instagram" className="nav-link text-white">{lang.footer.instagram}</a></li>
                        </ul>
                    </div>
                </div>
                <h5 className="text-white mt-50 mb-0 pb-3"><span className="fa fa-copyright"></span>{lang.footer.copyright}</h5>
            </div>
        </footer>
    )
}

export default Footer;