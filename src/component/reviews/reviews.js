import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Reviews() {
    const { lang } = useLanguage();
    return (
        <div className="cim-container container bg-secondary mt-100 mt-md-50">
            <h2 className="text-center text-primary fw-bold">{lang.reviews.title}</h2>
            <h4 className="text-center text-gray">{lang.reviews.subtitle}</h4>
            <div className="mt-50">
                {
                    lang.reviews.content.map((element, i) => {
                        return (
                            <div className="border-bottom border-secondary mt-50" key={i}>
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 col-sm-12 d-flex">
                                        <div className="text-center w-75 mx-auto">
                                            <img src={"/assets/img/company/company_" + (i + 1) + ".png"} alt="cim" className="w-100 mb-3" />
                                            <h5 className="text-primary mb-0">{element.name}</h5>
                                            <h5 className="text-primary mb-0">{element.contactPerson}</h5>
                                            <h5 className="text-primary mb-0">{element.duty}</h5>
                                            <img src='/assets/img/stars.svg' alt="cim" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <h5 className="text-primary mb-0">
                                            {
                                                element.preContent.map((subele, subIdx) => {
                                                    return (
                                                        <span key={subIdx}>{subele}<br /><br /></span>
                                                    )
                                                })
                                            }
                                            <div id={"review" + (i + 1)} className="collapse">
                                                {
                                                    element.afterContent.map((subele, subIdx) => {
                                                        return (
                                                            <span key={subIdx}>{subele}<br /><br /></span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                                <h5 className="w-100 text-end cursor-pointer" data-bs-toggle="collapse" data-bs-target={"#review" + (i + 1)}>{lang.reviews.readMore}</h5>
                            </div>
                        )
                    })
                }
                <div className="w-100 text-center mt-50">
                    <button className="btn btn-secondary pt-2 pb-2 ps-4 pe-4 w-fit w-min-0"><h5 className="mb-0">{lang.reviews.viewMore}</h5></button>
                </div>
            </div>
        </div>
    )
}

export default Reviews;