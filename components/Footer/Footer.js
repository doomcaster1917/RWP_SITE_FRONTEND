import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
            <img className={styles.qr_code} src="../static/images/qr_code.png" alt=""/>
                <p>Copyright © 2025 Рабочий Контроль. Все права защищены.</p>
            </div>
        </div>
    );
};

export default Footer;