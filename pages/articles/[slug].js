import React from 'react';
import ArticleFullView from "../../components/ArticleFullView/ArticleFullView";
import CentralBody from "../../components/centralBody/centralBody";
import backendAddr from "../../config/endpoints";
import MainContainer from "../../components/MainContainer/MainContainer";

const Slug = (Article) => {
    return (
        <div>
            <MainContainer description = {Article.Article.seo_title}
                title={Article.Article.title} keywords={Article.Article.keywords}>
                <CentralBody>
                    <ArticleFullView>{Article.Article}</ArticleFullView>
                </CentralBody>
            </MainContainer>
        </div>
    );
};

export default Slug;
export async function getServerSideProps(context) {
     const article_response = await fetch(`${backendAddr}/articles/?slug=${context.query.slug}`)
    const Article = await article_response.json()
    context.res.setHeader('Cache-Control', 'no-store');
    return {
        props: {Article},
    }
}