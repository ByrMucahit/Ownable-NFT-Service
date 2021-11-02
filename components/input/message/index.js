import React from "react";
import styles from './style.module.css'

function MessageInput(){
    return(
        <textarea className={styles.messageArea}>Message</textarea>
    )
}

export default MessageInput;