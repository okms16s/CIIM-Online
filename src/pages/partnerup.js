import React from "react";
import Faq from "../component/includes/faq";
import Carousel from "../component/partnerup/carousel";
import Cim from "../component/partnerup/cim";
import HelpButton from "../component/includes/helpbutton";
import ReviewList from "../component/includes/reviewlist/reviewlist";
import Tryit from "../component/includes/tryit";
import Contact from "../component/includes/contact/contact";

function PartnerUpPage () {
    return(
        <>
            <Carousel/>
            <Cim/>
            <Faq/>
            <ReviewList />
            <Tryit />
            <Contact />
            <HelpButton/>
        </>
    )
}

export default PartnerUpPage;