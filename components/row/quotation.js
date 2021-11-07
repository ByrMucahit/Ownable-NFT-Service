import React from "react";
import cn from 'classnames'
import * as Icon from '../icons'

import styles from './quotation.module.css'
import HeadTitle from "../text/head-title";

function Quotation(){
    return (
        <div className={styles.quo}> 
            <div className={styles.quoHeader}>
                <HeadTitle 
                className={styles.quoHeaderText} 
                size='26px' 
                bold
                >Trade <span className={styles.Span}>Ownable-NS </span>created on marketplace platforms.
                </HeadTitle>
            </div>

            <div className={styles.quoMiddle}>
                <HeadTitle 
                className={styles.quoMiddleText} 
                size='16px' 
                opacity='0.6' 
                bold
                >
                    Trade Ownable-NS created on marketplace platforms.
                </HeadTitle>
            </div>

            <div className={styles.quoFooter}>
                <HeadTitle 
                className={styles.quoFooterText} 
                size='16px' 
                opacity='0.6'
                >
                    You,the creator, own your private keys, therefore own your assets and are free to,<br/>
                            transfer, sell or trade NFTs anywhere on the digital marketplace.
                </HeadTitle>
            </div>

            <div className={styles.quoIcons}>
                <Icon.RaribleLogo className={styles.quoRarible}/>
                <Icon.OpenseaLogo className={styles.quoOpensea}/>
            </div>
            
        </div>
    )
}

export default Quotation