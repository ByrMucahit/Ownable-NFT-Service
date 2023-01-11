import {useContext, useEffect, useState} from "react";
import {connectWallet, getCurrentWalletConnected} from "../../utils/interact";
import {MintContext} from "../../../context/MintingProvider";


export const Minting = () => {

    const {status, setStatus, wallet, setWallet} = useContext(MintContext);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    const onMintPressed = async () => {

    };

    const connectWalletPressed = async () => {

    }

}


export const onMintPressed = async () => {
    const {setStatus, wallet, setWallet} = useContext(MintContext);

    const {status} = await mintNFT(url, name, description);
    setStatus(status);
}

