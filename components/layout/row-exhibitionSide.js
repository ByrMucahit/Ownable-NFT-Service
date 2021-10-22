import React from "react";
import styles from './row-exhibitionSide.module.css'

import Photo from '../photo/index'
import HeadTitle from '../text/head-title'
import TextTitle from '../text/text-title'
import MintButton from '../frame/button-mintButton'

function Exhibition({ Header, Text, Owner, src="https://ownerfy.com/jpandfriends"}){
    return (
        <article className={styles.container}>
            {/* Text Side From Exhibition side */}
            <div className={styles.advert}>  
                    {/* Header Side */}
                
                    <HeadTitle bold>HIGHER QUALITY NFTs</HeadTitle>
                    <hr/>
               
                    {/* Text Side */}
                
                    <a>
                        <TextTitle bold>Now Minting: Chic-A-Dees,First NFTs to Generate EGGS Tokens</TextTitle>
                    </a>
               
                    {/* Button Side */}
                
                    <MintButton className={styles.mintButton}>MINT CHIC-A-DEE NFT</MintButton>
                
            </div>

            {/* Photos Side */}
            <div className={styles.photoExhibition}>
                {/* Photos */}
                <div className={styles.photos}>
                    <Photo/>
                    <Photo src="https://firebasestorage.googleapis.com/v0/b/receiptcoin-receiptchain-de560.appspot.com/o/website%2Fchicadees%2Fcashcows.png?alt=media&token=60ef4aa7-42c9-47de-82a6-b719953749c3"/>
                </div>
                {/* Owner Of Photos */}
                <a className={styles.owner}>
                    <p className={styles.subOwner}>
                        <span>My </span>
                        Owner
                    </p>
                </a>
            </div>
        </article>
    )
}

export default Exhibition