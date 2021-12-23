import React from "react";
import styles from './style.module.css'

import Navigator from '../../navigation/navigation'
import Footer from '../../footer/index'
import HeadTitle from "../../text/head-title";
import TextTitle from "../../text/text-title";
import FooterSide from "../../footer/index"

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

                                    <p>
                                        <strong>Consumers </strong>
                                        should also check to see that a platform saves metadata such as a digital signature of 
                                        the data or uses IPFS or both, on the blockchain.
                                    </p>

                                    <p>
                                    Many NFTs are purchased and there is no proof of the data integrity. Most NFTs today have been 
                                    created according to the ERC-721 and ERC-1155 standards. While outlining the bare minimum functionality 
                                    of non-fungible blockchain tokens, these standards omit essential data necessary to create a link between 
                                    the tokens themselves and the digital art, music, or other property. Without this essential data it is 
                                    impossible to know, without external information, whether one token represents for example a painting, 
                                    and another represents a written document.
                                    </p>

                                    <p>
                                    For the vast majority of NFTs today the external data that defines what the token is supposed to represent 
                                    is saved on the blockchain only as a centralized web link, such as www.mytokensite.com/token-meta-data/10. 
                                    Several problems can occur with this method. The website can go offline. The site owner could stop paying 
                                    their bill or the website could return an error. Another problem is a malicious token site could change 
                                    the token-related data returned from the URL from day to day. Since the data is not on the blockchain 
                                    there is no guarantee the information that defines the NFT remains the same over time. Any NFTs created 
                                    this inferior way would be impossible to rely upon for provenance, legal evidence, or financial purposes.  
                                    </p>

                                    <p>
                                        <strong>Best practice</strong>
                                        : Hash Data is on the Blockchain To Validate Data Consistency How can you make sure?
                                    </p>

                                    <p>
                                    The easiest way to ensure that lined data does not change over time is to make use of the IPFS. 
                                    IPFS links are guaranteed to return the same content regardless of where they are served from, 
                                    with the exception of directory links, which may have modified content. If an IPFS link is used 
                                    for the metadata then it can be assured to not change over time. However, this does not account 
                                    for the integrity of the image. An image link is embedded in the metadata returned by the metadata 
                                    link. If the image link is a non-IPFS link then the image can still be changed over. In order to 
                                    guarantee the image also does not change, it’s link must also be IPFS, or the digital signature of 
                                    the image (hash) must also be stored on the blockchain. If both the metadata is stored as an IPFS 
                                    link and the image is saved in the blockchain both may be evaluated independently, which has greater 
                                    integrity than using one method alone.
                                    </p>
                                </main>
                            </div>
                        </div>
                    </div>
                    <FooterSide /> 
                </div>
            </div>
        </div>
    )
}

export default NftStandards

/*



*/