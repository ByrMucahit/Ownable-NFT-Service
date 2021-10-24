import React from "react";
import styles from './style.module.css'
import * as Icon from '../icons'
import HeadTitle from '../text/head-title'
import FooterSide from '../navigation/footer'

function Footer(){
    return(
        /* Container */
        <div className={styles.footerContainer}>
            {/* Left Side Of Footer */}
            <div className={styles.leftSideOfContainer}>
                {/* Icons Of Footer */}
                <div className={styles.Icons}>
                <Icon.Twitter/>
                <Icon.Facebook/>
                <Icon.Youtube />
                <Icon.İnstagram/>
                <Icon.Linkdn />
                <Icon.Mail/>
                <Icon.Discord/>
                </div>
                {/* Text from left side */}
                <div className={styles.join}>
                    <HeadTitle className={styles.joinText} size='12px'>Join the community of #ownable-NS</HeadTitle>
                </div>
                {/* Copy from left side */}
                <div className={styles.copy}>
                    <HeadTitle className={styles.copyText} size='12px'>Copyright © 2021 Ownable-NS</HeadTitle>
                </div>
            </div>
            {/* Navigator from right side */}
            <div className={styles.rightSideOfContainer}>
                <FooterSide className={styles.footer}/>
            </div>
        </div>
    )
}

export default Footer