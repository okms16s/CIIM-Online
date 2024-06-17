import React from "react";
import {useLanguage} from "../../context/LanguageProvider";

function Security() {
    const {lang} = useLanguage();
    return (
        <div className='mt-100 mt-md-50 cim-container container bg-secondary'>
            <h2 className='text-primary text-center fw-bold'>{lang.workflow.security.title}</h2>
            <div className='row'>
                <div className='col-lg-6 col-md-12 d-flex justify-content-center align-items-center order-2 order-lg-1 order-md-2 order-sm-2 order-xs-2 mt-5'>
                    <img src='/assets/img/img2.png' alt='cim' className='w-75' />
                </div>
                <div className='col-lg-6 col-md-12 d-flex justify-content-center align-items-center order-1 order-lg-2 order-md-1 order-sm-1 order-xs-1 mt-5'>
                    <h5 className='text-primary security-text'>{lang.workflow.security.content}</h5>
                </div>
            </div>
        </div>
    )
}

export default Security;