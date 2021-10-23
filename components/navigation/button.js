import React from "react"
import styles from './button.module.css'

import Button from '../button/index'

function NavigationButton ({ children}) {
    return (<Button className={styles.nav}>
        {children}
    </Button>)
}

export default NavigationButton