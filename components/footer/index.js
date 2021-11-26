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
                                <a target="_blank" rel="noopner noreferrer" href='https://twitter.com/byr_mucahit'><Icon.Twitter/></a>
                                <a target="_blank" rel="noopner noreferrer" href='https://www.facebook.com/mucahit.bayar.796'><Icon.Facebook/></a>
                                <a target="_blank" rel="noopner noreferrer" href='https://www.youtube.com/'><Icon.Youtube /></a>
                                <a target="_blank" rel="noopner noreferrer" href='https://www.instagram.com/mucahit.byrr/'><Icon.İnstagram/></a>
                                <a target="_blank" rel="noopner noreferrer" href='https://www.linkedin.com/in/m%C3%BCcahit-bayar-038000200/'><Icon.Linkdn /></a>
                                <a target="_blank" rel="noopner noreferrer" href='https://mail.google.com/mail/u/0/#inbox'><Icon.Mail/></a>
                                <a target="_blank" rel="noopner noreferrer" href='https://twitter.com/byr_mucahit'><Icon.Discord/></a>
                                {/* Text from left side */}
                                <p className={styles.joinText} size='12px'>Join the community of #ownable-NS</p>
                            </div>
                            {/* Navigator from right side */}
                            <div className={styles.footerMenu}>
                                <FooterSide className={styles.footer}/>
                            </div>
                        </div>
                    </div>
                    {/* Copy from left side */}
                    <p className={styles.copyText} size='12px'>Copyright © 2021 Ownable-NS</p>
                </div>
            </div>
        </div>
    )
}

export default Footer