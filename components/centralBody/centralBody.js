import React from 'react';
import styles from './centralBody.module.scss'

const CentralBody = ({children}) => {
    return (
        <div className={styles.central_body}>
            {children}
        </div>
    );
};

export default CentralBody;