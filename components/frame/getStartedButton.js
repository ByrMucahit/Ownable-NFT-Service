import React from "react";
import styles from './getStartedButton.module.css'
import Button from '../button/base/index'
import HeadTitle from "../text/head-title";

function GetStartedButton({children}){
    return(
        <Button className={styles.getStartedButton} 
        border>
            <HeadTitle 
            className={styles.btnText} 
            bold>
                Get Started
            </HeadTitle>
        </Button>
    )
}

export default GetStartedButton