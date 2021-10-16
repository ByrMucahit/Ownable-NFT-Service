import React from "react";
import styles from './frame-button.module.css'

import Button from './button'


function FrameButton ({children}) {
    return (
        <div className={styles.frameContainer}>
            <Button type="button" className={styles.frameBtn} border>{children}</Button>
        </div>
    ) 
}


export default FrameButton