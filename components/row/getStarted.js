import React from "react";
import HeadTitle from "../text/head-title";
import styles from './getStarted.module.css'
import GetStartedButton from '../frame/getStartedButton'
import SuitCase from '../../Photos/suitcase.jpg'
import Photo from "../photo";
import TextTitle from "../text/text-title";

function GetStarted(){

    return (
        /* Container */ 
        <div className={styles.getStartedContainer}>
            <TextTitle className={styles.header}>
                <span>Ownable-NS </span> 
                for Business
            </TextTitle>
           
            <div className={styles.content}>

             {/* Image */}
            <Photo className={styles.Image} src="https://ownerfy.com/img/home/suitcase.jpg" width='345px' height='207.986' />

            {/* Container Text Side*/ }
            <div className={styles.getStartedTextSide}>
                    {/* Header */}
                    <TextTitle  className={styles.nftExplain}><span className={styles.Span}>NFT QR codes </span> 
                    authenticate, add value and prevent <br/> 
                    counterfitting of goods.</TextTitle>
               
                    <TextTitle className={styles.nftCreator}>Create NFTs for your business, large or small.</TextTitle>
               
                    {/* Button */}
                    <GetStartedButton 
                    className={styles.getStartedButton} 
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
        </div>
    )
}

export default GetStarted;