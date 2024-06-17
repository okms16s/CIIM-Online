import React from 'react'
import {useLanguage} from '../../context/LanguageProvider';

function Forget() {
    const {lang} = useLanguage();
    return (
        <div className='container'>
            <div className="cim-container bg-secondary mt-100 mb-100 text-center">
                <p className="fs-48 fontW-600 fontfamily-Inter lh-58 lt-space-02 text-primary">{lang.forget.main.title}</p>
                <p className="fs-18 fontW-400 lh-24 text-primary mt-5">{lang.forget.main.subtitle}</p>

                <input type="hidden" name="_um_password_reset" id="_um_password_reset" value="1" />

                <div id="um_field_um_password_id_username_b" style={{width:"40%", marginRight:"auto", marginLeft:"auto"}} className="mt-5 mb-5  um-field-username_b um-field-text um-field-type_text" data-key="username_b"><div className="um-field-area">
                    <input autocomplete="off" className="um-form-field valid " type="text" name="username_b" id="username_b" value="" placeholder={lang.forget.main.emaildes} data-validate="" data-key="username_b" />
                </div></div>
                <div className="um-col-alt um-col-alt-b">

                    <div className="um-center">
                        <button type="submit" value="Continue" className="mt-4 um-button forgot-dark-btn pos-relactive bg-primary text-white" id="um-submit-btn" >{lang.forget.main.button}</button>
                    </div>

                    <div className="um-clear"></div>

                </div>

                <input type="hidden" name="form_id" id="form_id_um_password_id" value="um_password_id" />
            </div>
        </div>
    )
}


export default Forget;