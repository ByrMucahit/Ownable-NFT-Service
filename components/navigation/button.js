import React from "react"
import styles from './button.module.css'


function NavigationLink ({ children,href, ...props}) {
    return (
                <a className={styles.nav}  href={href}>
                    {children}
                </a>
      
    )
}

export default NavigationLink