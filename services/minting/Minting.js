import {useState} from 'React';
import {useEffect} from "react";


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
    console.log("Log from connect wallet pressed")
    return "Hello World";
}

export default Minting;
