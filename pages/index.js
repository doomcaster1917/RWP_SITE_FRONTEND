import React from 'react';
import MainContainer from "../components/MainContainer/MainContainer";
import CentralBody from "../components/centralBody/centralBody";
import ArticlesArea from "../components/UIKit/ArticlesArea/ArticlesArea";
import Slider from "../components/UIKit/Slider/Slider";
import backendAddr from "../config/endpoints";
import Head from "next/head";

const Index = ({articles}) => {
    return (
        <>  <Head>
            <title>{"Официальный сайт революционной рабочей партии"}<img src="../static/images/header/meeting.png" alt=""/></title>
            </Head>
            <MainContainer
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
