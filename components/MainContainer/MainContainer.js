import Head from "next/head";
import styles from "./MainContainer.module.scss"
import Link from "next/link";
import Footer from "../Footer/Footer";
// import MinorNavbar from "../headerComponents/MinorNavbar/MinorNavbar";
// import MajorNavbar from "../headerComponents/MajorNavbar/MajorNavbar";
// import Footer from "../Footer/Footer";

const MainContainer = ({children, metaObj}) => {
    return (
        <>
            <Head>
                <meta name="keywords" content={metaObj ? "" + metaObj.keywords : "Революционная рабочая партия, rpw, Рабочая Демократия, троцкизм, коммунизм"}/>
                <meta name="desctiption" content={metaObj ? "name" + metaObj.description:"Сайт революционной рабочей партии и газеты Рабочая Демократия"}/>
                 <link rel="icon" type="image/x-icon" href="../static/main_logo.ico"/>
                <title>{metaObj ? metaObj.name: "Главная страница"}</title>
            </Head>
            <header>
                <div className={styles.header}>
                    <div className={styles.upper_header}>
                        <div className={styles.upper_container}>
                            <img src="../static/images/header/meeting.png" alt="" className={styles.meeting_img}/>
                            <Link href={'/'}>
                            <img src="../static/images/emblems/main_logo.png" alt="" className={styles.main_logo}/>
                            </Link>
                            Революционная <br/>
                            {"          "} Рабочая Партия
                        </div>
                    </div>
                    <div className={styles.middle_header}>
                        <div className={styles.navbar}>
                            <Link href={'/our_course'}>Наш курс</Link>
                            <Link href={'ya.ru'}>Политика</Link>
                            <Link href={'ya.ru'}>Устав партии</Link>
                            <Link href={'ya.ru'}>Кампании</Link>
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