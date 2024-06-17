import React from "react";
import {useLanguage} from "../../context/LanguageProvider";

function Card() {
    const {lang} = useLanguage();
    return (
        <div className="container cim-container bg-secondary mt-100 mt-md-50">
            <h3 className="text-primary">{lang.aboutus.des.content}</h3>
        </div>
    )
}
export default Card;