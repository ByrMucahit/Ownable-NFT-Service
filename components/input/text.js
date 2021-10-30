import React from "react";
import styles from './text.module.css'

function Small({placeholder, ...props}){
   return(
        <input type='text' className={styles.smalltextInput} placeholder={placeholder} required></input>

   ) 
}


function Big({...props}){
   return(
      <input type='text' className={styles.bigtextInput}  {...props} required></input>

 ) 
}

function Button({big=false}){
   const Comp = big ? Big: Small
   return(
      <Comp/>
   )
}

export default Button;