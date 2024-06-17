import React from "react";
import Price from "../component/price/price";
import HelpButton from "../component/includes/helpbutton";

function PricePage () {
    return(
        <div className="bg-secondary">
            <Price/>
            <HelpButton/>
        </div>
    )
}
export default PricePage;
