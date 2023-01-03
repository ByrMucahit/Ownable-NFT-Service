import {useEffect, useState} from "react";
import { connectWallet} from "../interact";


const Minting = () => {
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    useEffect(async () => {

    }, []);



    const onMintPressed = async () => {

    };
}

export const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
}

export default Minting;
