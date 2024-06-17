import React from "react";
import { useLanguage } from "../../context/LanguageProvider";
import { Link } from "react-router-dom";

function Account() {
    const { lang } = useLanguage();
    return (
        <div className="container cim-container mt-100 mt-md-50 bg-primary text-white">
            <h2 className="text-center fw-bold">{lang.aboutus.account.title}</h2>
            <h4 className="text-center text-blue mt-5">{lang.aboutus.account.content}</h4>
            <div className="row">
                <div className="col-lg-4 text-center mt-5">
                    <img src='/assets/img/Icon-user.png' alt="cim" />
                    <h4 className="text-blue mt-3">{lang.aboutus.account.tags[0]}</h4>
                    <h4 className="mt-4">{lang.aboutus.account.tagDes[0]}</h4>
                </div>
                <div className="col-lg-4 text-center mt-5">
                    <img src='/assets/img/Icon-star.png' alt="cim" />
                    <Link to='./reviews'>
                        <h4 className="text-blue mt-3 cursor-pointer">{lang.aboutus.account.tags[1]}</h4>
                    </Link>
                    <h4 className="mt-4">{lang.aboutus.account.tagDes[1]}</h4>
                </div>
                <div className="col-lg-4 text-center mt-5">
                    <img src='/assets/img/Icon-msg.png' alt="cim" />
                    <Link to='./reviews'>
                        <h4 className="text-blue mt-3 cursor-pointer">{lang.aboutus.account.tags[2]}</h4>
                    </Link>
                    <h4 className="mt-4">{lang.aboutus.account.tagDes[2]}</h4>
                </div>
            </div>
        </div>
    )
}

export default Account;