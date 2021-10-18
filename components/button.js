import React from 'react'
import styles from './button.module.css'

import cn from 'classnames'

function button ({border=false, children, ...props}) {
    return (
            <button  className={cn([styles.baseBtn ,border && styles.FrameBorder])} 
            type="button"
            > 
            {children} 
            </button>
    ) 
}

export default button