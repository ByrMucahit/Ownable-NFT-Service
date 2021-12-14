import React from "react";
import HeadTitle from "../../../text/head-title";

import styles from './style.module.css'
import Input from '../../../input/text/text'
import CheckInput from '../../../input/check/index'
import ImageButton from "../../../button/image/index"
import DropDownInput from '../../../input/dropdown/index'
import Button from "../../../button/base/index";

function MakeNFTForm(){
    return(
        <div className={styles.container}>
            <div className={`${styles.tempContext} ${styles.iterContext}`}>
                <div className={styles.cssContainer}>
                    <div className={styles.cssContext}>
                        <h1 className={`${styles.muiTypographyRoot} ${styles.muiTypographyH1}`}>
                            Mint NFT
                        </h1>
                        <p className={styles.muiFormHelperTextRoot}>Fungible And non-fungible tokens</p>

                        <div>
                            <h3 className={
                                `${styles.muiTypographyRoot} 
                                 ${styles.cssAccountLinkContent} 
                                 ${styles.muiTypographyH3}`}
                                 >
                                     Already have an account ?
                            </h3>

                            <div className={styles.muiFormControlRoot}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}`}
                                data-shrink="false"
                                name="firstName"
                                placeholder="Enter First Name"
                                style={{"marginRight":"20px;"}}
                                >
                                </label>
                                
                                <div className={`
                                ${styles.muiInputBaseRoot} 
                                ${styles.muiInputRoot} 
                                ${styles.muiInputUnderline} 
                                ${styles.cssInput} 
                                ${styles.muiInputBaseFormControl}
                                ${styles.muiInputFormControl}
                                `}
                                style={{"marginRight":"20px;"}}
                                >
                                    <input aria-invalid="false"
                                    name="firstName"
                                    placeholder="Enter First Name"
                                    type="text"
                                    className={`
                                    ${styles.muiInputBaseInput}
                                    ${styles.muiInputInput}`}
                                    >
                                    </input>
                                </div>
                                <p className={`
                                ${styles.muiFormHelperTextRoot} 
                                ${styles.muiError}`}
                                name="firstName"
                                placeholder="Enter First Name"
                                style={{"marginRight":"20px;"}}>
                                    Provide Your First Name
                                </p>
                            </div>

                            <div className={styles.muiFormControlRoot}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}`}
                                data-shrink="false"
                                name="lastName"
                                placeholder="Enter Last Name"
                                >
                                </label>
                                <div className={`
                                ${styles.muiInputBaseRoot} 
                                ${styles.muiInputRoot} 
                                ${styles.muiInputUnderline} 
                                ${styles.cssInput} 
                                ${styles.muiInputBaseFormControl}
                                ${styles.muiInputFormControl}`}>

                                    <input 
                                    aria-invalid="false" 
                                    name="lastName" 
                                    placeholder="Enter Last Name" 
                                    type="text" 
                                    className={`
                                    ${styles.muiInputBaseInput} 
                                    ${styles.muiInputInput}`}
                                    >

                                    </input>
                                </div>
                            </div>

                            <div className={`${styles.muiFormControlRoot} ${styles.muiFormControlFullWidth}`}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}`}
                                data-shrink="false"
                                name="email"
                                placeholder="Enter Email"
                                >
                                </label>
                                <div className={`
                                ${styles.muiInputBaseRoot} 
                                ${styles.muiInputRoot} 
                                ${styles.muiInputUnderline} 
                                ${styles.cssInput} 
                                ${styles.muiInputBaseFullWidth}
                                ${styles.muiInputFullWidth}
                                ${styles.muiInputBaseFormControl}
                                ${styles.muiInputFormControl}
                                `}>
                                    <input 
                                    aria-invalid="false" 
                                    name="email" 
                                    placeholder="Enter Email" 
                                    type="text"
                                    className={`
                                    ${styles.muiInputBaseInput}
                                    ${styles.muiInputInput}`}
                                    ></input>
                                </div>
                            </div>


                            <div className={`${styles.muiFormControlRoot} ${styles.muiFormControlFullWidth}`}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}`}
                                data-shrink="false"
                                name="username"
                                placeholder="Enter Username"
                                >
                                </label>
                                <div className={`
                                ${styles.muiInputBaseRoot} 
                                ${styles.muiInputRoot} 
                                ${styles.muiInputUnderline} 
                                ${styles.cssInput} 
                                ${styles.muiInputBaseFullWidth}
                                ${styles.muiInputFullWidth}
                                ${styles.muiInputBaseFormControl}
                                ${styles.muiInputFormControl}
                                `}>
                                    <input 
                                    aria-invalid="false" 
                                    name="username" 
                                    placeholder="Enter Username" 
                                    type="text"
                                    className={`
                                    ${styles.muiInputBaseInput}
                                    ${styles.muiInputInput}`}
                                    ></input>
                                </div>
                            </div>

                            <div className={`${styles.muiFormControlRoot} ${styles.muiFormControlFullWidth}`}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}`}
                                data-shrink="false"
                                name="phone"
                                placeholder="Enter Phone Number"
                                >
                                </label>
                                <div className={`
                                ${styles.muiInputBaseRoot} 
                                ${styles.muiInputRoot} 
                                ${styles.muiInputUnderline} 
                                ${styles.cssInput} 
                                ${styles.muiInputBaseFullWidth}
                                ${styles.muiInputFullWidth}
                                ${styles.muiInputBaseFormControl}
                                ${styles.muiInputFormControl}
                                `}>
                                    <input 
                                    aria-invalid="false" 
                                    name="phone" 
                                    placeholder="Enter Phone Number" 
                                    type="text"
                                    className={`
                                    ${styles.muiInputBaseInput}
                                    ${styles.muiInputInput}`}
                                    ></input>
                                </div>
                                <p className={styles.muiFormHelperTextRoot}
                                name="phone"
                                placeholder="Enter Phone Number"
                                type="text"
                                value inputMode="numeric">If provided text messages will be sent here for security.</p>
                            </div>

                            <div className={`${styles.muiBoxRoot} ${styles.cssPasswordContent}`}>
                                <div className={styles.muiFormControlRoot}>
                                    <label className={`
                                    ${styles.muiFormLabelRoot} 
                                    ${styles.muiInputLabelRoot} 
                                    ${styles.muiInputLabelFormControl} 
                                    ${styles.muiInputLabelAnimated}`}
                                    data-shrink="false"
                                    name="password"
                                    style="password"
                                    placeholder="Enter Password"
                                    style={{"marginRight":"20px;"}}
                                    >
                                    </label>
                                    <div className={`
                                    ${styles.muiInputBaseRoot} 
                                    ${styles.muiInputRoot} 
                                    ${styles.muiInputUnderline} 
                                    ${styles.cssInput} 
                                    ${styles.muiInputBaseFullWidth}
                                    ${styles.muiInputFullWidth}
                                    ${styles.muiInputBaseFormControl}
                                    ${styles.muiInputFormControl}
                                    `}>
                                        <input 
                                        aria-invalid="false" 
                                        name="username" 
                                        placeholder="Enter Username" 
                                        type="text"
                                        className={`
                                        ${styles.muiInputBaseInput}
                                        ${styles.muiInputInput}`}
                                        ></input>
                                    </div>
                                </div>

                                <div className={styles.muiFormControlRoot}>
                                    <label className={`
                                    ${styles.muiFormLabelRoot} 
                                    ${styles.muiInputLabelRoot} 
                                    ${styles.muiInputLabelFormControl} 
                                    ${styles.muiInputLabelAnimated}`}
                                    data-shrink="false"
                                    name="confirmPassword"
                                    style="password"
                                    placeholder="Enter Password"
                                    style={{"marginRight":"20px;"}}
                                    >
                                    </label>
                                    <div className={`
                                    ${styles.muiInputBaseRoot} 
                                    ${styles.muiInputRoot} 
                                    ${styles.muiInputUnderline} 
                                    ${styles.cssInput} 
                                    ${styles.muiInputBaseFullWidth}
                                    ${styles.muiInputFullWidth}
                                    ${styles.muiInputBaseFormControl}
                                    ${styles.muiInputFormControl}
                                    `}>
                                        <input 
                                        aria-invalid="false" 
                                        name="confirmPassword" 
                                        placeholder="Enter password" 
                                        type="password"
                                        className={`
                                        ${styles.muiInputBaseInput}
                                        ${styles.muiInputInput}`}
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.muiBoxRoot} ${styles.cssBoxContent}`}>
                                <label className={styles.muiFormControlLabelRoot} color="primary">
                                    <span className={`
                                    ${styles.muiButtonBaseRoot} 
                                    ${styles.muiIconButtonRoot} 
                                    ${styles.cssButtonContent} 
                                    ${styles.muiCheckBoxRoot} 
                                    ${styles.muiCheckBoxColorSecondary}
                                    ${styles.muiIconButtonColorSecondary}`}
                                    aria-disabled="false"
                                    ></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MakeNFTForm;