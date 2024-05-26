import React from 'react';
import styles from "./ArticleMiddleView.module.scss"
import Link from "next/link";
import { useRouter } from 'next/router';
import backendAddr from "../../../config/endpoints";

const ArticleMiddleView = ({children}) => {
    const router = useRouter()
    return (
        <Link href={{pathname:`/articles/${children.slug}`, query:{slug:children.slug}}}
              className={styles.article_middle_view}>
            <img src={`${backendAddr}${children?.image}`} alt=""/>
            <div className={styles.name}>
            <h2>{children.name}</h2>
            </div>
            <div className={styles.title}>
            <p>{children.title}</p>
            </div>
        </Link>
    );
};

export default ArticleMiddleView;