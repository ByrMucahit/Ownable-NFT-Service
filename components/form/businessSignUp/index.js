import React from "react";
import styles from './style.module.css'
import DropDownMenu from '../../input/dropdown/index'
import TextInput from '../../input/text/text'
function BusinessSignUp(){
    return(
        <form className={styles.container}>
            <DropDownMenu business/>
            <TextInput />
        </form>
    )
}

export default BusinessSignUp