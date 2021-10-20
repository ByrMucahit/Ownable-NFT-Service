import React from "react";
import styles from './row-exhibitionSide.module.css'

import Photo from './photo/index'
import HeadTitle from './head-title'
import TextTitle from './text-title'
import MintButton from './button-mintButton'

function Exhibition({ Header, Text, Owner, src="https://ownerfy.com/jpandfriends"}){
    return (
        <article className={styles.container}>
            {/* Text Side From Exhibition side */}
            <div className={styles.advert}>  
                {/* Header Side */}
                <div className={styles.header}>
                    <HeadTitle>HIGHER QUALITY NFTs</HeadTitle>
                </div>
                {/* Text Side */}
                <div className={styles.text}>
                    <TextTitle>Text</TextTitle>
                </div>
                {/* Button Side */}
                <div className={styles.mintButton}>
                    <MintButton>Mınt CHIC-A-DEE NFT</MintButton>
                </div>
            </div>

            {/* Photos Side */}
            <div className={styles.photoExhibition}>
                {/* Photos */}
                <div className={styles.photos}>
                    <Photo/>
                    <Photo src="https://firebasestorage.googleapis.com/v0/b/receiptcoin-receiptchain-de560.appspot.com/o/website%2Fchicadees%2Fcashcows.png?alt=media&token=60ef4aa7-42c9-47de-82a6-b719953749c3"/>
                </div>
                {/* Owner Of Photos */}
                <div className={styles.owner}>
                    <p>Owner</p>
                </div>
            </div>
        </article>
    )
}

export default Exhibition