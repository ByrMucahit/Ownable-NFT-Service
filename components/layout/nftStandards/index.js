import React from "react";
import styles from './style.module.css'

import Navigator from '../../navigation/navigation'
import Footer from '../../footer/index'
import HeadTitle from "../../text/head-title";
import TextTitle from "../../text/text-title";

function NftStandards(){
    return(
        /* Container */
        <div id="root">
            <div className={styles.general}>
                {/* Navigator */}
                    <Navigator />
           
                {/* Text Container */}
                <div className={styles.textContainer}>
                    <div className={styles.text}>
                        <div className={styles.cssText}>
                            <div className={styles.cssTextContainer}>
                                <main className={`
                                ${styles.muiContainerRoot} 
                                ${styles.cssContainer} 
                                ${styles.muiContainerMaxWidthMd}`} >
                                    <h1 className={`
                                    ${styles.muiTypographyRoot} 
                                    ${styles.cssStandard} 
                                    ${styles.muiTypographyH1}`}
                                    >
                                        NFT Community Standards
                                    </h1>
                                    <p>
                                        While blockchain records such as NFTs are nearly impossible to forge, there are many 
                                        properties of NFTs that easily make them confusing and open for misinterpretation. Without 
                                        standards, the industry is open to abuse of the technology which can lead to confusion and 
                                        mistrust. In order for the technology to establish its usefulness and value, standards have 
                                        been created by Ownerfy to protect both the creators and consumers of NFTs.
                                    </p>
                                    <p>
                                        To collaborate on NFT standards, industry leaders are invited to join with Ownerfy to help 
                                        build the NFT Standards Community.
                                    </p>
                                    <p>
                                        Ownerfy has identified six common NFT problems, best practices, and questions you should 
                                        ask before minting an NFT.
                                    </p>
                                    <h1 className={`
                                    ${styles.muiTypographyRoot} 
                                    ${styles.cssProblem} 
                                    ${styles.muiTypographyH5}`}
                                    id="5">
                                        Problem 1. No Publicly Available Proof of Data Integrity
                                    </h1>

                                    <p>
                                        <strong>Why is this a problem in terms of usefulness and value?</strong>
                                    </p>

                                    <p>
                                        <strong>Creators</strong>
                                        : Creators might release an NFT and then the platform changes the metadata url or 
                                        stops serving their content. This would devalue the NFT.
                                    </p>

                                    <p>
                                        <strong>Consumers:</strong>
                                        : Consumers could buy an NFT and then discover the content has changed a year 
                                        from now. This would devalue the NFT.
                                    </p>

                                    <p>
                                        <strong>What should you do to check to see if this is covered?:</strong>
                                    </p>

                                    <p>
                                        <strong>Creators:</strong>
                                        : should check to see that a platform saves metadata such as a digital signature of 
                                        the data (hash) or uses IPFS or both, on the blockchain.
                                    </p>
                                </main>
                            </div>
                        </div>
               
                        </div>
                </div>
            </div>
        </div>
    )
}

export default NftStandards

/*



*/