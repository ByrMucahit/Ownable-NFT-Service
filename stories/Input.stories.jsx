import React from "react";
import Check from '../components/input/check/index'
import TextInput from '../components/input/text/text'
import DropDownMenu from '../components/input/dropdown/index'
import Message from '../components/input/message/index'
export  default{
    title: 'inputs'
};


export const CheckInput = () => <Check/>

export const TextInputForm = () => (
    <div>
        <TextInput medium/>
    </div>
    )


export const DropDown = () => <DropDownMenu/>

export const MessageInput = () => <Message/>