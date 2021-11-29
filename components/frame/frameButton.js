import React from "react";
import styles from './frameButton.module.css'

import Button from '../button/base/index'
import TextTitle from "../text/text-title";

function FrameButton ({children}) {
    return (
            <Button  
                className={styles.frameBtn}
                type="button"
                border
                >
                <p>
                    <span>
                        {children}
                    </span>        
                </p>
            </Button>
    ) 
}

export default FrameButton

/* 
    Document:
    --------
    <TextTitle/>: It's vary of text, It just has some specific attribute such as 16 px font size, and bold font wight.
*/