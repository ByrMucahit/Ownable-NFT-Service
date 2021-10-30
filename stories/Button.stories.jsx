import React from "react";

import Button from '../components/button/base/index'

import NavButton from '../components/navigation/button'
import Navigation from "../components/navigation/navigation";
import FrameButton from '../components/frame/frameButton'
import MintButton from "../components/frame/mintButton";
import GetStarted from '../components/frame/getStartedButton'
import FooterNavigation from "../components/footer/index";
import ImageButton from "../components/button/base/image";

export default {
    title: 'Buttons'
};

export const Normal = () => <Button>Save</Button>

export const NavigationButton = () => <NavButton>NavButton</NavButton>

export const Navigator = () => <Navigation/>

export const FooterNavigator = () => <FooterNavigation/>

export const FrameButtons = () => <FrameButton>Login</FrameButton>

export const MintNFTButton = () => <MintButton>MINT CHIC-A-DEE NFT</MintButton>

export const  GetStartedButton = () => <GetStarted>GET STARTED</GetStarted>

export const ImageButtons = () => <ImageButton>UPLOAD FILE</ImageButton>





