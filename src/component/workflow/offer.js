import React from "react";
import {useLanguage} from "../../context/LanguageProvider";

function Offer() {
    const {lang} = useLanguage();
    return (
        <div className='mt-100 mt-md-50 cim-container container bg-primary'>
            <h2 className='text-white text-center fw-bold'>{lang.workflow.offer.title}</h2>
            <h5 className='text-white fs-18 fontW-400 lh-30 pt-5 offer-text'>{lang.workflow.offer.content}</h5>
        </div>
    )
}

export default Offer;