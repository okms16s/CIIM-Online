import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Techdes() {
    const { lang } = useLanguage();
    return (
        <div className="container cim-container mt-100 mt-md-50 bg-liner-primary pb-0">
            <div className="row">
                <div className="col-lg-7 col-md-12 d-flex align-items-center">
                    <div className="pb-100">
                        <h2 className="text-white fw-bold">{lang.o365.technical.title}</h2>
                        <h5 className="text-white">{lang.o365.technical.subtitle}</h5>
                        <ul>
                            {
                                lang.o365.technical.content.map((ele, idx) => {
                                    return (
                                        <li className="text-white" key={idx}>
                                            <h5>{ele}</h5>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 text-center d-flex">
                    <div className="d-flex justify-content-between flex-column w-100">
                        <div></div>
                        <img src='/assets/img/notebook.png' alt="cim" className="w-75 mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techdes;