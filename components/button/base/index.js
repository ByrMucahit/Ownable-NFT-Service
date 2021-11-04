import React from 'react'
import styles from './style.module.css'

import cn from 'classnames'


function frameButton ({border=false, children, className ,...props}) {
    return (
            <button  
            className={cn(
                [styles.baseBtn ,
                border && styles.FrameBorder,
                className
            ])} 
                type="button"
            > 
                {children} 
            </button>
    ) 
}


function linkButton ({ children, className ,...props}) {
    return (
        <div className={styles.linkContainer}>
            <a className={styles.links}> {children} </a>
        </div>  
    ) 
}


function button ({border=false, children, className ,...props}) {
    const Comp = border ? frameButton : linkButton
    return (
            <Comp  
            className={cn(
                [styles.baseBtn ,
                border && styles.FrameBorder,
                className
            ])} 
                type="button"
            > 
                {children} 
            </Comp>
    ) 
}

export default button

/*
    Document:
    --------
    cn stand for classnames: 'Classnames'  is prevent class overwrite. It comes more than one class into function, it's reason about conflict. 
    border: Some button has border, but some it hasn't. When button has border, border attribute wil have been  activated. 
    children: Content, which include within element.
    ...props: What if Any properties is passed into function, Function can catch.
*/

/* 
// TO DO List
[]  frame button / Transparent - color

*/