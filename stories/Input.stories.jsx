import React from "react";
import Check from '../components/input/check'
import TextInput from '../components/input/text'
import DropDownMenu from '../components/button/dropdown/index'
export  default{
    title: 'inputs'
};


export const CheckInput = () => <Check/>

export const TextInputForm = () => (
    <div>
        <TextInput />
        <TextInput big/>
    </div>
    )


export const DropDown = () => <DropDownMenu/>