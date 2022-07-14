import React from "react";
import styles from './text.module.css'
import cn from 'classnames'


function Button({medium=false, big=false, small=false, ...props}){
  return(
      <div className={`${styles.muiFormControlRoot} ${styles.muiFormControlFullWidth}`}>
         <label className={`
         ${styles.muiFormLabelRoot} 
         ${styles.muiInputLabelRoot} 
         ${styles.muiInputLabelFormControl} 
         ${styles.muiInputLabelAnimated}`}
         datas-shrink="false"
         name="email"
         placeholder="Enter Email">
            Email
         </label>
         <div className={`
         ${styles.muiInputBaseRoot} 
         ${styles.muiInputRoot} 
         ${styles.muiInputUnderline} 
         ${styles.cssInput} 
         ${styles.muiInputBaseFullWidth} 
         ${styles.muiInputFullWidth}
         ${styles.muiInputBaseFormControl}
         ${styles.muiInputFormControl}`}>
            <input 
               aria-invalid="false"
               name="email"

               type="text" 
               className={cn([
               medium && styles.medium, 
               big && styles.big, 
               styles.small ,
               styles.muiInputBaseInput,
               styles.muiInputInput
               ])}  
               {...props} 
               required/>
         </div>
      </div>
     
   )
}

export default Button;