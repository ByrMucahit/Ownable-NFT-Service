import React from "react";
import styles from './style.module.css'
import DropDownMenu from '../../input/dropdown/index'
import TextInput from '../../input/text/text'
import MessagesArea from '../../input/message/index'
import HeadTitle from '../../text/head-title'
import Button from '../../button/base/index'
function BusinessSignUp(){
    return(
        /* Business Sign Up Form */
        <div className={styles.form}>
            {/* Container */}
            <form className={styles.container}>
                {/* Header Side */}
                <div className={styles.headers}>
                    <HeadTitle className={styles.header} bold>Contact us</HeadTitle>
                </div>
                {/* Category Of Business */}
                <div className={styles.categoryOfBusiness}>
                    <DropDownMenu medium business/>
                </div>
                {/* Email Input*/}
                <div className={styles.emailInput}>
                    <TextInput medium/>
                </div>
                {/* Messages Area */}
                <div className={styles.messageArea}>
                    <MessagesArea className={styles.message}/>
                </div>
                {/* Submit Btn */}
                <div className={styles.submitBtn}>
                    <Button className={styles.btn}border>
                        <HeadTitle className={styles.btnText} 
                        bold
                        >
                            SUBMIT
                        </HeadTitle>
                    </Button>
                </div>
                {/* Contact */}
                <div className={styles.contact}>
                    <HeadTitle className={styles.content}>Mail to:<br/>
                        <span>Ownable-NS</span>
                        <p>2633 Lincoln Blvd Suite #710</p>
                        <p>Santa Monica, CA 90405</p>
                    </HeadTitle>
                </div>
            </form>
        </div>
    )
}

export default BusinessSignUp