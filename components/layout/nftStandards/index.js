import React from "react";
import styles from './style.module.css'

import Navigator from '../../navigation/navigation'
import Footer from '../../footer/index'
import HeadTitle from "../../text/head-title";
import TextTitle from "../../text/text-title";

function NftStandards(){
    return(
        /* Container */
        <div className={styles.container}>
            {/* Navigator */}
            <div className={styles.navigator}>
                <Navigator />
            </div>
            {/* Text Container */}
            <div className={styles.textContainer}>
                {/* Main Header */}
                <HeadTitle className={styles.mainHeader} bold>NFT Community Standards </HeadTitle>
                    {/* Content */}
                    <TextTitle className={styles.content}>
                        While blockchain records such as NFTs are nearly impossible to forge, there are many properties of NFTs that 
                        easily make them confusing and open for misinterpretation. Without standards, the industry is open to abuse of
                        the technology which can lead to confusion and mistrust. In order for the technology to establish its usefulness
                        and value, standards have been created by Ownerfy to protect both the creators and consumers of NFTs.
                    </TextTitle>
                    <TextTitle>
                        To collaborate on NFT standards, industry leaders are invited to join with Ownerfy to 
                        help build the NFT Standards Community.
                    </TextTitle>
                
                    <TextTitle>
                        Ownerfy has identified six common NFT problems, best practices, and questions you should ask before minting an NFT.
                    </TextTitle>

                <HeadTitle className={styles.problems} bold>
                    Problem 1. No Publicly Available Proof of Data Integrity
                </HeadTitle>
                    <HeadTitle className={styles.asks} bold>
                        Why is this a problem in terms of usefulness and value?
                    </HeadTitle>
                        <TextTitle><span>Creators:</span> 
                            Creators might release an NFT and then the platform changes the metadata url or stops serving 
                            their content. This would devalue the NFT.
                        </TextTitle>
                        <TextTitle><span>Consumers :</span> 
                            should also check to see that a platform saves metadata such as a digital signature of the data or 
                            uses IPFS or both, on the blockchain.
                        </TextTitle>

                    <HeadTitle className={styles.asks} bold>What should you do to check to see if this is covered?</HeadTitle>
                        <TextTitle><span>Creators </span> 
                            should check to see that a platform saves metadata such as a digital signature of the data (hash) or uses 
                            IPFS or both, on the blockchain.
                        </TextTitle>
                        <TextTitle>
                            Many NFTs are purchased and there is no proof of the data integrity. Most NFTs today have been created 
                            according to the ERC-721 and ERC-1155 standards. While outlining the bare minimum functionality of non-
                            fungible blockchain tokens, these standards omit essential data necessary to create a link between the tokens 
                            themselves and the digital art, music, or other property. Without this essential data it is impossible to know, 
                            without external information, whether one token represents for example a painting, and another represents a written document.
                        </TextTitle>
                        <TextTitle>
                            For the vast majority of NFTs today the external data that defines what the token is supposed to represent is 
                            saved on the blockchain only as a centralized web link, such as www.mytokensite.com/token-meta-data/10. 
                            Several problems can occur with this method. The website can go offline. The site owner could stop paying their 
                            bill or the website could return an error. Another problem is a malicious token site could change the token-
                            related data returned from the URL from day to day. Since the data is not on the blockchain there is no guarantee 
                            the information that defines the NFT remains the same over time. Any NFTs created this inferior way would be 
                            impossible to rely upon for provenance, legal evidence, or financial purposes.
                        </TextTitle>
                        <HeadTitle className={styles.asks} bold>
                            Hash Data is on the Blockchain To Validate Data Consistency How can you make sure?
                        </HeadTitle>
                        <TextTitle>
                            The easiest way to ensure that lined data does not change over time is to make use of the IPFS. IPFS links are 
                            guaranteed to return the same content regardless of where they are served from, with the exception of directory 
                            links, which may have modified content. If an IPFS link is used for the metadata then it can be assured to not 
                            change over time. However, this does not account for the integrity of the image. An image link is embedded in the 
                            metadata returned by the metadata link. If the image link is a non-IPFS link then the image can still be changed 
                            over. In order to guarantee the image also does not change, it’s link must also be IPFS, or the digital signature of 
                            the image (hash) must also be stored on the blockchain. If both the metadata is stored as an IPFS link and the 
                            image is saved in the blockchain both may be evaluated independently, which has greater integrity than using 
                            one method alone.
                        </TextTitle>
                        <TextTitle><span>Problems with IPFS. </span> 
                            An IPFS link will stay live and active as long as a server somewhere in the world maintains 
                            that data. This requires a commitment by a central entity of pinning service such as Pinata.cloud. If this data were 
                            to stop being served the data would no longer be availabe on IPFS. Anyone can choose pick up and serve the 
                            data, but if no party is available to serve the data it may be lost forever. This is why the absolute safest place to 
                            store data, such as an image hash is on the blockchain itself.
                        </TextTitle>
                    <HeadTitle className={styles.problems} bold>Problem 2. Creators Do Not Use Addresses Consistently</HeadTitle>
                        <HeadTitle className={styles.asks} bold>Why is this a problem?</HeadTitle>
                            <TextTitle><span>Creators: </span> 
                                If creators don’t use the same address their customers will be confused and counterfeiters will be able 
                                to more easily forge NFTs in their name.
                            </TextTitle>
                            <TextTitle><span>Consumers: </span> 
                                Consumers can’t be sure they are receiving work from the same creators.
                            </TextTitle>
                            <HeadTitle className={styles.asks} bold>What should you do to check to see if this is covered?</HeadTitle>
                            <TextTitle><span>Creators </span> 
                                should try to use the same Ethereum or other platform address on multiple platforms.
                            </TextTitle>
                            <TextTitle><span>Consumers </span> 
                                should check that a platform has verified a creator or should check against a 3rd party list of known 
                                creator addresses. The list currently doesn’t exist.
                            </TextTitle>
                            <TextTitle>
                                For each NFT there is one source address that, according to the specification, is considered to be the creator of 
                                the NFT. Up until now there has been a disparate effort to link creator Ethereum addresses to the creators they 
                                are intended to belong to. Because of this flaw one creator can release NFTs under several Ethereum addresses 
                                and it is up to the community to divine whether NFTs both in fact belong to the same creator. There is no reliable 
                                source of information to describe which addresses belong to which creators.
                            </TextTitle>
                            <TextTitle>
                                To further compound this problem sometimes we have publishers who release several artists from the same 
                                address. In this situation there is no link to the original creator and it’s up to the community to keep track, “as 
                                common knowledge”, which publisher addresses their content creators tend to use. This also opens the door for 
                                another kind of hack, which is the ‘sleep mint’. A sleep mint is a minting that appears to come from an artist but 
                                was actually minted by another party.
                            </TextTitle>
                            <TextTitle><span>Best Practice: </span> 
                                Creators Use The Same Addresses to Create NFTs
                            </TextTitle>
                            <TextTitle>
                                Platforms should maintain lists of creators and if possible cross check those lists between each other. This will 
                                make it easier to identify creators falsely claiming ownership. Creators should release content consistently using 
                                as few publicly known blockchain addresses as possible and also try to avoid publishers that do not mint their 
                                work on to a sole dedicated address. If multiple platforms are used it’s best to try and use the same address 
                                across each platform.
                            </TextTitle>
                        
                        <HeadTitle className={styles.problems} bold>Problem 3. False Provenance</HeadTitle>
                            <HeadTitle className={styles.asks} bold>Why is this a problem?</HeadTitle>
                                <TextTitle><span>Creators: </span> 
                                    can be easily copied.
                                </TextTitle>
                                <TextTitle><span>Consumers: </span> 
                                    could buy NFTs from a creator claiming to be someone else, making the NFT worth less or nothing.
                                </TextTitle>
                            <HeadTitle className={styles.asks} bold>What should you do to check to see if this is covered?</HeadTitle>
                                <TextTitle>Creators should try to be added to a list of verified creators either on a platform or by a 3rd party service.</TextTitle>
                                <TextTitle>Consumers should check that an NFT was created by an official address or creator that is verified by a platform.</TextTitle>
                                <TextTitle>
                                To date there is nothing preventing anyone from uploading any piece of art or source material to the internet and 
                                creating an NFT that links to it. As such it is up to the community to evaluate source material as best as it can and 
                                identify when content does not appear to belong to the creator of the NFT. False content can lead many to 
                                believe that an NFT is theirs to sell or even to confuse the marketplace enough, resulting in inability to identify 
                                the original source.
                                </TextTitle>
                                <TextTitle><span>Best Practice: </span> 
                                    Platform Creators Monitoring the Creators to Screen Out Bad Actors
                                </TextTitle>
                                <TextTitle>
                                    It’s very difficult to evaluate if a given creator has the rights to publish the content they use for NFTs. It’s up to 
                                    platforms to help the community by indicating known publishers and publishers that may have falsely identified 
                                    themselves in the past
                                </TextTitle>
                        <HeadTitle className={styles.problems} bold>Problem 4. Rug Pulls</HeadTitle>
                            <HeadTitle className={styles.asks} bold>Why is this a problem?</HeadTitle>
                                <TextTitle><span>Creators: </span> 
                                    might think that features of their NFT are always stable.
                                </TextTitle>
                                <TextTitle><span>Consumers: </span> 
                                    might buy an NFT believing they have full rights and it will not change.
                                </TextTitle>
                            <HeadTitle className={styles.asks} bold>What should you do to check to see if this is covered?</HeadTitle>
                                <TextTitle><span>Creators: </span> 
                                    should check the smart contract or have it reviewed by an expert to see if the URLs can be changed, the 
                                    contract can be paused or other 'administrative' features exist that they are not aware of.
                                </TextTitle>
                                <TextTitle><span>Purchasers : </span> 
                                    should check a review of the smart contract.
                                </TextTitle>
                                <TextTitle>
                                    Certain functionality can be built into smart contracts that can freeze transfers, transfer without owner consent or 
                                    change the content of the NFT. Sometimes these functions are necessary during an early sale phase to enure 
                                    there are no problems. Sometimes they are necessary for specific project functionality and made known. 
                                    Sometimes the intention is to release control. Sometimes the controls are nefarious and in these instances smart 
                                    contract code is probably not visible on etherscan.
                                </TextTitle>
                                <TextTitle><span>Best Practice: </span> 
                                    Smart contract source code should be published and if administrative rights are granted they 
                                    should be renounced at some point unless it is publicly part of the plan to always be under 3rd party control.
                                </TextTitle>
                                <TextTitle>
                                    NFT creators should always publish source code and that code should grant ultimate power to the 
                                    owners of the NFTs. Functions like pausing, setBaseUri, and built in transfer approvals create back doors and control over nft 
                                    properties. If these functions are necessary it should be explained or there should be a plan to renounce these 
                                    administrative powers when they are no longer necessary.
                                </TextTitle>

                        <HeadTitle className={styles.problems} bold>Problem 5. Poor Source Material - Generations Removed from the Original</HeadTitle>
                            <HeadTitle className={styles.asks} bold>Why is this a problem?</HeadTitle>
                                <TextTitle><span>Creators </span> 
                                    might create an NFT but it is not the quality level the customers need.
                                </TextTitle>
                                <TextTitle><span>Consumers </span> 
                                    might buy an NFT but the quality is not suitable for their needs.
                                </TextTitle>
                            <HeadTitle className={styles.asks}>What should you do to check to see if this is covered?</HeadTitle>
                                <TextTitle><span>Creators </span> 
                                    - If the NFT is digital media then it should be the highest quality version of that media. If the NFT 
                                    represents something physical then the metadata and description should be the best possible image and 
                                    description.
                                </TextTitle>
                                <TextTitle><span>Purchasers </span> 
                                    should review the quality of the NFT.
                                </TextTitle>
                                <TextTitle>
                                    Depending on what an NFT is intended to represent, the source material may affect its value. If an NFT is 
                                    intended to represent art then the image included should be as close to the original work as is possible. If an NFT 
                                    is intended to represent a physical painting then the included image should be of high enough quality to 
                                    effectively identify that unique painting. If an NFT is intended to represent original music then a version of the 
                                    music that most closely represents the piece should be linked to. Ultimately an NFT represents the media linked 
                                    to by the NFT more so than anything else. A customer can buy an NFT believing it represents an original work of 
                                    art, but if the image is a derivative work and better source material exists then an NFT based on the better source 
                                    material will always be more representative of the source material. While the community accepts the most 
                                    accurate source material as the most authentic NFT, there are no accepted standards, leading to confusion from 
                                    NFT creators and consumers.
                                </TextTitle>
                                <TextTitle><span>Best Practice: </span> 
                                    NFT creators should use source material that best and most accurately represents the media or subject they are 
                                    attempting to embody. If it is an original digital work then the intended work released by the artist should be 
                                    used as the source material. If it is a physical object then a high-resolution photograph from an encompassing 
                                    angle should be used. If it is a piece of music then best quality recording or original source file should be used.
                                </TextTitle>
                        
                        <HeadTitle className={styles.problems} bold>Problem 6. Lack of Existence of the Token (Lazy Minting)</HeadTitle>
                            <HeadTitle className={styles.asks} bold>Why is this a problem?</HeadTitle>
                                <TextTitle><span>Creators </span> 
                                    might think they have created an NFT but the platform is misleading and it is not on the blockchain. The 
                                    provenance can also be lost if it is on a shared smart contract.
                                </TextTitle>
                                <TextTitle><span>Consumers </span> 
                                    might buy an NFT and believe that the NFT already exists.
                                </TextTitle>
                            <HeadTitle className={styles.asks} bold>What should you do to check to see if this is covered?</HeadTitle>
                                <TextTitle><span>Creators </span> 
                                    should check the minting policy of the platform and if they expect it to be on the blockchain they should 
                                    see an etherscan transaction for it.
                                </TextTitle>
                                <TextTitle><span>Consumers </span> 
                                    - After a Consumer buys an NFT they should be able to see an etherscan transaction for it.
                                </TextTitle>
                                <TextTitle>
                                    It’s becoming increasingly common to not identify whether or not an NFT exists on the blockchain. For some NFT 
                                    creators this matter is irrelevant because it only becomes important if the NFT needs to be transferred to a buyer. 
                                    This becomes a problem when creators believe they are documenting the existence of certain content on the 
                                    blockchain, but in fact are not. It is not always made clear by platform providers whether these tokens have been 
                                    minted to the blockchain or not. These tokens can go by various names such as ‘lazy minted’ or ‘magic minted’ 
                                    tokens. Creators and customers may not always understand they are not dealing with a blockchain product. A 
                                    token that is not yet on the blockchain does not have the added authenticity and ultimate security the blockchain 
                                    provides. Also, sometimes the mint is first sent to the buyer and if this happens on a shared smart contract the 
                                    provenance is lost.
                                </TextTitle>
                                <TextTitle><span>Best Practice: </span> 
                                    It should be made very clear by platform providers when an NFT is created, whether that is at the 
                                    time of sale or some other time. This will avoid confusion from content creators and allow them to better define 
                                    the utility of their NFT collection.
                                </TextTitle>

                        <HeadTitle className={styles.problems} bold>Problem 7. Published Source Code and Upgradeable Smart Contracts</HeadTitle>
                            <HeadTitle className={styles.asks} bold>Why is this a problem?</HeadTitle>
                                <TextTitle><span>Creators </span> 
                                    Might think their NFT smart contract will never change and always function the same way. If a contract 
                                    is upgradeable almost everything about the NFT contract may change, including who has permission to transfer 
                                    the token. If there is no source code it's impossible to know if there are secret functions or if the contract is 
                                    upgradebale.
                                </TextTitle>
                                <TextTitle><span>Consumers </span> 
                                    may expect their NFTs to behave the same way indefinitely. If a contract is upgraded the basic 
                                    functionality of the contract including the ability to transfer may change.
                                </TextTitle>
                            <HeadTitle className={styles.asks} bold>What should you do to check to see if this is covered?</HeadTitle>
                                <TextTitle><span>Creators </span> 
                                    should check if the source code is published and key words like "UpgradeabilityProxy" and "Proxy" are 
                                    missing from the source code. Visit the contract's page on etherscan and check the "contract" tab and then "code" 
                                    tab. There should be visible source code and not random strings. 
                                </TextTitle>
                                <TextTitle><span>Consumers </span> 
                                    should check if the source code is published and key words like "UpgradeabilityProxy" and "Proxy" 
                                    are missing from the source code. Visit the contract's page on etherscan and check the "contract" tab and then 
                                    "code" tab. There should be visible source code and not random strings.
                                </TextTitle>
                                <TextTitle>
                                    Without visible source code it's impossible to tell if an NFT conforms to the NFT standards or if there are any 
                                    hidden elements which may affect the way it functions. An upgradeable smart contract makes a smart contract 
                                    even more vulnerable to malicious activity. A central body governs whether the code of the contract will change. 
                                    This central body may change core features of the NFT or even break the NFT contract entirely.
                                </TextTitle>
                                <TextTitle><span>Best Practice: </span> 
                                    Platforms should avoid using upgradeable smart contracts for NFTs or decentral assets that 
                                    consumers believe are unchanging and safe from any third party or governing body. All source code for NFT 
                                    smart contracts should be published on to etherscan using etherscan verification tools for full transparency using
                                </TextTitle>
                                <TextTitle>
                                    In order for NFTs to maintain value there must be standards enforced by the community. We are composing these 
                                    standards with the intention of creating a collaboration as a community to build NFT standards we can all follow 
                                    to increase the value and usefulness of NFTs. If you’d like to join us please contact us here with the option to help 
                                    build our NFT Standards community.
                                </TextTitle>

            </div>
            {/* Footer */}
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
    )
}

export default NftStandards