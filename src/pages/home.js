import React from "react";
import About from "../component/home/about";
import Carousel from "../component/home/carousel/carousel";
import Reviews from "../component/home/reviews";
import Us from "../component/home/us";
import Use from "../component/includes/use/use";
import Work from "../component/home/work/work";

function HomePage() {
    return (
        <div>
            <Carousel />
            <About />
            <Work />
            <Use />
            <Us />
            <Reviews />
        </div>
    )
}

export default HomePage;