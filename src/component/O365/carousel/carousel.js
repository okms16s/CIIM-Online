import React from "react";
import { useLanguage } from "../../../context/LanguageProvider";
import './carousel.css';

function Carousel() {
    const { lang } = useLanguage();
    const scrollToBtm = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }
    return (
        <div className="position-relative">
            <img src="/assets/img/carousel/6.png" className="w-100" />
            <h2 className="o365-content mb-0">{lang.o365.carousel.content}</h2>
            <h5 className="o365-scroll" onClick={() => scrollToBtm()}>{lang.o365.carousel.scroll}&nbsp;&nbsp;&nbsp;<span className="fa fa-arrow-down"></span></h5>
        </div>
    )
}

export default Carousel;