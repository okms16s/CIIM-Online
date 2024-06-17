import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function BePartner() {
    const { lang } = useLanguage();
    return (
        <div className="cim-container text-center">
            <h2 className="text-primary text-span-secondary">
                {
                    lang.home.reviews.partner.title.map((ele, idx) => {
                        return (
                            <font key={idx}>
                                {
                                    ele.flg ? <span>{ele.text}</span> : ele.text
                                }
                            </font>
                        )
                    })
                }
            </h2>
            <h4 className="mt-20 text-primary">{lang.home.reviews.partner.content}</h4>
            <button className="w-50 w-md-100 btn btn-primary mt-50 mt-md-20">{lang.home.reviews.partner.button}</button>
        </div>
    )
}

export default BePartner;