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
            <div className={styles.container}>
                {/* Header Side */}
                <div className={styles.headers}>
                    <main className={`${styles.muiContainerRoot} ${styles.muiContainerMaxWidthSm}`}>
                        <h1 className={`${styles.muiTypographyRoot} ${styles.cssHeader} ${styles.muiTypographyH5}`} bold>Contact us</h1>
                        <form>
                            <div className={`${styles.cnnSelectionInput} ${styles.cssSelectionInputContainer}`}>
                                <div className={`${styles.cssControl}`}>
                                    <input name="subject" type={"hidden"} value={"business"}></input>
                                </div>
                            </div>
                                <TextInput/>

                                  {/* Messages Area */}
                    <MessagesArea className={styles.message}/>

                    {/* Submit Btn */}
                    <Button className={styles.btn}border>
                        <HeadTitle className={styles.btnText} 
                        bold
                        >
                        SUBMIT
                        </HeadTitle>
                    </Button>
{/* Contact */}
<div>
    Mail To:
    <br/>
    <b>Ownable-NS</b>
    <br/>
    <b>2633 Lincoln Blvd Suite #710</b>
    <br/>
    <b>Santa Monica, CA 90405</b>
   
</div>
                        </form>
                    </main>
                </div>
        
              
            </div>
        </div>
    )
}

export default BusinessSignUp