import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Tryit() {
    const { lang } = useLanguage();
    return (
        <div className="container">
            <div className="row cim-container bg-liner-primary pb-0 mt-100 mt-md-50">
                <div className="col-lg-6 col-md-12 col-sm-12 text-start mt-3 ps-0 pe-0">
                    <h2 className="text-white fw-bold">{lang.home.reviews.tryfree.title}</h2>
                    <h5 className="text-white">{lang.home.reviews.tryfree.content}</h5>
                    <button className="btn btn-secondary pt-3 pb-3 ps-5 pe-5 mt-3 w-min-0">{lang.home.reviews.tryfree.button}</button>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-3">
                    <img src='/assets/img/model.png' alt="cim" className="w-50" />
                </div>
            </div>
        </div>
    )
}

export default Tryit;