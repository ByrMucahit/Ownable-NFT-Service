import React from "react";
import styles from './frameButton.module.css'

import Button from '../button/index'
import TextTitle from "../text/text-title";

function FrameButton ({children}) {
    return (
            <Button  
                className={styles.frameBtn}
                type="button"
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