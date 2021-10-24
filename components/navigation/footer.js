import React from "react";
import HeadTitle from "../text/head-title";
import styles from './footer.module.css'

const MENU = [
    {   
        key: 'privacyPolicy',
        title:'Privacy Policy'

    },
    {
        key: 'tos',
        title: 'TOS',

    },
    {
        key: 'myCollection',
        title: 'My Collection'
    },
    {
        key: 'contact',
        title: 'Contact'
    }
]

function FooterNavigation(){
    return(
       MENU.map((menu)=>{
           return(
               <HeadTitle className={styles.Nav} size='14px'>{menu.title}</HeadTitle>
           )
       })
    )
}

export default FooterNavigation