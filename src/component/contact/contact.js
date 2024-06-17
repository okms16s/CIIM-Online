import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageProvider";
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { isValidEmail } from '../../utils/isValidEmail';
import { getLocation } from "../../utils/getLocation";
import { serviceID, templateID, publicKey } from "../../utils/emailjsEnv";

function Countact() {
    const { lang } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const sendEmail = async () => {
        if (name == "") {
            toast.error("Please enter your name!");
            return;
        }

        if (email == "") {
            toast.error("Please enter your email address!");
            return;
        } else if(!isValidEmail(email)) {
            toast.error("Email is not correct!");
            return;
        }

        if (msg == "") {
            toast.error("Please enter your message!");
            return;
        }

        const pos = await getLocation();

        const data = {
            title: 'Contact Page of CIMOnline.eu',
            name: name,
            email: email,
            message: msg,
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
    }
    return (
        <div className="container">
            <div className="row cim-container mt-100 mt-md-50 bg-secondary">
                <div className="col-lg-4 col-md-12 mt-5">
                    <h2 className="text-primary fw-bold">{lang.contact.touch.title}</h2>
                    <h4 className="text-gray">{lang.contact.touch.subtitle}</h4>
                    <input type="text" className="w-100 mt-4" placeholder={lang.contact.touch.name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" className="w-100 mt-4" placeholder={lang.contact.touch.email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" className="w-100 mt-4" placeholder={lang.contact.touch.message} onChange={(e) => { setMsg(e.target.value) }} />
                    <button className="btn btn-primary w-100 mt-5 w-min-0" onClick={sendEmail}>{lang.contact.touch.sent}</button>
                </div>
                <div className="col-lg-4 col-md-12 mt-5 text-center">
                    <h2 className="text-primary"><span className="fa fa-phone" style={{ transform: "ratate(90deg)" }}></span></h2>
                    <h5 className="text-primary">{lang.contact.call.title}</h5>
                    <h5 className="mt-3 text-gray">{lang.contact.call.subtitle}</h5>
                    <h5 className="text-primary"><a href="tel:+31 76 5717770">+31 76 5729999</a></h5>
                    <h5 className="text-primary"><a href="tel:+31 76 5729999">+31 76 5717770</a></h5>
                    <h5 className="text-gray">{lang.contact.call.addDetail}</h5>
                    <h5 className="text-gray">KC Nederland B.V.</h5>
                    <h5 className="text-gray">Minervum 7040</h5>
                    <h5 className="text-gray">4817 ZL Breda</h5>
                    <h5 className="text-gray">{lang.contact.call.chamber}: 20092260</h5>
                </div>
                <div className="col-lg-4 col-md-12 mt-5 d-flex flex-column justify-content-between">
                    <h2 className="text-primary text-center fw-bold">{lang.contact.demo.title}</h2>
                    <button className="btn btn-primary w-min-0 mt-5">{lang.contact.demo.demo}</button>
                </div>
            </div>
        </div>
    )
}

export default Countact;