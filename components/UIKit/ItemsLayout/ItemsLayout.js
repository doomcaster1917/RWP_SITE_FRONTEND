import React from 'react';
import styles from './ItemsLayout.module.scss'
import ArticleMiddleView from "../ArticleMiddleView/ArticleMiddleView";

const ItemsLayout = ({children}) => {
    return (
        <div className={styles.items_layout}>
            {children?.map((item) =>
                <ArticleMiddleView key={item.id}>{item}</ArticleMiddleView>
            )}
        </div>
    );
};

export default ItemsLayout;