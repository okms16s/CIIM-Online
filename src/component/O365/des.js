import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Des() {
    const { lang } = useLanguage();
    return (
        <div className="container cim-container mt-100 mt-md-50">
            <h2 className="text-primary fw-bold text-span-secondary">
                {
                    lang.o365.des.content.map((ele, idx) => {
                        return(
                            <font key={idx}>
                                {
                                    ele.flg ? <span>{ele.text}</span> : ele.text
                                }
                            </font>
                        )
                    })
                }
            </h2>
        </div>
    )
}

export default Des;