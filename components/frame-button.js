import React from "react";
import styles from './frame-button.module.css'

import Button from './button'


function FrameButton ({children}) {
    return (
            <Button type="button" 
            className={styles.frameBtn}
             border
             >
            {children}
            </Button>
    ) 
}


export default FrameButton