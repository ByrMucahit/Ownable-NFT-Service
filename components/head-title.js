import React from "react";
import styles from './head-title.module.css'

import cn from "classnames";

function HeadTitle({ bold= true, children}){
    return <h1 className={cn([styles.Title, bold && styles.bold])}>{children}</h1>
}


export default HeadTitle