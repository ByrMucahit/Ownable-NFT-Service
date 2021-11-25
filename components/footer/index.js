import React from "react";
import styles from './style.module.css'
import * as Icon from '../icons'
import HeadTitle from '../text/head-title'
import FooterSide from '../navigation/footer'

function Footer(){
    return(
        /* Container */
        <div className={styles.footerContainer}>
            <div className={styles.content}>
                <div className={styles.mainContainer}>
                    <div className={styles.container}>
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
                            <p className={styles.joinText} size='12px'>Join the community of #ownable-NS</p>
                  
                            {/* Navigator from right side */}
                            <div className={styles.footerMenu}>
                                <FooterSide className={styles.footer}/>
                            </div>
                            {/* Copy from left side */}
                            <p className={styles.copyText} size='12px'>Copyright © 2021 Ownable-NS</p>
                        </div>
                        
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer