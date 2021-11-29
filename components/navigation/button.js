import React from "react"
import styles from './button.module.css'


function NavigationLink ({ children, ...props}) {
    return (
        <div className={styles.menu}>
                <a className={styles.nav} {...props}>
                    {children}
                </a>
        </div>
    )
}

export default NavigationLink