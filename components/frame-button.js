import React from "react";
import styles from './frame-button.module.css'

import Button from './button'
import TextTitle from "./text-title";

function FrameButton ({children}) {
    return (
            <Button type="button" 
                className={styles.frameBtn}
                border
                >
                <TextTitle>{children}</TextTitle>
            </Button>
    ) 
}


export default FrameButton

/* 
    Document:
    --------
    <TextTitle/>: It's vary of text, It just has some specific attribute such as 16 px font size, and bold font wight.
*/