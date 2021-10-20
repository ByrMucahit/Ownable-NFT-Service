import React from "react";
import styles from './row-exhibitionSide.module.css'

function Exhibition({ children }){
    return (
        <div className={styles.container}>
            { children }
        </div>
    )
}

export default Exhibition