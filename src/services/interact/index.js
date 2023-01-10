import {pinJSONToIPFS} from "../pin";

require('dotenv').config();
const alchemyKey = process.env["REACT_ALCHEMY_API_KEY "];
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require('../../../contract-abi.json');
const contractAddress = "0x2fb67a6410836e74D88a0d52F587683C0378c6d7";

export const connectWallet = async () => {
    if(window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const ob = {
                status: "Write a message in the text-field above.",
                address: addressArray[0],
            };
            return obj;
        } catch (err) {
            return {
                address: "",
                status: ":(" + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        :/{" "}
                        <a target={"_blank"} href={`https://metamask.io/download.html`}>
                            You must install meta mask, a virtual ethereum wallet, in your browser.
                        </a>
                    </p>
                </span>
            )
        }
    }
}

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "👆🏽 Write a message in the text-field above.",
                };
            } else {
                return {
                    address: "",
                    status: "🦊 Connect to Metamask using the top right button.",
                };
            }
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
          <p>
            {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
            ),
        };
    }
};

export const mintNFT = async (url, name, description) => {
    if(url.trim() == "" || (name.trim() == "" || description.trim() == "")) {
        return {
            success: false,
            status: "! Please make sure all fields are completed before minting",
        }
    }

    //makemeta data
    const metadata = new Object();
    metadata.name = name;
    metadata.image = url;
    metadata.description = description;

    //make pinata call
    const pinataResponse = await pinJSONToIPFS(metadata);
    if(!pinataResponse.success) {
        return {
            success: false,
            status: ":( Something went wrong while uploadinbg your tokenURI.",
        }
    }
    const tokenURI = pinataResponse.pinataUrl;

    //load smart contract
    window.contract = await web3.eth.Contract(contractABI, contractAddress);

    // set up your Ethereum transaction
    const transactionParameters = {
        to: contractAddress,
        from: window.ethereum.selectAddress,
        'data': window.contract.methods.mintNFT(window.ethereum.selectAddress, tokenURI).encodeABI()
    };

    try {
        const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
        return {
            success: true,
            status: "check out your transaction on Etherscan: https://goreli.etherscan.io/tx/"+ txHash
        }
    } catch (error) {
        return {
            success: false,
            status: "Something went wrong" + error.message,
        }
    }
}