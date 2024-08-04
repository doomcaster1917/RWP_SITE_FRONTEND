import React from 'react';
import MainContainer from "../components/MainContainer/MainContainer";
import CentralBody from "../components/centralBody/centralBody";
import ArticlesArea from "../components/UIKit/ArticlesArea/ArticlesArea";
import Slider from "../components/UIKit/Slider/Slider";
import backendAddr from "../config/endpoints";
import Head from "next/head";

const Index = ({articles}) => {
    return (
        <>
            <MainContainer title={"Официальный сайт революционной рабочей партии | РРП"}
                           description={"Официальный сайт РРП, революционной рабочей партии"}
                           keywords={"революционная рабочая партия, РРП, коммунизм, сайт РРП"}>
                <CentralBody>
                    <Slider></Slider>
                    <ArticlesArea>{articles}</ArticlesArea>
                </CentralBody>
            </MainContainer>
        </>
    );

};

 export default Index;


export const dynamic = 'force-static';
export async function getStaticProps(){
    try {
        const response = await fetch(`${backendAddr}/articles`)
        const articles = await response.json()
        return {props: {articles}, revalidate: 10}
    }

    catch (error){
        console.log(`1111111111111111111111111${error}`)
        return {
            props: {}
        }
    }
}
