import React from "react";
import {useLanguage} from "../../context/LanguageProvider";

function Ms() {
    const {lang} = useLanguage();
    return (
        <div className="container cim-container mt-100 mt-md-50 bg-primary">
            <div className="row">
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mt-4 order-2 order-lg-1 order-md-2 order-sm-2 order-xs-2 ">
                    <img src='/assets/img/ms.png' alt="cim" className="w-75"/>
                </div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center mt-4 order-1 order-lg-2 order-md-1 order-sm-1 order-xs-1">
                    <div>
                        <h2 className="text-white fw-bold">{lang.o365.ms.title}</h2>
                        <h3 className="text-white">{lang.o365.ms.subtitle}</h3>
                        <h4 className="text-white">{lang.o365.ms.content}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ms;