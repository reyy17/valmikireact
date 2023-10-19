import React from 'react';
import Feature1 from "../components/homeContent/featureDiv/featureDiv1";
import Recommendations from "../components/homeContent/recommendations/recommendations";
import FillerDiv from "../components/homeContent/fillerDiv";
import TopCategories from "../components/homeContent/topCategories/topCategories";
import About from "../components/homeContent/about";
import CodingPlatform from "./homeContent/codingPlatform";


function HomeContent2() {
    return (
        <div>
            <br />
            <br />
            <About />
            <Recommendations />
            <FillerDiv />
            <br />
            <br />
            <TopCategories />
            <br />
            <br />
            <br />
            <br />
            <Feature1 />
            <CodingPlatform/>
           
        </div>
    );
}

export default HomeContent2;
