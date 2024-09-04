import Head from "next/head";
import styles from "./MainContainer.module.scss"
import Link from "next/link";
import Footer from "../Footer/Footer";
import React, {Suspense} from "react";
import {Metrika} from "../metriks/mainMetrica";
// import MinorNavbar from "../headerComponents/MinorNavbar/MinorNavbar";
// import MajorNavbar from "../headerComponents/MajorNavbar/MajorNavbar";
// import Footer from "../Footer/Footer";

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
            <header>
                <div className={styles.header}>
                    <div className={styles.upper_header}>
                        <div className={styles.upper_container}>
                            <img src="../static/images/header/meeting.png" alt="" className={styles.meeting_img}/>
                            <Link href={'/'}>
                                <img src="../static/images/emblems/main_logo.png" alt="" className={styles.main_logo}/>
                            </Link>
                            <div className={styles.party_name}>
                                Революционная <br/>
                                {"          "} Рабочая Партия
                            </div>
                            <div className={styles.party_name_mobile}>
                                Революционная {"   "} Рабочая Партия
                            </div>
                        </div>
                    </div>
                    <div className={styles.middle_header}>
                        <div className={styles.nav_wrapper}>
                            <div className={styles.navbar}>
                                {/*<Link href={'/our_course'}>Наш курс</Link>*/}
                                {/*<Link href={'ya.ru'}>Политика</Link>*/}
                                <Link href={'/regulation'}>Устав партии</Link>
                                <Link href={'/the_campaigns'}>Кампании</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lower_header}>
                        <div className={styles.lower_navbar}>
                            Читайте нас в соцсетях:
                            <Link href={"https://vk.com/rwp_rrp"}>
                                <img src="../static/social_media/emblems/vk_emblem.png" alt=""/>
                            </Link>
                            <Link href={"https://t.me/rewrabpart"}>
                                <img src="../static/social_media/emblems/tg_emblem.png" alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
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