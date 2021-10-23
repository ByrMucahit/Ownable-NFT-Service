import React from "react";

import Button from '../components/button/index'

import NavButton from '../components/navigation/button'
import Navigation from "../components/navigation/navigation";
import FrameButton from '../components/frame/frameButton'
import MintButton from "../components/frame/mintButton";



export default {
    title: 'Buttons'
};

export const Normal = () => <Button>Save</Button>

export const NavigationButton = () => (
    <NavButton>
        NavButton
    </NavButton>
)

export const Navigator = () =>(
    <Navigation/>
)

export const FrameButtons = () => <FrameButton>Login</FrameButton>


export const MintNFTButton = () => <MintButton>MINT CHIC-A-DEE NFT</MintButton>



