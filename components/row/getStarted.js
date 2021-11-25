import React from "react";
import HeadTitle from "../text/head-title";
import styles from './getStarted.module.css'
import GetStartedButton from '../frame/getStartedButton'
import Photo from "../photo";
import TextTitle from "../text/text-title";

function GetStarted(){

    return (
        /* Container */ 
        <div className={styles.getStartedContainer}>
            <p className={styles.header}>
                <span className={styles.span}>Ownable-NS </span> 
                for Business
            </p>
           
            <div className={styles.content}>
                {/* Image */}
                <img className={styles.Image} src="https://ownerfy.com/img/home/suitcase.jpg" width='345px' height='207.986' />

                {/* Container Text Side*/ }
                <div className={styles.getStartedTextSide}>
                    {/* Header */}
                    <p  className={styles.nftExplain}><span className={styles.Span}>NFT QR codes </span> 
                    authenticate, add value and prevent <br/> 
                    counterfitting of goods.</p>
               
                    <p className={styles.nftCreator}>Create NFTs for your business, large or small.</p>
               
                    {/* Button */}
                    <GetStartedButton 
                    className={styles.getStartedButton} 
                    border
                    >
                        <p className={styles.GetStartedButtonText} 
                        bold
                        >
                            GET STARTED
                        </p>
                    </GetStartedButton>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;