import {createContext, useContext, useEffect, useState} from "react";
import {getCurrentWalletConnected} from "../src/services/interact";

export const MintContext = createContext("unknown");

const MintProvider = (props) => {
    const [status, setStatus] = useState("");
    const [wallet, setWallet] = useState("");

    useEffect(async () => {
        const {address, status} = await getCurrentWalletConnected();
        setStatus(status);
        setWallet(address)

        addWalletListener();
    }, []);

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountChanged", (accounts) => {
                if (accounts.length > 0) {
                    setStatus("Write a message in the text-field above.");
                } else {
                    setStatus("Connect to Metamask using the top right button.");
                }
            });
        } else {
            setStatus(
                <p>
                    {" "}
                    {" "}
                    <a target={"_blank"} href={`https://metamask.io/download.html`}>
                        You must install Metamask, a virtual Ethereum wallet, in your browser.
                    </a>
                </p>
            )
        }
    }


    return (
        <MintContext.Provider value={{status, wallet}}>
            {props.children}
        </MintContext.Provider>
    )
}

export default MintProvider;