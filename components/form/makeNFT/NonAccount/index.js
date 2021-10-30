import React from "react";
import HeadTitle from "../../../text/head-title";

import styles from './style.module.css'
import Input from '../../../input/text'
import CheckInput from '../../../input/check'
import ImageButton from "../../../button/base/image"
import DropDownInput from '../../../button/dropdown/index'

function MakeNFTForm(){
    return(
        <div className={styles.container}>
            <div className={styles.linkLogin}>
                <HeadTitle size='20px' bold>Already have an account?(Log in here)</HeadTitle>
            </div>
            <div className={styles.name}>
                <div className={styles.firstName}>
                <Input/>
                </div>
                <div className={styles.lastName}>
                <Input/>   
                </div>
            </div>
            <div className={styles.communicateInfo}>
                <div className={styles.email}>
                    <Input big />                
                </div>
                <div className={styles.userName}>
                    <Input big />
                </div>
                <div className={styles.contactPhone}>
                    <Input big />
                </div>
            </div>
            <div className={styles.passwords}>
                <div className={styles.password}>
                    <Input />
                </div>
                <div className={styles.confirmPassowrd}>
                    <Input />
                </div>
            </div>
            <div className={styles.checkButton}>
                <CheckInput size='20px'>I have read and agree to terms of advice.</CheckInput>
            </div>
            <div className={styles.media}>
                <div className={styles.nameOfToken}>
                    <Input big />
                </div>
                <div className={styles.mediaInput}>
                    <ImageButton>UPLOAD FILE</ImageButton>
                    <HeadTitle size='12px'>Any image file or animated gif accepted up to 10mb file size.</HeadTitle>
                </div>
                <div className={styles.typeOfProcess}>
                    <DropDownInput/>
                </div>
                <div className={styles.description}>
                    <Input big />
                </div>
                <div className={styles.cost}>
                    <HeadTitle className={styles.fee}>NFT Minting FEE</HeadTitle>
                    <HeadTitle className={styles.feeSpan} bold>$89.95</HeadTitle>
                </div>
            </div>
        </div>
    )
}

export default MakeNFTForm;