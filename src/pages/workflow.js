import React from "react";
import Approach from "../component/workflow/approach";
import Conclusion from "../component/workflow/conclusion";
import Control from "../component/workflow/control";
import Dashboard from "../component/workflow/dashboard and approach";
import Efficiency from "../component/workflow/efficiency";
import LogDoc from "../component/workflow/logging and document";
import Offer from "../component/workflow/offer";
import Security from "../component/workflow/security";
import HelpButton from '../component/includes/helpbutton';

function WorkFlowPage () {
    return(
        <div>
            <Efficiency/>
            <Approach/>
            <Control/>
            <LogDoc/>
            <Dashboard/>
            <Offer/>
            <Security/>
            <Conclusion/>
            <HelpButton/>
        </div>
    )
}

export default WorkFlowPage;