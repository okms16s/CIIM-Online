import React from "react";
import './work.css';
import { useLanguage } from "../../../context/LanguageProvider";

function Work() {
    const { lang } = useLanguage();
    return (
        <div className="bg-primary mt-100 mt-md-50">
            <div className="container w-100 cim-container position-relative text-center">
                <div className="position-absolute text-white w-100 start-0 d-flex justify-content-center align-items-center work-title">
                    <p>{lang.home.workflow.content}</p>
                </div>
                <div className="progress-bar bg-primary css">
                    <progress id="css" min="0" max="100" value="100"></progress>
                </div>
                <img src='/assets/img/works/1.png' alt="cim" className="worksImg1" />
                <img src='/assets/img/works/2.png' alt="cim" className="worksImg2" />
                <img src='/assets/img/works/3.png' alt="cim" className="worksImg3" />
                <img src='/assets/img/works/4.png' alt="cim" className="worksImg4" />
                <img src='/assets/img/works/5.png' alt="cim" className="worksImg5" />
                <img src='/assets/img/works/6.png' alt="cim" className="worksImg6" />
                <img src='/assets/img/works/7.png' alt="cim" className="worksImg7" />
                <img src='/assets/img/works/8.png' alt="cim" className="worksImg8" />
                <img src='/assets/img/works/9.png' alt="cim" className="worksImg9" />
                <img src='/assets/img/works/10.png' alt="cim" className="worksImg10" />
                <img src='/assets/img/works/circle.png' alt="cim" className="work-img-circle" />
            </div>
        </div>
    )
}

export default Work;