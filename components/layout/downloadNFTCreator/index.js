import React from "react";
import styles from './style.module.css'

import Navigator from '../../navigation/navigation'
import HeadTitle from "../../text/head-title";
import TextTitle from "../../text/text-title";
import GooglePlayStore from '../../../Photos/google-play-store.png'
import AppStore from '../../../Photos/app-store.png'
import Image from 'next/image'
import Photo from "../../photo";
import FooterSide from "../../footer/index"

function Layout(){
    return(
     
            <div className={styles.container}>
                {/* Navigator */}
                    <Navigator/>
                    <div className={styles.cssConteiner}>
                        <div className={styles.cssContainerContent}>
                            <div className={styles.cssDivision}>
                                <div className={styles.cssDivisionContent}>
                                    <p className={styles.cssLeftSide}>Download Ownable NFT Creator</p>
                                </div>
                                <div className={styles.rightSide}>
                                    <div className={styles.cssRightSide}>
                                        <p>
                                           <b>Ownerfy Mobile App </b> 
                                            is used to create and view Semi-Fungible NFTs for artwork, merchandise, tickets, coupons, and more! All accounts are exportable to MetaMask wallet.
                                        </p>

                                        <p>
                                            Note: Some functionality is only available to Android users
                                        </p>

                                        <p>
                                            The NFTs you generate are authentication and ownership records for 
                                            your digital creations and physical goods like paintings or designer shoes. 
                                            Records are backed up on the blockchain and impossible to counterfeit. All 
                                            records can be tracked back to the original creator. Your blockchain records 
                                            are 100% secured by your digital keys and identity. NFTs are the world's most 
                                            secure way to provide authenticity of goods, prevent counterfeiting and provide 
                                            proof of ownership. Use the links below to download the apps and start creating 
                                            NFTs today:
                                        </p>

                                        <div className={styles.cssIconApp}>

                                                <Photo src="https://ownerfy.com/img/app-store-badge.svg" alt={"app store badge"} mark="true" className={styles.cssMarkLink}/>
                                          
                                                <Photo src="https://ownerfy.com/img/google-play-store-badge.svg" alt={"google play store badge"} mark="true"/>
                                        
                                        </div>

                                        <div>
                                            <p>
                                               <b>Ownerfy NFT Creator</b> 
                                               mobile app allows you to:
                                            </p>
                                            <ul>
                                                <li>Create an inventory of your digital and physical items</li>
                                                <li>Preserve the creator information and the ownership history</li>
                                                <li>Validate authenticity of merchandise by checking its source</li>
                                                <li>Supports digital assets created on other platforms like:
                                                    <ul>
                                                        <li>Opensea</li>
                                                        <li>MLB Digital Collectibles</li>
                                                        <li>Enjin Assets</li>
                                                        <li>CryptoKitties</li>
                                                        <li>BasketBall Digital Collectibles</li>
                                                        <li>MyCryptoHeros</li>
                                                        <li>Decentraland</li>
                                                        <li>0xUniverse</li>
                                                        <li>and many more</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>
                                                <b>Ownerfy NFT Generator</b>
                                                features:
                                            </p>
                                            <ul>
                                                <li>Support for ERC721 or ERC1155 digital assets</li>
                                                <li>Ownership integrity - you, the creator, own your private keys</li>
                                                <li>Opportunity to trade created NFTs on OpenSea and other trading platforms</li>
                                            </ul>
                                            <p>
                                                Tokens minted by your address are unique in all the world and can only be created by you and you alone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <FooterSide/>
                </div>
            </div>
    
    )
}

export default Layout