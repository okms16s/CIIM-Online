import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Msdetail() {
    const { lang } = useLanguage();
    return (
        <div className="container cim-container mt-100 mt-md-50 bg-secondary">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <h2 className="text-primary fw-bold">{lang.o365.msdetail.title}</h2>
                </div>
                <div className="col-lg-6 col-md-12">
                    {
                        lang.o365.msdetail.content.map((ele, idx) => {
                            return (
                                <div key={idx}>
                                    <span className="fa fa-arrow-right" style={{ rotate: "45deg", fontSize: "30px" }}></span>
                                    <h4 className="mt-3">{ele}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Msdetail;