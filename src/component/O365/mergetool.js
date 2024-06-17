import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Mergetool() {
    const { lang } = useLanguage();
    const mergetoolImgs = [
        '/assets/img/ai-tech.png',
        '/assets/img/direct-inbox.png',
        '/assets/img/shopping-cart.png'
    ]
    return (
        <div className="container cim-container mt-100 mt-md-50 bg-primary">
            <div className="row">
                {
                    mergetoolImgs.map((ele, idx) => {
                        return (
                            <div className="col-lg-4 col-md-12 text-center" key={idx}>
                                <img src={ele} alt="cim" className="mt-5" />
                                <h5 className="text-white mt-3">{lang.o365.mergetool.content[idx]}</h5>
                            </div>
                        )
                    })
                }
            </div>
            <h5 className="w-100 text-center text-white mt-5">{lang.o365.mergetool.footer}</h5>
        </div>
    )
}

export default Mergetool;