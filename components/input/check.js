import React from "react";
import styles from './check.module.css'

function CheckButton({children, label}) {
    return (
        <label className={styles.container}>
        <input className={styles.checkBox} type='checkbox'></input>
        <span className={styles.checkMark}></span>
        </label>
        
    )
}

export default CheckButton