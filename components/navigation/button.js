import React from "react"
import styles from './button.module.css'


function NavigationLink ({ children, ...props}) {
    return (
                <a className={styles.nav}>
                    {children}
                </a>
      
    )
}

export default NavigationLink