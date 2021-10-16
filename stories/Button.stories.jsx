import React from "react";

import Button from '../components/button'

import NavButton from '../components/navigation-button'
import Navigation from "../components/navigation";
import FrameButton from '../components/frame-button'


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





