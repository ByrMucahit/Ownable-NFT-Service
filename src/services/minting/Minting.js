import {useContext, useEffect, useState} from "react";
import {connectWallet, getCurrentWalletConnected, mintNFT} from "../../utils/interact";
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


export const onMintPressed = async ({url, name, description}) => {
    const {setStatus} = useContext(MintContext);

    const {status} = await mintNFT(url, name, description);
    setStatus(status);
};
