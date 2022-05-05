import React from "react";
import styles from "./style.module.css"

function mintBtn(){
    return(
        <button className={`
        ${styles.muiInputBaseRoot} 
        ${styles.muiButtonRoot} 
        ${styles.muiButtonContained} 
        ${styles.cssButton} 
        ${styles.muiButtonContainedPrimary}
        `}
        
        type="submit"
        >
            <span className={styles.muiButtonLabel}>Mint NFT</span>
        </button>
    )
}

export default mintBtn;