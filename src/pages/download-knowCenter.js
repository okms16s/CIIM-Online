import React from "react";
import HelpButton from '../component/includes/helpbutton';
import DownloadKnowCenter from "../component/download-knowCenter/downloadKnowCenter";

function DownloadKnowCenterPage({selType}) {
    return (
        <>
            <DownloadKnowCenter selType = {selType} />
            <HelpButton />
        </>
    )
}

export default DownloadKnowCenterPage;