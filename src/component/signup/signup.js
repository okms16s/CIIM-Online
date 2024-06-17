import React from 'react'
import { useLanguage } from "../../context/LanguageProvider";

export default function Signup() {
    const { lang } = useLanguage();

    return (
        <div className='container'>
            <div className="cim-container text-center bg-secondary mt-100 mt-md-50">
                <div className="w-50 w-md-100 ps-5 pe-5 mx-auto">
                    <h2 className="text-primary fw-bold">{lang.signup.main.title}</h2>
                    <div className="mt-5">
                        <input type="text" className="w-100" placeholder="Email address" />
                    </div>
                    <div className="mt-5">
                        <input type="text" className="w-100" placeholder="Email address" />
                    </div>
                    <button className="btn btn-primary mt-3 w-min-0 w-100">{lang.signup.main.button}</button>
                    <button className="btn bg-white border-radius-40 mt-5 w-min-0 w-100">{lang.signup.main.withgoogle}</button>
                    <h5 className="text-center mt-5 text cursor-pointer">{lang.signup.main.already}</h5>
                </div>
            </div>
        </div>
    )
}
