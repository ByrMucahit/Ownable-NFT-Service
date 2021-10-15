import React from "react";
import styles from './navigation.module.css'

import NavigationButton from './navigation-button'


const MENU = [
    {
        key: 'mark',
        icon: '',
        title: 'OWNABLE-NS',

    },
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
    <nav>
        { 
            MENU.map((menu) => {
                const showElement = menu.icon.length > 0
                return (
                    <NavigationButton
                    key= {menu.key}
                    icon= {menu.icon}
                    >
                        <p>menu.title</p>
                    </NavigationButton>
                )
            })
        }
    </nav>
    )
}

export default Navigation;