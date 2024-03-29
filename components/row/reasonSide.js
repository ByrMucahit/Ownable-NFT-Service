import React from "react";
import HeadTitle from "../text/head-title";
import TextTittle from "../text/text-title";
import styles from './reasonSide.module.css'
import Photo from '../photo/index'


function ReasonSide() {

    return (
            /* Container */ 
            <div className={styles.reasonContainer}>
                <div className={styles.content}>
                    <div className={styles.reasonHeader}>
                        <TextTittle className={styles.reasonHeaderText} bold>Reasons to NFT Everything with <span className={styles.Span}>Ownable-NS</span></TextTittle>
                        <hr className={styles.Line}/>
                    </div>

                    {/* Reason Side */}
                    <div className={styles.middleContainer}>
                        <div className={styles.reasonTextSide}>
                            {/*<Reason/>*/}
                        </div>
                        {/* Image Side */}
                        <div className={styles.reastImageSide}>
                            <Photo 
                            className={styles.photo}
                            src='https://ownerfy.com/img/home/valuables.svg'
                            width='831.997px'
                            height= '138.993px'
                            height='139' 
                            alt='reasonside'
                            />
                        </div>
                    </div>

                    {/* Footer Side */}
                    <div className={styles.footerContainer}>
                        <HeadTitle className={styles.footerText} size='18px' opacity='0.6'>NFT is permanent immutable record of who owns anything of value</HeadTitle>
                    </div>
                </div>
            </div>
    )
}

export default ReasonSide