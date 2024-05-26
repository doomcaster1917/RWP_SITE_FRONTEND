import React from 'react';
import MainContainer from "../components/MainContainer/MainContainer";
import CentralBody from "../components/centralBody/centralBody";
import ArticlesArea from "../components/UIKit/ArticlesArea/ArticlesArea";
import Slider from "../components/UIKit/Slider/Slider";
import backendAddr from "../config/endpoints";

const Index = ({articles}) => {
    return (
        <>
            <MainContainer title={"Революционная рабочая партия"}
                           description={"Официальный сайт революционной рабочей партии"}
                           keywords={"Революционная рабочая партия, РРП, коммунизм, троцкизм"}>
                <CentralBody>
                    <Slider></Slider>
                    <ArticlesArea>{articles}</ArticlesArea>
                </CentralBody>
            </MainContainer>
        </>
    );

};

export default Index;

export async function getStaticProps(){
    try {
        const response = await fetch(`${backendAddr}/articles`)
        const articles = await response.json()
        return {
            props: {articles}
        }
    }

    catch (error){
        console.log(`1111111111111111111111111${error}`)
        return {
            props: {}
        }
    }
}
