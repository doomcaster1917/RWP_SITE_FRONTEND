import React from 'react';
import styles from './ArticleFullView.module.scss'
import backendAddr from "../../config/endpoints";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const ArticleFullView = ({children}) => {
    return (
        <div>
        {children.map((item) =>
                <div className={styles.article} key={item.id}>
                    <img src={`${backendAddr}${item?.image}`} alt=""/>
                    <div className={styles.read_area}>
                        <h1>{item?.title}</h1>
                        <Markdown remarkPlugins={[remarkGfm]}>{item?.full_description}</Markdown>
                    </div>
                </div>
            )
        }
        </div>
    );
};

export default ArticleFullView;