import React from "react";
import HeadTitle from "../../../text/head-title";

import styles from './style.module.css'
import * as Icon from '../../../icons'
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
                                    >
                                        <span className={styles.muiIconButtonLabel}>
                                            <input className={styles.cssCheckBox} name="toCheckbox" required type="checkbox" data-indeterminate="false" value></input>
                                            <Icon.İconmonstrCheckbox6 className={styles.muiSvgIconRoot}/>
                                        </span>

                                        <span className={`
                                        ${styles.muiTypographyRoot} 
                                        ${styles.muiFormControlLabelLabel} 
                                        ${styles.muiTypographyBody1}`}
                                        >
                                            <p>I have read and agree to the 
                                                <a className={`
                                                ${styles.muiTypographyRoot} 
                                                ${styles.muiLinkRoot} 
                                                ${styles.muiLinkUnderLineHover} 
                                                ${styles.muiTypographyColorPrimary}`}
                                                target="tos">terms of service</a>
                                                .
                                            </p>
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>

                        <form className={styles.cssForm}>
                            <div className={`${styles.muiFormControlRoot} ${styles.muiFormControlFullWidth}`}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl}
                                ${styles.muiInputLabelAnimated}`}></label>
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
                                    name="tokenName" 
                                    placeholder="Enter Token Name" 
                                    type="text" 
                                    className={`
                                    ${styles.muiInputBaseInput} 
                                    ${styles.muiInputInput}`} >

                                    </input>
                                </div>
                            </div>

                            <div className={`${styles.muiFormControlRoot} ${styles.cssMedia}`}>
                                <label className={`${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}`}
                                data-shrink="false"
                                style={{"position":"relative;","marginTop":"30px;","top":"-35px;","marginBottom":"10px;"}}>Media</label>
                                <div>
                                    <label className={
                                        `${styles.muiButtonBaseRoot} 
                                    ${styles.muiButtonRoot} 
                                    ${styles.muiButtonContained} 
                                    ${styles.muiButtonContainedPrimary}`}
                                    >
                                        <span className={styles.muiButtonLabel}>
                                            <span className={styles.cssMediaContent}>
                                                <Icon.Upload className={`${styles.muiSvgIconRoot} ${styles.cssSvg}`}/>
                                            </span>
                                            <input accept="image/*" className={styles.cssSvgContent} id="icon-button-photo" type="file"></input>
                                        </span>
                                    </label>
                                    <p className={styles.muiFormHelperTextRoot}>Any image file or animated gif accepted up to 10mb file size.</p>
                                </div>
                            </div>
                            <div className={styles.muiFormControlRoot}>
                                <label className={`
                                ${styles.muiFormControlRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}
                                ${styles.muiInputLabelShrink}
                                ${styles.muiInputLabelFilled}`}
                                data-shrink="true"></label>
                                <div className={`
                                ${styles.muiInputBaseRoot} 
                                ${styles.muiInputRoot} 
                                ${styles.muiInputUnderline} 
                                ${styles.muiInputBaseFormControl} 
                                ${styles.muiInputFormControl}`}>
                                    <div className={`
                                    ${styles.muiSelectRoot} 
                                    ${styles.muiSelectSelect} 
                                    ${styles.muiSelectSelectMenu} 
                                    ${styles.muiInputBaseInput} 
                                    ${styles.muiInputInput}`}>NFT (Non Fungible Token)</div>
                                    <input name="assetType" aria-hidden="true" tabIndex={"-1"} className={styles.muiSelectNativeInput}></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MakeNFTForm;