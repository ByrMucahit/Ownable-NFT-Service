import React, {useContext} from "react";
import MintBtn from "../../../button/mint/index";
import styles from './style.module.css'
import * as Icon from '../../../icons'
import {useState} from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import Minting from "../../../../src/services/minting/Minting";
import {MintContext} from "../../../../context/MintingProvider";
import {connectWallet, mintNFT, onMintPressed} from "../../../../src/utils/interact";

function MakeNFTForm() {

    /* Data which is input that have been entered by user  */
    const [formStatus, setFormStatus] = useState(false);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const {status, setStatus, wallet, setWallet, onMintPressed} = useContext(MintContext);

    const [query, setQuery] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        tokenName: "",
        typeOfAsset: "NFT",
        description: "",
        nftMiningFee: "417",
        image: ""
    })

    /* IMAGE UPLOADING */
    const handleFileChange =() => (e) => {
        let file = e.target.files[0];
        console.log("image:", file);
        const imageData = new FormData();
        imageData.append('image', file);
        console.log('imagedata:', imageData);
        setQuery((prevState) => ({
            ...prevState,
            image: file
        }));
        setCreateObjectURL(URL.createObjectURL(file));
    }

    const handleFilledField = () => {
        setCreateObjectURL(null);
        setQuery(null);
    }

    /* IF ANY CHANGING HAVE BEEN DONE */
    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
        console.log(query);
    }

    const countDown = (responseData) => {
        let secondsToGo = 5;
        const modal = Modal.success({
            title: "Success",
            content: {responseData},
        });
        const timer = setInterval(() => {
            secondsToGo -= 1;
            modal.update({
                content: `This modal will be destroyed after ${secondsToGo} second.`,
            });
        }, 1000);
        setTimeout(() => {
            clearInterval(timer);
            modal.destroy();
        }, secondsToGo * 1000);
    };

    const handleResponse = (response) => {
        console.log("Reponse from be: ", response);
        if(response.status === 200 || response.status === 201) {
            if(response.data.key==="MAKE_NFT_ON") {
                countDown( "Hey, Your file has been made nft.");
            }
        }
    };

    /* SUBMIT TRANSACTION */
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios.post(
            process.env.GETFORM_FORM_ENDPOINT,
            formData,
            {headers: {Accept: "application/json"}}
        )
            .then(function (response) {
                setFormStatus(true);
                setQuery({
                    firstName: "",
                    lastName: "",
                    email: "",
                    userName: "",
                    phoneNumber: "",
                    password: "",
                    confirmPassword: "",
                    tokenName: "",
                    typeOfAsset: "NFT",
                    description: "",
                    nftMiningFee: "417",
                    image: ""
                });
                console.log(response);
                handleResponse(response);
                handleFilledField();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.tempContext} ${styles.iterContext}`}>
                <div className={styles.cssContainer}>
                    <div className={styles.cssContext}>
                        <h1 className={`${styles.muiTypographyRoot} ${styles.muiTypographyH1}`}>
                            Mint NFT
                        </h1>
                        <p className={styles.muiFormHelperTextRoot}>Fungible And non-fungible tokens</p>

                        <div>
                            <div className={"registerContainer"} style={{"display":"flex"}}>
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
                                           placeholder="Enter First Name"
                                           style={{}}
                                    >
                                    </label>

                                    <div className={`walletButtonContainer`}
                                         style={{}}
                                    >
                                        <button id={"walletButton"} onClick={connectWallet}>
                                            {wallet.length > 0 ?
                                                ("Conntected:" + String(wallet).substring(0, 6) + "..."):
                                                (<span>Connect Wallet</span>)
                                            }
                                        </button>
                                    </div>
                                    <p className={`
                                ${styles.muiFormHelperTextRoot} 
                                ${styles.muiError}`}
                                       placeholder="Enter First Name"
                                       style={{"marginRight": "20px;"}}>
                                        Provide Your First Name
                                    </p>
                                </div>
                            </div>

                            <div className={styles.muiFormControlRoot}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}`}
                                       data-shrink="false"
                                       placeholder="Enter First Name"
                                       style={{"marginRight": "20px;"}}
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
                                     style={{"marginRight": "20px;"}}
                                >
                                    <input aria-invalid="false"
                                           name="firstName"
                                           placeholder="Enter First Name"
                                           type="text"
                                           className={`
                                    ${styles.muiInputBaseInput}
                                    ${styles.muiInputInput}`}
                                           onChange={handleChange()}
                                           onClick={() => console.log(query.key + " " + "from first Name field")}
                                    >
                                    </input>
                                </div>
                                <p className={`
                                ${styles.muiFormHelperTextRoot} 
                                ${styles.muiError}`}
                                   placeholder="Enter First Name"
                                   style={{"marginRight": "20px;"}}>
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
                                       placeholder="Enter Last Name"
                                >
                                </label>
                                <div className={`
                                ${styles.muiInputBaseRoot} 
                                ${styles.muiInputRoot} 
                                ${styles.muiInputUnderline} 
                                ${styles.cssInput}                     
                                ${styles.muiInputFormControl}`}>

                                    <input
                                        aria-invalid="false"
                                        name="lastName"
                                        placeholder="Enter Last Name"
                                        type="text"
                                        className={`
                                    ${styles.muiInputBaseInput} 
                                    ${styles.muiInputInput}`}
                                        onChange={handleChange()}
                                        onClick={() => console.log(query + " " + "from last name field")}
                                    >

                                    </input>
                                </div>
                                <p className={`
                                ${styles.muiFormHelperTextRoot} 
                                ${styles.muiError}`}
                                   placeholder="Enter Last Name"
                                >
                                    Provide Your Last Name
                                </p>
                            </div>

                            <div className={`${styles.muiFormControlRoot} ${styles.muiFormControlFullWidth}`}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}`}
                                       data-shrink="false"
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
                                        onChange={handleChange()}
                                        onClick={() => console.log(query + " " + "from email field.")}
                                    />
                                </div>
                                <div className={`${styles.muiFormHelperTextRoot} ${styles.muiError}`}
                                     placeholder="Enter Email">
                                    Provide the email
                                </div>
                            </div>


                            <div className={`${styles.muiFormControlRoot} ${styles.muiFormControlFullWidth}`}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}`}
                                       data-shrink="false"
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
                                        name="userName"
                                        placeholder="Enter Username"
                                        type="text"
                                        className={`
                                    ${styles.muiInputBaseInput}
                                    ${styles.muiInputInput}`}
                                        onChange={handleChange()}
                                        onClick={() => console.log(query + " " + "from username field")}
                                    />
                                </div>
                                <p className={`${styles.muiFormHelperTextRoot} ${styles.muiError}`}
                                   placeholder="Enter Username">Provide a username</p>
                            </div>

                            <div className={`${styles.muiFormControlRoot} ${styles.muiFormControlFullWidth}`}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}`}
                                       data-shrink="false"
                                       placeholder="Enter Phone Number"
                                >
                                </label>
                                <div className={`
                                ${styles.muiInputBaseRoot} 
                                ${styles.muiInputRoot} 
                                ${styles.muiInputUnderline} 
                                ${styles.cssInput} 
                                ${styles.muiInputBaseFullWidth}
                                ${styles.muiInputFormControl}
                                `}>
                                    <input
                                        aria-invalid="false"
                                        name="phoneNumber"
                                        placeholder="Enter Phone Number"
                                        type="text"
                                        className={`
                                    ${styles.muiInputBaseInput}
                                    ${styles.muiInputInput}`}
                                        onChange={handleChange()}
                                        onClick={() => console.log(query + " " + "from phone number field")}
                                    />
                                </div>
                                <p className={styles.muiFormHelperTextRoot}
                                   placeholder="Enter Phone Number"
                                   inputMode="numeric"
                                >If provided text messages will be sent here for security.</p>


                            </div>

                            <div className={`${styles.muiBoxRoot} ${styles.cssPasswordContent}`}>
                                <div className={styles.muiFormControlRoot}>
                                    <label className={`
                                    ${styles.muiFormLabelRoot} 
                                    ${styles.muiInputLabelRoot} 
                                    ${styles.muiInputLabelFormControl} 
                                    ${styles.muiInputLabelAnimated}`}
                                           data-shrink="false"
                                           placeholder="Enter Password"
                                           style={{"marginRight": "20px;"}}
                                    >
                                    </label>
                                    <div className={`
                                    ${styles.muiInputBaseRoot} 
                                    ${styles.muiInputRoot} 
                                    ${styles.muiInputUnderline} 
                                    ${styles.cssInput} 
                                    ${styles.muiInputFormControl}
                                    `}
                                         style={{"marginRight": "20px"}}>
                                        <input
                                            aria-invalid="false"
                                            name="password"
                                            placeholder="Enter Password"
                                            type="text"
                                            className={`
                                        ${styles.muiInputBaseInput}
                                        ${styles.muiInputInput}`}
                                            onChange={handleChange()}
                                            onClick={() => console.log(query + " " + "from password field.")}
                                        />
                                    </div>
                                    <p className={`${styles.muiFormHelperTextRoot} ${styles.muiError}`}
                                       placeholder="Enter Password"
                                       style={{"marginRight": "20px"}}>Provide your password</p>
                                </div>

                                <div className={styles.muiFormControlRoot}>
                                    <label className={`
                                    ${styles.muiFormLabelRoot} 
                                    ${styles.muiInputLabelRoot} 
                                    ${styles.muiInputLabelFormControl} 
                                    ${styles.muiInputLabelAnimated}`}
                                           data-shrink="false"
                                           placeholder="Confirm Password"
                                    >
                                    </label>
                                    <div className={`
                                    ${styles.muiInputBaseRoot} 
                                    ${styles.muiInputRoot} 
                                    ${styles.muiInputUnderline} 
                                    ${styles.cssInput} 
                                    ${styles.muiInputFormControl}
                                    `}>
                                        <input
                                            aria-invalid="false"
                                            name="confirmPassword"
                                            placeholder="Confirm password"
                                            type="confirmPassword"
                                            className={`
                                        ${styles.muiInputBaseInput}
                                        ${styles.muiInputInput}`}
                                            onChange={handleChange()}
                                            onClick={() => console.log(query + " " + "from confirm password field.")}
                                        />
                                    </div>
                                    <p className={`${styles.muiFormHelperTextRoot} ${styles.muiError}`}
                                       placeholder="Enter Password"
                                       style={{"marginRight": "20px"}}>Confirm your password</p>
                                </div>
                            </div>

                            <div className={`${styles.muiBoxRoot} ${styles.cssBoxContent}`}>
                                <label className={styles.muiFormControlLabelRoot} color="primary">
                                    <span className={`
                                    ${styles.muiButtonBaseRoot} 
                                    ${styles.muiIconButtonRoot} 
                                    ${styles.cssButtonContent} 
                                    ${styles.muiCheckBoxRoot} 
                                    ${styles.muiIconButtonColorSecondary}`}
                                          aria-disabled="false"
                                    >
                                        <span className={styles.muiIconButtonLabel}>
                                            <input
                                                className={styles.cssCheckBox}
                                                type="checkbox"
                                                value="true"
                                                name="checkbox"
                                                required/>
                                            <Icon.İconmonstrCheckbox6
                                                className={`${styles.muiSvgIconRoot} ${styles.muiCheckBoxRoot}`}
                                                focusable="false"/>
                                        </span>
                                    </span>
                                    <span className={`
                                        ${styles.muiTypographyRoot} 
                                        ${styles.muiTypographyBody1}`}
                                    >
                                            <p>I have read and agree to the 
                                                <a className={`
                                                ${styles.muiTypographyRoot} 
                                                ${styles.muiLinkUnderLineHover} 
                                                ${styles.muiTypographyColorPrimary}`}
                                                   target="tos"> terms of service</a>
                                                .
                                            </p>
                                        </span>
                                </label>
                            </div>
                        </div>

                        <form className={styles.cssForm}
                              acceptCharset="UTF-8"
                              method="POST"
                              encType="multipart/form-data"
                              id="ajaxForm"
                              onSubmit={handleSubmit}
                        >
                            <div className={`${styles.muiFormControlRoot} ${styles.muiFormControlFullWidth}`}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl}
                                ${styles.muiInputLabelAnimated}
                                ${styles.muiError}
                                ${styles.muiError}`}></label>
                                <div className={`
                                ${styles.muiInputBaseRoot} 
                                ${styles.muiInputRoot} 
                                ${styles.muiInputUnderline} 
                                ${styles.cssInput} 
                                ${styles.muiInputBaseFullWidth}
                                ${styles.muiInputFormControl}`}>
                                    <input
                                        aria-invalid="false"
                                        name="tokenName"
                                        placeholder="Enter Token Name"
                                        type="text"
                                        className={`
                                    ${styles.muiInputBaseInput} 
                                    ${styles.muiInputInput}`}
                                        onChange={handleChange()}
                                        onClick={() => console.log(query + " " + "from new token name field.")}
                                    />
                                </div>
                                <p className={`${styles.muiFormHelperTextRoot} ${styles.muiError}`}
                                   placeholder="Enter Token Name"
                                   style={{"marginRight": "20px"}}>Token name is required</p>
                            </div>

                            <div className={`${styles.muiFormControlRoot} ${styles.cssMedia}`}>
                                <label className={`${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}`}
                                       data-shrink="false"
                                       style={{
                                           "position": "relative",
                                           "marginTop": "30px;",
                                           "top": "-35px;",
                                           "marginBottom": "10px;"
                                       }}>Media</label>
                                <div style={{"display": "flex", "justify-content":"space-between;"}}>
                                    <div>
                                        <label className={`
                                    ${styles.muiButtonBaseRoot} 
                                    ${styles.muiButtonRoot} 
                                    ${styles.muiButtonContained} 
                                    ${styles.muiButtonContainedPrimary}`}
                                        >
                                        <span className={styles.muiButtonLabel}>
                                            <span className={styles.cssMediaContent}>
                                                <Icon.Upload className={`${styles.muiSvgIconRoot} ${styles.cssSvg}`}/>
                                                UPLOAD FILE
                                            </span>
                                            <input
                                                accept="image/*"
                                                className={styles.cssSvgContent}
                                                id="icon-button-photo"
                                                type="file"
                                                name="file"
                                                onChange={handleFileChange()}
                                            />
                                        </span>
                                        </label>
                                        <p className={styles.muiFormHelperTextRoot}>Any image file or animated gif
                                            accepted up to 10mb file size.</p>
                                    </div>
                                    <div className={styles.imageContainer}>
                                        {createObjectURL ? <img src={createObjectURL}  alt={'image'}/>:null}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.muiFormControlRoot}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}
                                ${styles.muiInputLabelShrink}
                                `}
                                       data-shrink="true">What type of asset is this?</label>
                                <div className={`
                                ${styles.muiInputBaseRoot} 
                                ${styles.muiInputRoot} 
                                ${styles.muiInputUnderline} 
                                ${styles.muiInputFormControl}`}>
                                    <div className={` 
                                    ${styles.muiSelectSelect} 
                                    ${styles.muiSelectSelectMenu} 
                                    ${styles.muiInputBaseInput} 
                                    ${styles.muiInputInput}`}>NFT (Non Fungible Token)
                                    </div>
                                    <input
                                        name="assetType"
                                        aria-hidden="true"
                                        className={styles.muiSelectNativeInput}
                                        onClick={() => console.log(query + " " + "from asset type field.")}/>
                                    <Icon.DownArrow
                                        className={`${styles.muiSvgIconRoot} ${styles.muiSelectIcon} ${styles.muiSelectIconOpen}`}/>
                                </div>
                                <p className={`${styles.muiFormHelperTextRoot} ${styles.muiFormHelperTextFilled}`}>
                                    NFT's (Non fungible tokens) represent things that are wholly owned by one person
                                    like art or merchandise.
                                </p>
                            </div>

                            <div className={`${styles.muiFormControlRoot} ${styles.muiFormControlFullWidth}`}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl}
                                ${styles.muiInputLabelAnimated}`}
                                       data-shrink="false"
                                       placeholder="Enter description"></label>

                                <div className={`
                                ${styles.muiInputBaseRoot} 
                                ${styles.muiInputRoot} 
                                ${styles.muiInputUnderline} 
                                ${styles.cssInput} 
                                ${styles.muiInputBaseFullWidth}
                                ${styles.muiInputFullWidth}
                                ${styles.muiInputBaseFormControl}
                                ${styles.muiInputFormControl}
                                ${styles.muiInputBaseMultiLine}
                                ${styles.muiInputMultiLine}`}>
                                    <textarea
                                        name="description"
                                        placeholder="Enter description"
                                        className={`
                                    ${styles.muiInputBaseInput} 
                                    ${styles.muiInputInput} 
                                    ${styles.muiInputBaseInputMultiLine} 
                                    ${styles.muiInputInputMultiLine}`}
                                        style={{"height": "30px;", "overflow": "hidden;"}}
                                        onChange={handleChange()}
                                        onClick={() => console.log(query + " " + "from description field.")}
                                    />
                                    <textarea
                                        aria-hidden="true"
                                        className={`
                                    ${styles.muiInputBaseInput} 
                                    ${styles.muiInputInput} 
                                    ${styles.muiInputBaseInputMultiLine}
                                    ${styles.muiInputInputMultiLine}`}
                                        style={{
                                            "visibility": "hidden",
                                            "position": "absolute",
                                            "overflow": "hidden",
                                            "height": "0px",
                                            "top": "0px",
                                            "left": "0px",
                                            "transform": "translateZ(0px)",
                                            "width": "734.652px"
                                        }}></textarea>
                                </div>
                            </div>

                            <div className={styles.muiFormControlRoot}>
                                <label className={`
                                ${styles.muiFormLabelRoot} 
                                ${styles.muiInputLabelRoot} 
                                ${styles.muiInputLabelFormControl} 
                                ${styles.muiInputLabelAnimated}`}
                                       data-shrink="false"
                                       style={{"position": "relative", "marginTop": "30px", "top": "-40px"}}
                                >NFT Minting Fee</label>
                                $114.95
                            </div>
                            <MintBtn type={"submit"} onClick={onMintPressed}/>
                        </form>
                    </div>
                </div>
                {console.log("Hey you: ", wallet)}
            </div>
        </div>
    )
}

export default MakeNFTForm;