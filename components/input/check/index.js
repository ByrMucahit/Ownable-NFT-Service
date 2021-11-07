import React from "react";
import styles from './style.module.css'

function CheckButton({children, size}) {
    return (
        /* Check Input container */
        <label className={styles.container}>
            {/* Check Input Field */}
            <input 
            className={styles.checkBox} 
            type='checkbox'
            style={{width: size, height:size}}
            />
            {/* Explanation from next to button */}
            <span className={styles.checkMark}>{children}</span>
        </label>
    )
}

export default CheckButton