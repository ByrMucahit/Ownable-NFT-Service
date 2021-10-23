import React from "react";
import styles from './head-title.module.css'

import cn from "classnames";

function HeadTitle({ bold= false,className ,children, size=20, opacity=1}){
    return <h1 className={cn(
        [styles.Title, 
        bold && styles.bold,
        className
        ])}
        style={{fontSize:size, opacity: opacity}}
        >{children}</h1>
}

export default HeadTitle

/*
    cn stand for classnames: 'Classnames'  is prevent class overwrite. It comes more than one class into function, it's reason about conflict. 
    bold: Some text has bold font weight, but some it hasn't. When text has bold font weight properties, bold properties will have been activated.
*/