import React from "react"
import styles from './navigation-button.module.css'

import { Facebook } from "./icons"
import cn from 'classnames'
import Button from './button'

function NavigationButton ({isIcon=true,children, ...props}) {
    return (<Button>
        {isIcon && <Facebook/>}
        {children}
    </Button>)
}

export default NavigationButton