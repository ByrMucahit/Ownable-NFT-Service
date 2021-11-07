import React from "react";
import styles from './text-title.module.css'

import cn from "classnames";

function TextTitle({ bold=false, children}){
    return <p className={cn([styles.Title, bold && styles.bold])}>{children}</p>
}

export default TextTitle