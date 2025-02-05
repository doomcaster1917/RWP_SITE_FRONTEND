import Head from "next/head";
import styles from "./MainContainer.module.scss"
import Link from "next/link";
import Footer from "../Footer/Footer";
import React, {Suspense} from "react";
import {Metrika} from "../metriks/mainMetrica";
import Image from 'next/image'
import HeaderImage from "/static/images/header/header_img.png";
import HeaderImageMobile from "/static/images/header/header_img_mobile.png";

const MainContainer = ({children, title, description, keywords}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} content={description}/>
                <meta name={"keywords"} content={keywords}/>
                <link rel="icon" type="image/x-icon" href="../static/main_logo.ico"/>
                <meta name="yandex-verification" content="1560c9f5a49ea6ee"/>
            </Head>
            <Suspense>
                <Metrika/>
            </Suspense>

            <Link href={'/'} className={styles.header_logo}>
                    <Image src={HeaderImage} alt='logo' priority={true} quality={100}/>
            </Link>
            <Link href={'/'} className={styles.header_logo_mobile}>
                <Image src={HeaderImageMobile} alt='logo' priority={true} quality={100}/>
            </Link>
            <div className={styles.middle_header}>
                <div className={styles.navbar}>
                    {/*<Link href={'/our_course'}>Наш курс</Link>*/}
                    {/*<Link href={'ya.ru'}>Политика</Link>*/}
                    <Link href={'/regulation'}>Устав партии</Link>
                    <Link href={'/the_campaigns'}>Кампании</Link>
                </div>
            </div>
            <div className={styles.lower_header}>
                <div className={styles.lower_navbar}>
                    Читайте нас в соцсетях:
                    <Link href={"https://vk.com/cwdiscentre"}>
                        <img src="../static/social_media/emblems/vk_emblem.png" alt=""/>
                    </Link>
                    <Link href={"https://t.me/cwdis"}>
                        <img src="../static/social_media/emblems/tg_emblem.png" alt=""/>
                    </Link>
                </div>
            </div>
            <div className={styles.body_container}>
                {children}
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default MainContainer;