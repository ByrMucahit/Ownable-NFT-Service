import {createContext, useContext, useEffect, useState} from "react";
import {getCurrentWalletConnected, mintNFT} from "../src/utils/interact";

export const MintContext = createContext("unknown");

const MintProvider = (props) => {
    const [status, setStatus] = useState("");
    const [wallet, setWallet] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");

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

    const onMintPressed = async () => {
        console.log("Hello world on mint pressed");
        const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

        const { status } = await mintNFT(url, "mucahit", "hello");
        setStatus(status);
    };




    return (
        <MintContext.Provider value={{status, wallet, onMintPressed}}>
            {props.children}
        </MintContext.Provider>
    )
}

export default MintProvider;