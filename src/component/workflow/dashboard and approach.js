import React from "react";
import { useLanguage } from "../../context/LanguageProvider";

function Dashboard() {
    const { lang } = useLanguage();
    return (
        <div className='mt-100 mt-md-50 cim-container container bg-liner-primary'>
            <div className='row'>
                <div className='col-xl-6 col-lg-12 d-flex justify-content-center align-items-center mt-5 order-2 order-xl-1 order-lg-2 order-md-2 order-sm-2 order-xs-2'>
                    <img src='/assets/img/img2.png' alt='cim' className='w-75' />
                </div>
                <div className='col-xl-6 col-lg-12 d-flex justify-content-center align-items-center mt-5 order-1 order-xl-2 order-lg-1 order-md-1 order-sm-1 order-xs-1'>
                    <div>
                        <h2 className='text-white text-center fw-bold'>{lang.workflow.dashboard.title[0]}</h2>
                        <h5 className='text-white mt-4'>{lang.workflow.dashboard.content[0]}</h5>
                    </div>
                </div>
            </div>
            <div className='row mt-50'>
                <div className='col-xl-6 col-lg-12 d-flex justify-content-center align-items-center mt-5'>
                    <div>
                        <h2 className='text-white text-center fw-bold'>{lang.workflow.dashboard.title[1]}</h2>
                        <h5 className='text-white mt-4'>{lang.workflow.dashboard.content[1]}</h5>
                    </div>
                </div>
                <div className='col-xl-6 col-lg-12 d-flex justify-content-center align-items-center mt-5'>
                    <img src='/assets/img/img2.png' alt='cim' className='w-75' />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;