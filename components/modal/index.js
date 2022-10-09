import React, {useContext, useEffect} from "react";
import {Button} from "antd";
import {ModalWrapper} from './module.style'
import SignUpForm from "../../src/container/Auth/SignUp";
import SignIn from "../form/auth/signIn";
import {AuthContext} from "../../context/AuthProvider"


function SignUpFormModal() {
    return (
        <SignUpForm/>
    )
}

function SignInFormModal() {
    return (
        <SignIn/>
    )
}

export default function Modal({...props}) {

    console.log('props: ', props);

    const {loginModalVisible} = useContext(AuthContext);


    console.log("Modal login from modal: ", loginModalVisible);


    if (!props.show) {
        return null;
    }

    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode === 27)) {
            props.onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
        }
    })

    const Comp = loginModalVisible === false ? SignUpFormModal : SignInFormModal;


    return (
        <ModalWrapper>
            <div className={"modal"} onClick={props.onClose}>
                <div className={"modal-content"} onClick={(e) => e.stopPropagation()}>
                    <div className={"modal-header"}>
                        <h4 className={"modal-title"}>
                            {props.title}
                        </h4>
                    </div>
                    <div className={"modal-body"}>
                        <Comp/>
                    </div>
                    <div className={"modal-footer"}>
                        <Button className={"button"} onClick={props.onClose}>
                            Close
                        </Button>

                        <Button className={"button"} onClick={props.onClose}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    )
}