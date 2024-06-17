import React from "react";
import {useLanguage} from "../../context/LanguageProvider";

function AboutApp() {
    const { lang } = useLanguage();
    return (
        <div className="bg-secondary text-center">
            <div className="container cim-container">
                <h2 className="text-primary fw-bold">{lang.aboutapp.main.title}</h2>
                <h4 className="text-gray mt-3">{lang.aboutapp.main.subtitle}</h4>
                <img src='/assets/img/laptop1.png' alt="cim" className="w-50 w-md-100 mt-4" />
                <h6 className="mt-3">{lang.aboutapp.main.footer}</h6>
            </div>
        </div>
    )
}

export default AboutApp;