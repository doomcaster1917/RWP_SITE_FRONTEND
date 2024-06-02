import React from 'react';
import styles from './WhiteFullWidthBlock.module.scss'
import Link from "next/link";

const WhiteFullWidthBlock = ({img, text, link}) => {
    return (
            <Link href={link?`/${link}`:`/dev`} className={styles.white_block}>
                <img src={`${img}`} alt=""/>
                {text}
            </Link>
    );
};

export default WhiteFullWidthBlock;