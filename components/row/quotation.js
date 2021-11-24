import React from "react";
import cn from 'classnames'
import * as Icon from '../icons'

import styles from './quotation.module.css'
import TextTittle from "../text/text-title";

function Quotation(){
    return (
        <div className={styles.quo}> 
            <div className={styles.content}>
                <div className={styles.marketPlaceSide}>
                    <div className={styles.placeSide}>
                        <div className={styles.quoHeader}>
                            <TextTittle 
                                className={styles.quoHeaderText} 
                                bold
                                >Trade  
                                <span className={styles.Span}>
                                     Ownable-NS 
                                </span>
                                created on marketplace platforms.
                            </TextTittle>
                        </div>

                        <div className={styles.quoMiddle}>
                            <TextTittle className={styles.quoMiddleText} >
                                Trade Ownable-NS created on marketplace platforms.
                            </TextTittle>
                        </div>

                        <div className={styles.quoFooter}>
                            <TextTittle 
                            className={styles.quoFooterText} 
                            >
                                You,the creator, own your private keys, therefore own your assets and are free to,<br/>
                                transfer, sell or trade NFTs anywhere on the digital marketplace.
                            </TextTittle>
                        </div>

                        <div className={styles.quoIcons}>
                            <Icon.RaribleLogo className={styles.quoRarible}/>
                            <Icon.OpenseaLogo className={styles.quoOpensea}/>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Quotation