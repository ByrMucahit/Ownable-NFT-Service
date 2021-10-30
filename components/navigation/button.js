import React from "react"
import styles from './button.module.css'

import Button from '../button/base/index'

function NavigationButton ({ children}) {
    return (<Button className={styles.nav}>
        {children}
    </Button>)
}

export default NavigationButton