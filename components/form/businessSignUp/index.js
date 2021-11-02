import React from "react";
import styles from './style.module.css'
import DropDownMenu from '../../input/dropdown/index'
import TextInput from '../../input/text/text'
import MessagesArea from '../../input/message/index'
import HeadTitle from '../../text/head-title'
function BusinessSignUp(){
    return(
        /* Business Sign Up Form */
        <div className={styles.form}>
        <form className={styles.container}>
            <div className={styles.headers}>
                <HeadTitle className={styles.header} bold>Contact us</HeadTitle>
            </div>
            {/* Category Of Business */}
            <div className={styles.categoryOfBusiness}>
                <DropDownMenu medium business/>
            </div>
            <div className={styles.emailInput}>
                <TextInput medium/>
            </div>
            <div className={styles.messageArea}>
                <MessagesArea className={styles.message}/>
            </div>
        </form>
        </div>
    )
}

export default BusinessSignUp