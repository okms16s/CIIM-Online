import React from "react";
import Carousel from "../component/O365/carousel/carousel";
import Des from "../component/O365/des";
import Mergetool from "../component/O365/mergetool";
import Ms from "../component/O365/ms";
import Msdetail from "../component/O365/msdetail";
import Techdes from "../component/O365/techdes";
import HelpButton from '../component/includes/helpbutton';

function O365Page() {
    return (
        <div>
            <Carousel />
            <Ms />
            <Msdetail />
            <Mergetool />
            <Techdes />
            <Des />
            <HelpButton />
        </div>
    )
}

export default O365Page;