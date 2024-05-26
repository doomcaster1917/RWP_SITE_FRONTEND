import React from 'react';
import styles from './centralBody.module.scss'
import { Suspense } from "react";
import {Metrika} from "../metriks/mainMetrica";

const CentralBody = ({children}) => {
    return (
        <div className={styles.central_body}>
            {children}
        </div>
    );
};

export default CentralBody;