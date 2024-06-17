import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Embrace() {
    const { lang } = useLanguage();
    return (
        <div className="container mt-100 mt-md-50">
            <div className="cim-container bg-primary text-white row">
                <div className="col-lg-6 col-md-12 mt-5">
                    <h2 className="fw-bold">{lang.aboutus.carousel.title}</h2>
                </div>
                <div className="col-lg-6 col-md-12 mt-5 position-relative">
                    <div id="embraceCarousel" className="carousel slide" data-bs-interval="15000" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {
                                lang.aboutus.carousel.content.map((ele, idx) => {
                                    return (
                                        <div className={"carousel-item " + (idx === 0 ? 'active' : null)} key={idx}>
                                            {
                                                ele.map((e, i) => {
                                                    return (
                                                        <h5 className="mb-0 text-start" key={i}>{e}</h5>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="carousel-indicators position-absolute embrace-indicators-slide" style={{bottom: '-50px'}}>
                            <div data-bs-target="#embraceCarousel" data-bs-slide-to="0" className="active"></div>
                            <div data-bs-target="#embraceCarousel" data-bs-slide-to="1"></div>
                            <div data-bs-target="#embraceCarousel" data-bs-slide-to="2"></div>
                            <div data-bs-target="#embraceCarousel" data-bs-slide-to="3"></div>
                        </div>
                        <div className="d-flex justify-content-center gap-5 embrace-indicators-arrow">
                            <button className="carousel-control-prev slide1-prev pos-relactive w-min-0" type="button" data-bs-target="#embraceCarousel" data-bs-slide="prev" style={{color: "rgb(100, 187, 194)" }}>
                                <span className="fa fa-arrow-left pos-relactive"></span>
                            </button>
                            <button className="carousel-control-next slide1-next pos-relactive w-min-0" type="button" data-bs-target="#embraceCarousel" data-bs-slide="next" style={{color: "rgb(100, 187, 194)" }}>
                                <span className="fa fa-arrow-right pos-relactive"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Embrace;