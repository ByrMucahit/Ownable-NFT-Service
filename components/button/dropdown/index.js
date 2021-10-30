import React from "react";
import styles from './style.module.css'
import HeadTitle from '../../text/head-title'
function DropDownMenu(){
    return (
        <label for='subOptions'> <HeadTitle className={styles.header}>What type of asset is this?</HeadTitle><br/>
            <select id='subOptions' name='options' className={styles.options}>
            <option value="NFT" className={styles.option}>NFT(Non Fungible Token)</option>
            <option value="FT" className={styles.option}>FT(Fungible Token)</option>
            </select>
        </label>
    )
}


export default DropDownMenu