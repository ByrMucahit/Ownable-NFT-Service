import React from "react";
import cn from 'classnames'
import * as Icon from '../icons'
import Image from 'next/image'
import Opensea from "../../Photos/opensea-logo.svg"
import Rariable from "../../Photos/rarible-logo.svg"
import styles from './quotation.module.css'
import TextTittle from "../text/text-title";

function Quotation(){
    return (
        <div className={styles.quo}> 
            <div className={styles.content}>
                <div className={styles.marketPlaceSide}>
                    <div className={styles.placeSide}>
                            <p 
                                className={styles.quoHeaderText} 
                                bold
                                > 
                                <span className={styles.Span}>Ownable-NS </span>
                                 NFTs are traded on the largest NFT marketplaces
                            </p>

                            <p className={styles.quoMiddleText} >
                                Trade Ownable-NS created on marketplace platforms.
                            </p>
                        </div>
                    
                        <div className={styles.quoHeaderText}>
                           
                        </div>
                    </div>
                </div>
            </div>  
       
    )
}

export default Quotation