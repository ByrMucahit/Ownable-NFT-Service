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
                            <p 
                                className={styles.quoHeaderText} 
                                bold
                                >Trade   
                                <span className={styles.Span}>
                                       Ownable-NS 
                                </span>
                                created on marketplace platforms.
                            </p>

                            <p className={styles.quoMiddleText} >
                                Trade Ownable-NS created on marketplace platforms.
                            </p>
                        </div>
                    
                        <div className={styles.quoIcons}>
                            <Icon.RaribleLogo className={styles.quoRarible}/>
                            <Icon.OpenseaLogo className={styles.quoOpensea}/>
                        </div>
                    </div>
                </div>
            </div>  
       
    )
}

export default Quotation