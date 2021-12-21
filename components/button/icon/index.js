import React from "react";
import styles from "./style.module.css"
import * as Icon from '../../icons'

function IconButton(){
    return(
        <button className={`
        ${styles.muiButtonBaseRoot} 
        ${styles.muiIconButtonRoot} 
        ${styles.cssIconButton} 
        ${styles.cssIconButtonContent} 
        ${styles.muiIconButtonColorInherit}`}
        tabIndex={"0"}
        type="button"
        aria-label="Menu">
            <span className={styles.muiIconButtonLabel}>
                <Icon.HomepageOption className={styles.muiSvgIconRoot}/>
            </span>
        </button>
    )
}

export default IconButton;