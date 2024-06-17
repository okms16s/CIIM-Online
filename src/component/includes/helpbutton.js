import React, { useState } from "react";

function HelpButton() {
    return (
        <>
            <div className="w-100 text-end pt-50 pb-50 pe-3">
                <span type="button" className="pt-3 pb-3 ps-4 pe-4 bg-primary rounded-circle text-white" data-bs-toggle="modal" data-bs-target="#helpModal">?</span>
            </div>
            <div className="modal fade" id="helpModal">
                <div className="modal-content bg-primary w-50 put-middle pos-fixed" style={{ top: "100PX", left: "25%" }} >
                    <div className="modal-header text-start">
                        <span className="fa fa-close cursor-pointer"></span>
                        <p className="contactModalLogo text-center d-flex">CIM</p>
                        <h4 className="modal-title">Ask your question</h4>
                    </div>

                    <div className="modal-body">
                        <input type="text" className="w-100 text-white" placeholder="Company name" />
                        <input type="text" className="w-100 text-white" placeholder="Your name*" />
                        <input type="text" className="w-100 text-white" placeholder="E-mail address*" />
                        <textarea className="w-100 mt-30" rows="5" placeholder="Your question or comment*"></textarea>
                    </div>

                    <div className="modal-footer border-none ">
                        <button type="button" className="btn w-100 pos-relactive">Send</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HelpButton;