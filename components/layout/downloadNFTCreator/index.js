import React from "react";
import styles from './style.module.css'

import Navigator from '../../navigation/navigation'
import HeadTitle from "../../text/head-title";
import TextTitle from "../../text/text-title";
import GooglePlayStore from '../../../Photos/google-play-store.png'
import AppStore from '../../../Photos/app-store.png'
import Image from 'next/image'

function Layout(){
    return(
        <div className={styles.container}>
            {/* Navigator */}
            <div className={styles.navigation}>
                <Navigator/>
            </div>
            {/* Body Side */}
            <div className={styles.body}>
                {/* Left Side */}
                <div className={styles.leftSide}>
                    {/* Header */}
                    <HeadTitle bold>
                        Download Ownable-NS NFT<br/>
                        Creator
                    </HeadTitle>
                </div>
                {/* Right Side */}
                <div className={styles.rightSide}>
                    {/* Container */}
                    <div className={styles.rightSideContainer}>
                        {/* Top Side Container */}
                        <div className={styles.topTextContainer}>   
                            {/* Ownable NS description */}
                            <TextTitle><span>Ownable-NS </span>
                                Mobile App is used to create and view Semi-Fungible NFTs for artwork, 
                                merchandise, tickets, coupons, and more! All accounts are exportable to MetaMask wallet.
                            </TextTitle>
                            {/* Note*/}
                            <TextTitle><span>Note:</span>
                                Some functionality is only available to Android users
                            </TextTitle>
                            {/* NFT Description */}
                            <TextTitle>
                                The NFTs you generate are authentication and ownership records for your digital creations
                                and physical goods like paintings or designer shoes. Records are backed up on the 
                                blockchain and impossible to counterfeit. All records can be tracked back to the original 
                                creator. Your blockchain records are 100% secured by your digital keys and identity. NFTs are
                                the world's most secure way to provide authenticity of goods, prevent counterfeiting and 
                                provide proof of ownership. Use the links below to download the apps and start creating 
                                NFTs today:
                            </TextTitle>
                        </div>
                        {/* Center container */}
                        <div className={styles.middleImageContainer}>
                            {/* Google Play Store */}
                            <a className={styles.googlePlayStoreLink}>
                                {/* Google Play Store Image */}
                                <Image
                                       src={GooglePlayStore}
                                       alt='googlePlayStore'
                                       className={styles.googlePlayStoreImage}
                                       height={71.009}
                                       width={240}
                                       />
                            </a>
                            {/* App Store */}
                            <a className={styles.appStoreLink}>
                                {/* App Store Image */}
                                <Image
                                       src={AppStore}
                                       alt='appStore'
                                       className={styles.appStoreImage}
                                       height={71.009}
                                       width={240}
                                       />
                            </a>
                        </div>
                        {/* Bottom Side Container */}
                        <div className={styles.bottomTextContainer}>
                            {/* Ownabler NS Creator */}
                            <TextTitle><span>Ownable NFT Creator </span>
                                mobile app allows you to:
                            </TextTitle>
                           {/* Efficient Attribute List*/}
                            <ul className={styles.mobileAppList}>
                                <li>Create an inventory of your digital and physical items</li>
                                <li>Preserve the creator information and the ownership history</li>
                                <li>Validate authenticity of merchandise by checking its source</li>
                                <li>Supports digital assets created on other platforms like:
                                    {/* Playform list */}
                                    <ul className={styles.platformList}>
                                        <li>OpenSea</li>
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
                            {/* Ownable NS NFT Generator attribute*/}
                            <div className={styles.features}>
                                <TextTitle><span>Ownable NS NFT Generator</span>features:</TextTitle>
                                <ul>
                                    <li>Support for ERC721 or ERC1155 digital assets</li>
                                    <li>Ownership integrity - you, the creator, own your private keys</li>
                                    <li>Opportunity to trade created NFTs on OpenSea and other trading platforms</li>
                                </ul>
                                <TextTitle>Tokens minted by your address are unique in all the world and can only be created by you and you alone.</TextTitle>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout