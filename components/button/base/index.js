import React from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import cn from 'classnames'

function linkButton ({ children, href,...props}) {
    return (
        <Link href={href} className={styles.linkContainer}>
            <a  className={styles.links} props> {children} </a>
        </Link>  
    ) 
}

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

function button ({border=false, children, className ,...props}) {
    const Comp = border ? frameButton : linkButton
    return (
            <Comp  
            className={cn(
                [styles.baseBtn ,
                border && styles.FrameBorder,
                className
            ])} 
            {...props}
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
    border: Some button has border, but some it hasn't. When button has border, border attribute will have been  activated. 
    children: Content, which include within element.
    ...props: What if Any properties is passed into function, Function can catch.

    --> We have option that's is divided into two option. One Of them has image and text, other one has just text.
    --> Base Button has just text.
    --> Base Button is divided into two variant in itself. One Of them has borders, other one hasn't. When button was called with sended with parameter named border, Button will have 
    been border. 
*/

/* 
// TO DO List
[X]  frame button / Transparent - color

*/
