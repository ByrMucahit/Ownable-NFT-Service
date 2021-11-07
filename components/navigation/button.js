import React from "react"
import styles from './button.module.css'
import Button from '../button/base/index'

function NavigationButton ({ children, ...props}) {
    return (
    <Button className={styles.nav} {...props}>
        {children}
    </Button>
    )
}

export default NavigationButton