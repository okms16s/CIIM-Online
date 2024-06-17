import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useLanguage } from "../../context/LanguageProvider";

import 'react-toastify/dist/ReactToastify.css';


function Login() {
    const navigate = useNavigate();

    const { lang } = useLanguage();
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const loginAction = () => {
        if (email === "") {
            toast.error('Please enter your email !');
            return;
        }
        else if (pwd === "") {
            toast.error("Please enter your password !");
        }
        else {
            toast.success("Login Success!");
            navigate("/");
        }
    }

    return (
        <div className="container">
            <div className="cim-container text-center bg-secondary mt-100 mt-md-50">
                <div className="w-50 w-md-100 ps-5 pe-5 mx-auto">
                    <h2 className="text-primary fw-bold">{lang.login.main.title}</h2>
                    <div className="mt-5">
                        <input type="text" className="w-100" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mt-5">
                        <input type="text" className="w-100" placeholder="Email address" onChange={(e) => setPwd(e.target.value)} />
                    </div>
                    <Link to="/forget" className="mt-3">
                        <h5 className="text-end cursor-pointer text-primary mt-5">{lang.login.main.forget}</h5>
                    </Link>
                    <button className="btn btn-primary mt-3 w-min-0 w-100" onClick={() => loginAction()}>{lang.login.main.button}</button>
                    <button className="btn bg-white border-radius-40 mt-5 w-min-0 w-100">{lang.login.main.withgoogle}</button>
                    <h5 className="text-center mt-5 text cursor-pointer">{lang.login.main.already}</h5>
                    <button className="btn btn-primary w-min-0 w-100">{lang.login.main.signup}</button>
                </div>
            </div>
        </div>
    )
}

export default Login;