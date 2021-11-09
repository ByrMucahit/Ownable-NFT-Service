import React from "react";
import styles from './navigation.module.css'
import cn from 'classnames'
import NavigationButton from './button'
import FrameButton from "../frame/frameButton";
import {MENU} from '../../constant'
import {HomepageOption} from '../icons'

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
            {/* Login Button */}
            <div className={styles.loginButton}>
                <FrameButton>Login</FrameButton>
            </div>
      
        
            {flat && <HomepageOption className={styles.homepageOption}/>}
    </nav>
    )
}

export default Navigation;