import {useEffect, useState} from "react";
import {connectWallet, getCurrentWalletConnected} from "../interact";


const Minting = () => {
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    useEffect(async () => {
        const {address, status} = await getCurrentWalletConnected();
        setWallet(address);
        setStatus(status);

        addWalletListener();
    }, []);


    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                    setStatus("Write a message in the text-field above.");
                } else {
                    setWallet("");
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
        return {wallet: walletAddress, status: status};
    }

    const onMintPressed = async () => {

    };

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);

        return {wallet: walletAddress, status: status}
    }
}


export default Minting;
