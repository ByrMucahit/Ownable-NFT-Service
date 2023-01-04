import {createContext, useContext, useEffect} from "react";
import {useState} from "React";
import {connectWalletPressed} from "../src/services/minting/Minting";
import {getCurrentWalletConnected} from "../src/services/interact";


export const MintContext = createContext("unknown");

const MintProvider = (props) => {

    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");

    useEffect(async () => {
        const {address, status} = await getCurrentWalletConnected();
        setWallet(address);
        setStatus(status);

        addWalletListener();
    }, []);

    const connectWalletManager = () => {
        let {wallet, status} = connectWalletPressed();
    }



    return (
        <MintContext.Provider>
            {props.children}
        </MintContext.Provider>
    )
}

export default MintProvider;