import React from "react";
import styles from './exhibitionSide.module.css'

import Photo from '../photo/index'
import HeadTitle from '../text/head-title'
import MintButton from '../frame/mintButton'

function Exhibition({ Header, Text, Owner, src="https://ownerfy.com/jpandfriends"}){
    return (
        <article className={styles.container}>
            {/* Text Side From Exhibition side */}
            <div className={styles.advert}>  
                    {/* Header Side */}
                    <HeadTitle className={styles.advertHeader} size='33px' bold>CA$H Cows</HeadTitle>
                    <hr className={styles.borderLine}/>
               
                    {/* Text Side */}
                    <a>
                    <HeadTitle className={styles.subText}  size='22px' >Now Minting: Chic-A-Dees,First NFTs to Generate EGGS Tokens</HeadTitle>
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
                            <HeadTitle size='12px' bold>UPCOMING COLLECTION:</HeadTitle>
                            <HeadTitle size='12px'>J.Pierce and Friends - Hand Painted and Signed</HeadTitle>
                        </p>
                </a>          
            </div>
        </article>
    )
}

export default Exhibition