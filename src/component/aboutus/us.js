import React from "react";
import {useLanguage} from "../../context/LanguageProvider";

function Us() {
    const {lang} = useLanguage();
    return (
        <div className="container">
            <div className="cim-container mt-100 bg-secondary">
                <h2 className="text-primary text-center fw-bold">{lang.aboutus.main.title}</h2>
                <h4 className="text-gray mt-3 text-center">{lang.aboutus.main.subtitle}</h4>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mt-5 text-center order-2 order-lg-1 order-md-2 order-sm-2 order-xs-2">
                        <img src='/assets/img/aboutus.jpg' alt="cim" className="w-75" />
                    </div>
                    <div className="col-lg-6 col-md-12 mt-5 order-1 order-lg-2 order-md-1 order-sm-1 order-xs-1">
                        <h5 className="text-primary fw-bold">{lang.aboutus.main.content.title[0]}</h5>
                        <h5 className="text-primary">{lang.aboutus.main.content.content[0]}</h5>
                        <h5 className="text-primary fw-bold">{lang.aboutus.main.content.title[1]}</h5>
                        <h5 className="text-primary">{lang.aboutus.main.content.content[1]}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Us;