import React from "react";

import Reason from '../components/form/reasonSide'
import MakeNFTNonRegister from '../components/form/makeNFT/NonAccount/index'
import Business from '../components/form/businessSignUp/index'

export default{
    title: 'form'
};

export const ReasonSideForm = () => <Reason/>

export const MakeNFTNonRegisteredForm = () => (<MakeNFTNonRegister placeholder='first name'/>)

export const BusinessForm = () => (<Business />)