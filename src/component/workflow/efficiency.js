import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Efficiency() {
    const { lang } = useLanguage();
    return (
        <div className='container cim-container mt-100 mt-md-50 bg-secondary'>
            <h2 className='text-primary text-center fw-bold'>{lang.workflow.main.title}</h2>
            <h5 className='text-gray text-center mt-3'>{lang.workflow.main.subtitle}</h5>
            <div className='w-100 text-center'>
                <img src='/assets/img/laptop2.png' alt='cim' className='w-75' />
            </div>
            <h6 className='text-primary text-center'>{lang.workflow.main.content}</h6>
        </div>
    )
}

export default Efficiency;