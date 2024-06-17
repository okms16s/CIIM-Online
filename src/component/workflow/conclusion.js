import React from "react";
import {useLanguage} from "../../context/LanguageProvider";

function Conclusion() {
    const {lang} = useLanguage();
    return (
        <div className='mt-100 mt-md-50 cim-container container bg-primary'>
            <h2 className='text-white text-center fw-bold'>{lang.workflow.conclusion.title}</h2>
            <h5 className='text-white mt-5'>
                <i className='fa fa-warning text-header'></i>&nbsp;&nbsp;&nbsp;
                {lang.workflow.conclusion.content}
            </h5>
        </div>
    )
}

export default Conclusion;