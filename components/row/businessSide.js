import React from "react";
import HeadTitle from "../text/head-title";
import styles from './businessSide.module.css'


function BusinessSide(){
    return(
        /* Business Side Container */
        <div className={styles.businessContainer}>
            {/* Header */}
            <HeadTitle className={styles.businessText} 
            bold>
                 {/* Ownable NS */}
                <span className={styles.Span}>Ownable-NS </span> 
                for Business
            </HeadTitle>
        </div>
        
    )
}

export default BusinessSide;