import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useLanguage } from "../../context/LanguageProvider";
import { isValidEmail } from '../../utils/isValidEmail';
import { getLocation } from '../../utils/getLocation';
import { serviceID, templateID, publicKey } from "../../utils/emailjsEnv";

function KnowCenter({ selType }) {
    const navigator = useNavigate();
    const { lang } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [application, setApplication] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const loginToWhitePaper = async (e) => {
        e.preventDefault();

        if (name == '') {
            toast.error("Please enter your name!");
            return;
        }

        if (email == '') {
            toast.error("Please enter your email!");
            return;
        } else if (!isValidEmail(email)) {
            toast.error('Email is not correct!');
            return;
        }

        if (application == '') {
            toast.error("Please enter your application!");
            return;
        }

        if (!isChecked) {
            toast.error("Please agree to terms!");
            return;
        }

        var pos = await getLocation();

        const data = {
            title: 'Knowledge Center page of CIMOnline',
            name: name,
            sender: email,
            message: application,
            country: pos.country_name,
            city: pos.city,
            ip: pos.ip
        }

        await emailjs.send(serviceID, templateID, data, publicKey)
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        toast.success("Success!");
        navigator('/download-' + lang.knowCenter.id[selType]);
    }

    return (
        <div className="container">
            <div className="w-100 bg-secondary cim-container mt-100 mt-md-50">
                <h2 className="text-primary text-center fw-bold">{lang.knowCenter.title[selType]}</h2>
                <h4 className="text-primary text-center">{lang.knowCenter.content}</h4>
                <form className="w-50 w-md-100 mx-auto mt-5">
                    <input
                        type="text"
                        value={name} onChange={(e) => { setName(e.target.value) }}
                        className="form-control mt-5"
                        placeholder={lang.knowCenter.placeName}
                    />
                    <input
                        type="text"
                        value={email} onChange={(e) => { setEmail(e.target.value) }}
                        className="form-control mt-5"
                        placeholder={lang.knowCenter.placeEmail}
                    />
                    <input
                        type="text"
                        value={application} onChange={(e) => { setApplication(e.target.value) }}
                        className="form-control mt-5"
                        placeholder={lang.knowCenter.placeApp}
                    />
                    <div className="mt-5">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                style={{ width: "15px", height: "15px" }}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <span className="default"></span>
                        </label>
                        <span className="mb-0 text-primary ps-2 cim-check-label">{lang.knowCenter.checktxt}</span>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-5 w-min-0" onClick={(e) => loginToWhitePaper(e)} >{lang.knowCenter.title[selType]}</button>
                </form>
            </div>
        </div>
    )
}

export default KnowCenter;