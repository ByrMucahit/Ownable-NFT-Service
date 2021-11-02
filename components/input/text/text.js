import React from "react";
import styles from './text.module.css'
import cn from 'classnames'


function Button({medium=false, big=false, small=false,...props}){
  return(
      <input type='text' className={cn([medium && styles.medium, big && styles.big, styles.small ])}  {...props} required></input>
   )
}

export default Button;