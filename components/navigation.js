import React from "react";
import styles from './navigation.module.css'
import cn from 'classnames'

import NavigationButton from './navigation-button'
import TextTitle from './text-title'
import HeadTitle from './head-title'
import FrameButton from "./frame-button";

import {HomepageOption} from './icons'

const MENU = [
    {
        key: 'make-an-nft',
        icon: '',
        title: 'Make an NFT'
    },
    {
        key: 'business-signup',
        icon: '',
        title: 'Business Signup'
    },
    {
        key: 'Subscribe-for-upcoming-drops',
        icon: '',
        title: 'Subscribe for Upcoming Drops'
    },
    {
        key: 'nft-standards',
        icon: '',
        title: 'NFT Standards'
    },
    {
        key: 'download-nft-creator',
        icon: '',
        title: 'Download NFT Creator'
    }
]

function Navigation({flat=false}){
    return (
    <nav className={styles.navigator}>
        <div className={cn(styles.mark)}>
            <HeadTitle>Ownable-NS</HeadTitle> 
        </div>

        <div className={styles.navBtn}>
        { 
            MENU.map((menu) => {
                return (
                    <NavigationButton
                    className={styles.subBtn}
                    key= {menu.key}
                    >
                    {!flat &&<TextTitle> {menu.title} </TextTitle>}
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