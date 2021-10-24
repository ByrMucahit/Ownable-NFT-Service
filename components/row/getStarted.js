import React from "react";
import HeadTitle from "../text/head-title";
import styles from './getStarted.module.css'
import GetStartedButton from '../frame/getStartedButton'
import SuitCase from '../../Photos/suitcase.jpg'
import Photo from "../photo";

function GetStarted(){

    return (
        /* Container */ 
        <div className={styles.getStartedContainer}>
            {/* Container Text Side*/ }
            <div className={styles.getStartedTextSide}>
                {/* Header */}
                <div className={styles.getStartedHeaderText}>
                    <HeadTitle opacity='0.8' size='26px'><span className={styles.Span}>NFT QR codes </span> 
                    authenticate, add value and prevent <br/> 
                    counterfitting of goods.</HeadTitle>
                </div>
                {/* Text */}
                <div className={styles.getStartedMainText}>
                    <HeadTitle size='20px' opacity='0.8'>Create NFTs for your business or customer at scale</HeadTitle>
                </div>
                {/* Button */}
                <div className={styles.getStartedButtonContainer}>
                    <GetStartedButton className={styles.getStartedButton} 
                    border
                    >
                        <HeadTitle className={styles.GetStartedButtonText} 
                        bold
                        >
                        GET STARTED
                        </HeadTitle>
                    </GetStartedButton>
                </div>
            </div>
            {/* Image Side */}
            <div className={styles.ImageSide}>
                <Photo className={styles.Image} src={SuitCase} width='345px' height='207.986' />
            </div>
        </div>
    )
}

export default GetStarted;