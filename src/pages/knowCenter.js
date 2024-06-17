import React from "react";
import HelpButton from '../component/includes/helpbutton';
import KnowCenter from "../component/knowCenter/knowCenter";

function KnowCenterPage({selType}) {
    return (
        <div>
            <KnowCenter selType={selType} />
            <HelpButton />
        </div>
    )
}

export default KnowCenterPage;