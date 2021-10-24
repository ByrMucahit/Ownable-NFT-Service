import React from "react";
import styles from './style.module.css'
import * as Icon from '../icons'
import HeadTitle from '../text/head-title'
import FooterNav from '../footer/index.js'

function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.leftSideOfContainer}>
                <div className={styles.Icons}>
                <Icon.Twitter/>
                <Icon.Facebook/>
                <Icon.Youtube />
                <Icon.İnstagram/>
                <Icon.Linkdn />
                <Icon.Mail/>
                <Icon.Discord/>
                </div>
                <div>
                    <HeadTitle>Join the community of #ownable-NS</HeadTitle>
                </div>
                <div>
                    <HeadTitle>Copyright © 2021 Ownable-NS</HeadTitle>
                </div>
            </div>
            <div className={styles.rightSideOfContainer}>
                <FooterNav/>
            </div>
        </div>
    )
}

export default Footer