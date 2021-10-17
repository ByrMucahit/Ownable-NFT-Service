import React from "react";
import styles from './navigation.module.css'
import cn from 'classnames'

import NavigationButton from './navigation-button'
import textTitle from './text-title'
import headTitle from './head-title'
import { Facebook } from "./icons";
import FrameButton from "./frame-button";

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

function Navigation(){
    return (
    <nav className={styles.navigator}>
        <div className={cn(styles.mark)}>
            <headTitle>Ownable-NS</headTitle> 
        </div>

        <div className={styles.navBtn}>
        { 
            MENU.map((menu) => {
                const showElement = menu.icon.length > 0
                return (
                    <NavigationButton
                    key= {menu.key}
                    >
                    <textTitle> {menu.title} </textTitle>
                    </NavigationButton>
                ) })
        }
        </div>

        <div className={styles.loginButton}>
            <FrameButton>Login</FrameButton>
        </div>
    </nav>
    )
}

export default Navigation;