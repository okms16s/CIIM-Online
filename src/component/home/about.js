import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function About() {
    const { lang } = useLanguage();

    return (
        <div className="container bg-secondary cim-container mt-100 mt-md-50">
            <h2 className="text-primary fw-bold text-center">{lang.home.aboutapp.title}</h2>
            <h4 className="text-gray text-center mt-20 pos-correct">{lang.home.aboutapp.subtitle}</h4>
            <div className="row mt-100 mt-md-50">
                <div className="col-lg-6 col-md-12 col-sm-12 text-end order-2 order-lg-1 order-md-2 order-sm-2 order-xs-2 mt-0 mt-md-50">
                    <img src='/assets/img/laptop1.png' alt="cim" className="w-100" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-start order-1 order-lg-2 order-md-1 order-sm-1 order-xs-1">
                    <div className="ps-3 pe-3">
                        <h3 className="text-primary">{lang.home.aboutapp.body.title}</h3>
                        <h5 className="text-primary">{lang.home.aboutapp.body.content}</h5>
                        <h5 className="text-primary w-fit border-bottom border-primary mt-4">{lang.home.aboutapp.body.footer}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;