import React from "react";
import styles from './text.module.css'

function Small(){
   return(
      
            <input type='text' className={styles.smalltextInput} required></input>
     
        
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