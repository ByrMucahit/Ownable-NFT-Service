import React from "react";
import styles from './frameButton.module.css'

import Button from '../button/base/index'
import TextTitle from "../text/text-title";

function FrameButton ({children, onClick}) {
    return (
            <button  
                className={`
                ${styles.muiButtonBaseRoot} 
                ${styles.muiButtonRoot} 
                ${styles.muiButtonOutlined} 
                ${styles.cssButtonContent}`}
                type="button"
                onClick={onClick}
                border
                >
                    <span className={styles.muiButtonLabel}>
                        {children}
                    </span>        
            </button>
    ) 
}

export default FrameButton

/* 
    Document:
    --------
    <TextTitle/>: It's vary of text, It just has some specific attribute such as 16 px font size, and bold font wight.
*/