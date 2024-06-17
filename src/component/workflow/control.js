import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Control() {
    const { lang } = useLanguage();
    return (
        <div className='mt-100 mt-md-50 cim-container container bg-primary'>
            <h2 className='mb-50 text-white text-center fw-bold'>{lang.workflow.control.title}</h2>
            <h5 className='text-white'>{lang.workflow.control.content}</h5>
            <div className='row mt-50'>
                <div className='col-md-4 col-sm-12 text-center mt-5'>
                    <h2><i className='fa fa-users text-white'></i></h2>
                    <h4 className='text-white pt-3'>{lang.workflow.control.tags[0]}</h4>
                </div>
                <div className='col-md-4 col-sm-12 text-center mt-5'>
                    <h2><i className='fa fa-file-text text-white'></i></h2>
                    <h4 className='text-white pt-3'>{lang.workflow.control.tags[1]}</h4>
                </div>
                <div className='col-md-4 col-sm-12 text-center mt-5'>
                    <h2><i className='fa fa-lock text-white'></i></h2>
                    <h4 className='text-white pt-3'>{lang.workflow.control.tags[2]}</h4>
                </div>
            </div>
        </div>
    )
}

export default Control;