import React from "react"
import styles from './navigation-button.module.css'

import { Facebook } from "./icons"
import cn from 'classnames'
import Button from './button'

function NavigationButton ({isIcon=false,children, ...props}) {
    return (<Button >
        {children}
    </Button>)
}

export default NavigationButton