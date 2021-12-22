import React from "react";
import styles from './style.module.css'
import DropDownMenu from '../../input/dropdown/index'
import TextInput from '../../input/text/text'
import MessagesArea from '../../input/message/index'
import HeadTitle from '../../text/head-title'
import Button from '../../button/base/index'
import * as Icon from '../../icons'

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
                                    <div className={styles.cssInputContainer}>
                                        <div className={styles.cssInputContentSingleValue}>NFTs for your business</div>
                                        <div className={styles.cssGooi}>
                                            <div style={{"display":"inline-block"}}>
                                                <input 
                                                autoCapitalize="none" 
                                                autoComplete="off" 
                                                autoCorrect="off" 
                                                id="react-select-2-input"
                                                spellCheck="false"
                                                tabIndex={"0"}
                                                type={"text"}
                                                aria-autoComplete="list"
                                                value
                                                style={{
                                                    "boxSizing":"content-box",
                                                    "width":"2px",
                                                    "background":"0px center",
                                                    "border":"0px",
                                                    "fontSize":"inherit",
                                                    "opacity":"1",
                                                    "outline":"0px",
                                                    "padding":"0px",
                                                    "color":"inherit"}}/>
                                                    <div style={{
                                                        "position":"absolute",
                                                        "top":"0px",
                                                        "left":"0px",
                                                        "visibility":"hidden",
                                                        "height":"0px",
                                                        "overflow":"scroll",
                                                        "whiteSpace":"pre",
                                                        "fontSize":"16px",
                                                        "fontFamily":"Arial",
                                                        "fontWeight":"400",
                                                        "fontStyle":"normal",
                                                        "letterSpacing":"normal",
                                                        "textTransform":"none"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.cssArrow}>
                                    <span className={styles.cssIndicatorSeperator}></span>
                                    <div aria-hidden="true" className={styles.cssIndicatorContainer}>
                                        <Icon.DownArrow 
                                        height="20" 
                                        width="20" 
                                        viewBox="0 0 20 20" 
                                        ariaHidden="true" 
                                        focusable="false"
                                        className={styles.cssSvg}/>
                                    </div>
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