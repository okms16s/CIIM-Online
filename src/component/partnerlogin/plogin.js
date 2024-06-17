import React from "react";
import {useLanguage} from "../../context/LanguageProvider";
import { Link } from "react-router-dom";

function Plogin() {
    const {lang} = useLanguage();
    return (
        <div className="container">
            <div className="cim-container text-center bg-secondary mt-100 mt-md-50">
                <div className="w-50 w-md-100 ps-5 pe-5 mx-auto">
                    <h2 className="text-primary fw-bold">{lang.partnerlogin.main.title}</h2>
                    <div className="mt-5">
                        <input type="text" className="w-100" placeholder="Email address"/>
                    </div>
                    <div className="mt-5">
                        <input type="text" className="w-100" placeholder="Email address"/>
                    </div>
                    <Link to="/forget" className="mt-3">
                        <h5 className="text-end cursor-pointer text-primary mt-5">{lang.partnerlogin.main.forget}</h5>
                    </Link>
                    <button className="btn btn-primary mt-3 w-min-0 w-100">{lang.partnerlogin.main.button}</button>
                </div>
            </div>
        </div>
    )
}

export default Plogin;