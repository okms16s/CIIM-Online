import React from "react";
import AboutApp from "../component/aboutapp/aboutapp";
import Testerminal from "../component/aboutapp/testerminal";
import Use from "../component/includes/use/use";
import Tryit from "../component/includes/tryit";
import HelpButton from "../component/includes/helpbutton";
import Slide1 from "../component/aboutapp/slider/slider1";
import Slide2 from "../component/aboutapp/slider/slider2";

function AboutAppPage () {
    return(
        <div>
            <AboutApp/>
            <Slide1 />
            <Testerminal/>
            <Slide2 />
            <Use/>
            <Tryit />
            <HelpButton/>
        </div>
    )
}

export default AboutAppPage;