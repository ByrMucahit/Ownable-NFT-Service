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
    <header className={`
    ${styles.muiPaperRoot} 
    ${styles.muiAppBarRoot} 
    ${styles.muiAppBarPositionAbsolute} 
    ${styles.muiAppBarColorDefault} 
    ${styles.cssHeader} 
    ${styles.muiPaperElevation}`}>  
        
        <div className={styles.navigator}>
            <NavigationButton href='/' className={styles.comp}>Ownable-NS</NavigationButton>
            {/* Mark Side */}
            <div className={styles.cssNavigator}>   
                {/* Link Side */}
                { 
                MENU.map((menu) => {
                    return (
                       <div className={`
                       ${styles.muiButtonBaseRoot} 
                       ${styles.muiListItemRoot} 
                       ${styles.cssNavigatorContent} 
                       ${styles.muiListItemGutters} 
                       ${styles.muiListItemButton}`}>
                            <NavigationButton
                                className={styles.subBtn}
                                key= {menu.key}
                                href={menu.href}
                                >
                                    {!flat && menu.title }
                            </NavigationButton>
                        </div>
                       
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