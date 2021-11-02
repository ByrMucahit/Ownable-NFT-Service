import React from "react";
import styles from './style.module.css'

function CheckButton({children, size}) {
    return (
        <label className={styles.container}>
        <input 
        className={styles.checkBox} 
        type='checkbox'
        style={{width: size, height:size}}
        ></input>
        <span className={styles.checkMark}>{children}</span>
        </label>
        
    )
}

export default CheckButton