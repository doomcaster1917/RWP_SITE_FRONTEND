import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Slider.module.scss"
import Link from "next/link";
import { useRouter } from 'next/navigation'

const Slider = () =>{

        const router = useRouter()
        return (
            <div className={styles.carousel}>
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} interval={6000}
                          showStatus={false} onClickItem={(index, item) => router.push(item?.props?.href)}>
                        <Link href={'/articles/Chernysheva_RK1_4'} style={{"cursor": 'pointer'}}>
                            <img src="../static/images/banners/chernishova.png" alt="image2"/>
                        </Link>

                        <Link href={'/ya'}>
                            <img src="../static/images/banners/invite_banner.png" alt="image1"/>
                        </Link>
                </Carousel>
            </div>
        );
    }
export default Slider