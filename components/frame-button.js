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