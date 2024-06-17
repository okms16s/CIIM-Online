import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Approach() {
    const { lang } = useLanguage();
    return (
        <div className='cim-container container mt-100 mt-md-50 bg-liner-primary'>
            <h2 className='text-white text-center fw-bold'>{lang.workflow.approach.title}</h2>
            <div className='row'>
                <div className='col-xl-6 col-lg-12 d-flex justify-content-center align-items-center'>
                    <img src='/assets/img/laptop2.png' alt='cim' className='w-100' />
                </div>
                <div className='col-xl-6 col-lg-12 d-flex justify-content-center align-items-center'>
                    <h5 className='text-white'>{lang.workflow.approach.content}</h5>
                </div>
            </div>
        </div>
    )
}

export default Approach;