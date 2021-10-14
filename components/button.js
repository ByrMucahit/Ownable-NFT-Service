import React from 'react'

import styles from './button.module.css'


function button ({children}) {
    return (
        <div className={styles.btn}>
            <button type="button">{children}</button>
            <span className={styles.c}> Heyyo</span>
        </div>
   
    
    ) 
}


export default button