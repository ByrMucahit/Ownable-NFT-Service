import React from "react"
import styles from './navigation-button.module.css'

import Button from './button'

function NavigationButton ({ children, className}) {
    return (<Button className={styles.nav}>
        {children}
    </Button>)
}

export default NavigationButton