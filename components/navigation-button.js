import React from "react"
import styles from './navigation-button.module.css'

import Button from './button'

function NavigationButton ({ children }) {
    return (<Button >
        {children}
    </Button>)
}

export default NavigationButton