import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function LogDoc() {
    const { lang } = useLanguage();
    return (
        <div className='mt-100 mt-md-50 cim-container container bg-secondary'>
            <h4 className='text-primary'>
                <span className="fw-bold">{lang.workflow.logdoc.logtitle}</span>&nbsp;&nbsp;&nbsp;
                {lang.workflow.logdoc.logcontent}
            </h4>
            <h4 className='text-primary pt-5'>
                <span className="fw-bold">{lang.workflow.logdoc.doctitle}</span>&nbsp;&nbsp;&nbsp;
                {lang.workflow.logdoc.doccontent}
            </h4>
        </div>
    )
}

export default LogDoc;