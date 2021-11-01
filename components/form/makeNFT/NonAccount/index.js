import React from "react";
import HeadTitle from "../../../text/head-title";

import styles from './style.module.css'
import Input from '../../../input/text'
import CheckInput from '../../../input/check'
import ImageButton from "../../../button/base/image"
import DropDownInput from '../../../button/dropdown/index'
import Button from "../../../button/base/index";

function MakeNFTForm(){
    return(
                /* Container */
        <div className={styles.container}>
            {/* Login Link */}
            <div className={styles.linkLogin}>
                <HeadTitle 
                className={styles.link} 
                bold
                >
                    Already have an account?(Log in here)
                </HeadTitle>
            </div>
            {/* Personel Description */}
            <div className={styles.name}>
                {/* First Name */}
                    <Input/>
                {/* Last Name */}
                    <Input/>   
                
            </div>
                {/* Communication */}
            <div className={styles.communicateInfo}>
                {/* Email Input */}
                <div className={styles.email}>
                    <Input big />                
                </div>
                {/* Username Input */}
                <div className={styles.userName}>
                    <Input big />
                </div>
                {/* Phone Input */}
                <div className={styles.contactPhone}>
                    <Input big />
                </div>
            </div>
            {/* Passwords Side */}
            <div className={styles.passwords}>
                {/* Password */}  
                    <Input />
                {/* Confirm Password */}
                    <Input />      
            </div>
            {/* Agreed Button */}
            <div className={styles.checkButton}>
                <CheckInput className={styles.checkBtn} >I have read and agree to terms of advice.</CheckInput>
            </div>
            {/* Media Side */}
            <div className={styles.media}>
                {/* Name Of Token */}
                <div className={styles.nameOfToken}>
                    <Input big />
                </div>
                {/* Media Input */}
                <div className={styles.mediaInput}>
                    <ImageButton>UPLOAD FILE</ImageButton>
                    <HeadTitle  className={styles.subWarning}>Any image file or animated gif accepted up to 10mb file size.</HeadTitle>
                </div>
                {/* Type Of Transaction */}
                <div className={styles.typeOfProcess}>
                    <DropDownInput/>
                </div>
                {/* Description Input */}
                <div className={styles.description}>
                    <Input big />
                </div>
                {/* Cost Side */}
                <div className={styles.cost}>
                    <HeadTitle className={styles.fee}>NFT Minting FEE</HeadTitle>
                    <HeadTitle className={styles.feeSpan} bold>$89.95</HeadTitle>
                </div>
            </div>
            {/* Mint NFT Button */}
            <div className={styles.mintNFT}>
                <Button className={styles.nftButton} border>MINT NFT</Button>
            </div>
        </div>
    )
}

export default MakeNFTForm;