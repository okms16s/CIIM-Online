import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Agenda() {
    const { lang } = useLanguage();
    return (
        <div className="w-100 container bg-secondary cim-container mt-100">
            <h2 className="text-primary text-center fw-bold">{lang.agenda.title}</h2>
            <div className="bg-primary row mt-5 border-radius-40 p-5 pb-0">
                <div className="col-lg-8">
                    <h2 className="text-white">{lang.agenda.subtitle}</h2>
                    <h4 className="text-white mt-3">{lang.agenda.content}</h4>
                    <h4 className="text-white border border-1 border-secondary w-fit p-3 border-radius-40 mt-3">10.Oct 2023. 10PM</h4>
                </div>
                <div className="col-lg-4 d-flex text-center d-flex">
                    <div className="d-flex justify-content-between flex-column w-100">
                        <div></div>
                        <img src='/assets/img/model-2.png' alt="cim" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agenda;