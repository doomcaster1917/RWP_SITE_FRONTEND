import React from 'react';
import MainContainer from "../components/MainContainer/MainContainer";
import CentralBody from "../components/centralBody/centralBody";
import ArticleFullView from "../components/ArticleFullView/ArticleFullView";
import Regulation from "./regulation";
import WhiteFullWidthBlock from "../components/UIKit/WhiteFullWidthBlock/WhiteFullWidthBlock";

const TheCampaigns = () => {
    return (
        <div>
            <MainContainer metaObj={{
                description: "Кампании партии",
                title: "Кампании партии", keywords: "коммунизм, рабочее движение, троцкизм, права рабочих"
            }}>
                <CentralBody>
                    <WhiteFullWidthBlock img={'../static/images/campaigns/WB.jpg'}
                                         text={'Кампания по защите прав работников склада Wildberryes'}></WhiteFullWidthBlock>
                </CentralBody>
            </MainContainer>
        </div>
    );
};

export default TheCampaigns;