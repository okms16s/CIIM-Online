import React from "react";
import Contact from '../includes/contact/contact';
import Tryit from "../includes/tryit";
import HelpButton from '../includes/helpbutton';
import ReviewList from "../includes/reviewlist/reviewlist";
import BePartner from "../includes/bePartner";

function Reviews() {
    return (
        <div style={{background: 'linear-gradient(to bottom, #D0EBEC 0%, #ffffff 100%)'}}>
            <div className="container text-center w-100 pt-100 pt-md-50">
                <ReviewList />
                <Tryit />
                <BePartner />
                <Contact />
            </div>
            <HelpButton />
        </div>
    )
}

export default Reviews;