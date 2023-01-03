import {createContext, useContext} from "react";
import {useState} from "React";
import {connectWalletPressed} from "../src/services/minting/Minting";


export const MintContext = createContext("unknown");

const MintProvider = (props) => {

    const getWalletAddress = () => {

    }

    return (
        <MintContext.Provider>
            {props.children}
        </MintContext.Provider>
    )
}

export default MintProvider;