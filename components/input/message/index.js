import React from "react";
import styles from './style.module.css'

function MessageInput(){
    return(
        <div className={styles.muiFormControlRoot}>
            <label className={`
            ${styles.muiFormLabelRoot} 
            ${styles.muiInputLabelRoot} 
            ${styles.cssMessage} 
            ${styles.muiInputFormControl} 
            ${styles.muiInputLabelAnimated}`}
            data-shrink="false"
            for="textAreaMessage"
            name="message"
            rows="8"
            cols="57"
            rowmax="80"
            colsmax="60"
            placeholder="Message">
            </label>
            <textarea 
            id="textAreaMessage" 
            name="message" 
            margin="normal" 
            rows={"8"} 
            cols={"57"} 
            rowmax={"80"} 
            colsmax={"60"} 
            className={styles.messageArea}>Message</textarea>
        </div>
        
    )
}

export default MessageInput;