import React from "react";
import styles from './getStartedButton.module.css'
import Button from '../button/base/index'
import HeadTitle from "../text/head-title";

function GetStartedButton({children}){
    return(
        <a className={styles.getStartedButton} 
        border>
                Get Started
        </a>
    )
}

export default GetStartedButton