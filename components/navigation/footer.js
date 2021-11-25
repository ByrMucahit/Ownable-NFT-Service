import React from "react";
import HeadTitle from "../text/head-title";
import styles from './footer.module.css'
import {FOOTERMENU} from '../../constant'

function FooterNavigation(){
    return(
        FOOTERMENU.map((menu)=>{
           return(
               <a className={styles.Nav} size='14px'>{menu.title}</a>
           )
       })
    )
}

export default FooterNavigation