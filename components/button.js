import React from 'react'
import styles from './button.module.css'

import cn from 'classnames'

function button ({border=false, children, ...props}) {
    return (
        <div className={styles.buttonContainer}>
            <button  className={cn(border && styles.FrameBorder)} type="button"> {children} </button>
        </div>
   
    
    ) 
}


export default button