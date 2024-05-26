import React from 'react';
import styles from './ArticleFullView.module.scss'
import backendAddr from "../../config/endpoints";

const ArticleFullView = ({children}) => {
    console.log(children)
    return (
        <div>
        {children.map((item) =>
                <div className={styles.article} key={item.id}>
                    <img src={`${backendAddr}${item?.image}`} alt=""/>
                    <div className={styles.read_area}>
                        <h1>{item?.title}</h1>
                        <p>{item?.full_description}</p>
                    </div>
                </div>
            )
        }
        </div>
    );
};

export default ArticleFullView;