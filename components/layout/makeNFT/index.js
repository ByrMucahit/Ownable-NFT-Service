import React from "react";

import styles from './style.module.css'
import Navigation from "../../navigation/navigation";
import HeadTitle from "../../text/head-title";
import MakeNFTForm from "../../form/makeNFT/NonAccount";
import Footer from '../../footer/index'

function Layout(){
    return(
        /* Layout in Make NFT Page */
        <div className={styles.layout}>
            {/* Navigator */}
                <Navigation />
            {/* Center Container */}
            <div className={styles.formContainer}>
                {/* Header inside Container */}
                <div className={styles.headerSide}>
                    <div className={styles.container}>
                        <div className={styles.details}>
                            <h1 className={styles.header}>Mint NFT</h1>
                            <p className={styles.subText}>Fungible and non-fungible tokens</p>
                            <div className={styles.inputContainer}>
                                <h3 className={styles.accountLink}>Already have an account? <span className={styles.login}>(Log in here)</span></h3>

                                <div className={styles.firstNameInput}>
                                    <label className=
                                    {`${styles.multiFormLabelRoot} 
                                    ${styles.multiInputLabelRoot} 
                                    ${styles.multiInputLabel} 
                                    ${styles.firstNameLabel}`}
                                    data-shrink = "false"
                                    name="firstName"
                                    placeholder="Enter First Name"
                                    >
                                    </label>
                                    <div className={
                                        `${styles.input}
                                        ${styles.MuiInputRoot}
                                        ${styles.MuiInputBaseRoot}
                                        ${styles.muiInputUnderline}
                                        ${styles.BaseInput}
                                        ${styles.multiInputFormControl}
                                        `}
                                        style={{"marginRight":"20px;"}}>
                                        <input aria-invalid="fallse"
                                               name="firstName"
                                               placeholder="Enter first name"
                                               type="text"
                                               className={
                                                   `${styles.MuiInputBaseInput}
                                                    ${styles.MuiInput}`
                                               }
                                               ></input>
                                    </div>
                                    <p
                                        className={`${styles.muiFormHelperTextRoot}
                                                    ${styles.muiError}`}
                                        name="firstName"
                                        placeholder="Enter First Name"
                                        style={{"marginRight":"20px;"}}
                                        >Provide your first time</p>
                                </div>
                                <div className={styles.muiFormControlRoot}>
                                    <label className={
                                        `${styles.muiFormLabelRoot}
                                        ${styles.muiInputLabelRoot}
                                        ${styles.muiInputLabelFormControl}
                                        ${styles.muiInputLabelAnimated}`}
                                        data-shrink="false"
                                        name="lastName"
                                        placeholder="Enter Last Name"></label>

                                </div>
                            </div>
                        </div>

                    </div>


                    <div className={styles.headers}>
                        <HeadTitle className={styles.header}  bold>Mint NFT</HeadTitle>
                    </div>
                    <div className={styles.marks}>
                        <HeadTitle className={styles.mark}>Fungible and non-fungible tokens</HeadTitle>
                    </div>
                </div>
                <div className={styles.form}>
                    <MakeNFTForm/>
                </div>
            </div>
            {/* Container */}
            <div className={styles.Footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout