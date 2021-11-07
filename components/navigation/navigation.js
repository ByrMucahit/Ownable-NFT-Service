import React from "react";
import styles from './navigation.module.css'
import cn from 'classnames'

import NavigationButton from './button'
import TextTitle from '../text/text-title'
import HeadTitle from '../text/head-title'
import FrameButton from "../frame/frameButton";

import {HomepageOption} from '../icons'

const MENU = [
    {
        key: 'make-an-nft',
        icon: '',
        title: 'Make an NFT',
        href: '/makeNft'
    },
    {
        key: 'business-signup',
        icon: '',
        title: 'Business Signup',
        href: '/businessSignUp'
    },
    {
        key: 'Subscribe-for-upcoming-drops',
        icon: '',
        title: 'Subscribe for Upcoming Drops',
        href: '/subscribeForUpcomingDrops'
    },
    {
        key: 'nft-standards',
        icon: '',
        title: 'NFT Standards',
        href: '/nftStandards'
    },
    {
        key: 'download-nft-creator',
        icon: '',
        title: 'Download NFT Creator',
        href: '/downloadNFTCreator'
    }
]

function Navigation({flat=false}){
    return (
        /* Navigator */
    <nav className={styles.navigator}>
        {/* Mark Side */}
        <div className={cn(styles.mark)}>
        <NavigationButton href='/'>Ownable-NS</NavigationButton>
        </div>
        {/* Link Side */}
        <div className={styles.navBtn}>
        { 
            MENU.map((menu) => {
                return (
                    <NavigationButton
                    className={styles.subBtn}
                    key= {menu.key}
                    href={menu.href}
                    >
                    {!flat && menu.title }
                    </NavigationButton>
                ) })
        }
        </div>

        <div className={styles.loginButton}>
            <FrameButton>Login</FrameButton>
        </div>
            {flat && <HomepageOption/>}
    </nav>
    )
}

export default Navigation;