import React from "react";
import { useLanguage } from "../../../context/LanguageProvider";
import './reviewlist.css';

function ReviewList() {
    const { lang } = useLanguage();

    const company = [
        ['Heko', 'Centric Alert', 'CJ Mourik'],
        ['vBaarsen', 'KCS Projects', 'R. Koenraads'],
        ['Contimeta', 'KCS Wholesale', 'K. Meeuws'],
        ['EMM', 'KCS Trade', 'G. Sonneveld'],
        ['Vanesch', 'SAP', 'P. Van Gerven'],
        ['MPM Oils', 'SAP', 'W. Schoumans'],
        ['Koenraads', 'Admicom', 'R. Koenraads']
    ]
    return (
        <div className="container mt-100 mt-md-50">
            <h2 className="text-primary fw-bold text-center">{lang.home.reviews.title}</h2>
            <h4 className="w-75 mx-auto text-gray text-center">{lang.home.reviews.subtitle}</h4>
            <div className="cim-container bg-primary mt-100 mt-md-50">
                <h5 className="text-white w-100 text-end">
                    <span className="border-bottom border-white">{lang.home.reviews.carousel.header}</span>
                </h5>
                <h2 className="text-white text-start">{lang.home.reviews.carousel.content}</h2>
                <div className="mt-100 text-start view-marks">
                    <div id="reviewsCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {
                                company.map((ele, idx) => {
                                    return (
                                        <div className={"carousel-item " + (idx == 0 ? 'active' : null)} key={idx}>
                                            <div className="d-flex gap-3">
                                                <img src={'/assets/img/company for review/' + (idx + 1) + '.jpg'} alt="cim" className="reviews-img" />
                                                <div>
                                                    <h5 className="fw-bold text-white mb-0">{ele[0]}</h5>
                                                    <h5 className="text-white mb-0">{ele[1]}</h5>
                                                    <h5 className="text-white mb-0">{ele[2]}</h5>
                                                    <img src="/assets/img/stars.svg" className="w-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="reviews-slide text-white d-flex justify-content-end gap-4">
                            <span className="fa fa-arrow-left cursor-pointer" data-bs-target="#reviewsCarousel" data-bs-slide="prev"></span>
                            <span className="fa fa-arrow-right cursor-pointer pos-relactive" data-bs-target="#reviewsCarousel" data-bs-slide="next"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewList;