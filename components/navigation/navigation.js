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
    <header className={styles.header}>  
        <div className={styles.navigator}>
            <NavigationButton href='/' className={styles.comp}>Ownable-NS</NavigationButton>
        {/* Mark Side */}
        <div className={cn(styles.mark)}>   
            {/* Link Side */}
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
    </div>
    </header>
    )
}

export default Navigation;