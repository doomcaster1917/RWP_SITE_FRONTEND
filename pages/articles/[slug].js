import React from 'react';
import ArticleFullView from "../../components/ArticleFullView/ArticleFullView";
import CentralBody from "../../components/centralBody/centralBody";
import backendAddr from "../../config/endpoints";
import MainContainer from "../../components/MainContainer/MainContainer";

const Slug = (Article) => {
    return (
        <>
            {Article.Article.map((artcl) =>
            <div>
                <MainContainer description = {artcl?.seo_description}
                               title={artcl.title} keywords={artcl.seo_keywords}>
                    <CentralBody>
                        <ArticleFullView>{Article.Article}</ArticleFullView>
                    </CentralBody>
                </MainContainer>
            </div>
            )}
        </>
    );
};

export default Slug;
export async function getServerSideProps(context) {
    const article_response = await fetch(`${backendAddr}/articles/?slug=${context.query.slug}`)
    if(article_response.status === 200){
        const Article = await article_response.json()
        context.res.setHeader('Cache-Control', 'no-store');
        return {
            props: {Article},
        }
    }else{
        return {
            notFound: true
        }
    }
}