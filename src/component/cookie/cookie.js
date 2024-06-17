import React from "react";
import { useLanguage } from '../../context/LanguageProvider';

function Cook() {
    const { lang } = useLanguage();
    return (
        <div className="container cim-container">
            <h2 className="text-primary fw-bold">{lang.cookie.title}</h2>
            <h5 className="text-primary">{lang.cookie.content}</h5>
            <button className="btn btn-default w-100">Agree!</button>
            {
                lang.cookie.setting.map((ele, idx) => {
                    return (
                        <div className="d-flex border-bottom pt-2" key={idx}>
                            <div className="me-3 mt-2">
                                <input type="checkbox" className="cursor-pointer" />
                            </div>
                            <div>
                                <h4 className="text-primary fw-bold">{ele.title}</h4>
                                <h5 className="mt-2 text-primary">{ele.content}</h5>
                                <p className="text-primary">{ele.example}</p>
                                <ul className="mt-2 text-primary">
                                    {
                                        ele.child.map((e, i) => {
                                            return (
                                                <li className="mt-2" key={i}>{e}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cook;