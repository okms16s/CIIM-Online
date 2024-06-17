import React from "react";
import { useLanguage } from '../../context/LanguageProvider';

function Privacy () {
    const {lang} = useLanguage();
    return(
        <div className="container">
            <div className="cim-container w-100">
                <h2 className="text-primary fw-bold">{lang.privacy.title}</h2>
                <div className="mt-5 text-primary">
                    {
                        lang.privacy.content.map((ele, idx) => {
                            return(
                                <h5 className="mb-0 mt-3" key={idx}>{ele}</h5>
                            )
                        })
                    }

                    <ul className="pt-5 pb-3 text-primary">
                        <li className="pt-1 pb-1 border-bottom cursor-pointer">Internet Explorer</li>
                        <li className="pt-1 pb-1 border-bottom cursor-pointer">Google Chrome</li>
                        <li className="pt-1 pb-1 border-bottom cursor-pointer">Firefox</li>
                        <li className="pt-1 pb-1 border-bottom cursor-pointer">Safari</li>
                    </ul>

                    <h5>{lang.privacy.footer}</h5>

                </div>
            </div>
        </div>
    )
}

export default Privacy;