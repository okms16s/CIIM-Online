import React from "react";
import Countact from "../component/contact/contact";
import HelpButton from "../component/includes/helpbutton";
import Tryit from "../component/includes/tryit";

function ContactPage() {
    return (
        <>
            <Countact />
            <Tryit/>
            <HelpButton/>
        </>
    )
}

export default ContactPage;