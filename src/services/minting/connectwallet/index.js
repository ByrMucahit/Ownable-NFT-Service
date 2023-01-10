import {connectWallet, getCurrentWalletConnected} from "../interact";
import {useContext} from "react";
import {MintContext} from "../../../../context/MintingProvider";


const connectWallet = async () => {
    const {setStatus, setWallet} = useContext(MintContext);

    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
}

export default connectWallet;