import React from "react";
import { useLanguage } from "../../../context/LanguageProvider";
import './use.css'
import { Link } from "react-router-dom";

function Use() {

    const { lang } = useLanguage();

    return (
        <div className="container cim-container text-center">
            <h2 className="text-primary fw-bold">{lang.home.use.title}</h2>
            <div className="w-100 position-relative mt-100 mt-md-50">
                <img src='/assets/img/video.jpg' alt="cim" className="video-img" />
                <div className="bg-white video-play">
                    <Link to='/video'>
                        <img src="/assets/img/video-play.svg" className="video-play-img" />
                        <span className="fa fa-play cursor-pointer video-play-btn"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Use;