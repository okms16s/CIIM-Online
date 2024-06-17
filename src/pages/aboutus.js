import React from "react";
import Us from '../component/aboutus/us';
import Embrace from "../component/aboutus/embrace";
import Card from "../component/aboutus/card"; 
import Account from "../component/aboutus/account";
import Faq from "../component/includes/faq";
import Tryit from "../component/includes/tryit";
import BePartner from '../component/includes/bePartner';
import HelpButton from "../component/includes/helpbutton";

function AboutUsPage() {
    return (
        <>
            <Us />
            <Embrace/>
            <Card/>
            <Account/>
            <Faq/>
            <Tryit />
            <BePartner />
            <HelpButton/>
        </>
    )
}

export default AboutUsPage;