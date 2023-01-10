import {useContext, useEffect, useState} from "react";
import {connectWallet, getCurrentWalletConnected} from "../interact";
import {MintContext} from "../../../context/MintingProvider";


const Minting = () => {

    const {status, setStatus, wallet, setWallet} = useContext(MintContext);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");






    const onMintPressed = async () => {

    };

    const connectWalletPressed = async () => {

    }

}




export default Minting;
