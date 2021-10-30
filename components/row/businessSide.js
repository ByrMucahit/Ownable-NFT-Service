import React from "react";
import HeadTitle from "../text/head-title";
import styles from './businessSide.module.css'


function BusinessSide(){
    return(
        <div className={styles.businessContainer}>
            <HeadTitle className={styles.businessText} 
            size='33px' 
            bold>
                <span className={styles.Span}>Ownable-NS </span> 
                for Business
            </HeadTitle>
        </div>
        
    )
}

export default BusinessSide;