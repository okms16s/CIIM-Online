import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Testerminal() {
    const { lang } = useLanguage();
    return (
        <div className="container">
            <div className="container bg-primary cim-container mt-100">
                <h2>
                    <span className="fa fa-arrow-right text-blue" style={{rotate: '45deg'}}></span>
                </h2>
                <h3 className="text-white mt-3">{lang.aboutapp.tester.content}</h3>
            </div>
        </div>
    )
}

export default Testerminal;