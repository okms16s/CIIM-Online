import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Cim() {
    const { lang } = useLanguage();
    return (
        <div className="container">
            <div className="cim-container mt-100 mt-md-50 row bg-primary">
                <div className="col-lg-6 col-md-12 mt-5 order-2 order-lg-1 order-md-2 order-sm-2 order-xs-2 text-center">
                    <img className="w-75" src='/assets/img/img3.jpg' alt="cim" />
                </div>
                <div className="col-lg-6 col-md-12 mt-5 order-1 order-lg-2 order-md-1 order-sm-1 order-xs-1">
                    <h3 className="text-white">{lang.partner.network.title}</h3>
                    {
                        lang.partner.network.content.map((ele, idx) => {
                            return (
                                <h5 className="text-white mt-3" key={idx}>{ele}</h5>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cim;