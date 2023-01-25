const dotenv = require('dotenv')
const key = process.env["REACT_API_PINATA_KEY "];
const secret = process.env["REACT_API_SECRET_KEY "];

const axios = require('axios');
export const pinJSONToIPFS = async (JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

    return axios.post(url, JSONBody, {
        headers: {
            pinata_api_key: "74ec2d8d356c0a039299",
            pinata_secret_api_key: "41c6eaa80595988747a8864735af1799d22b7ebfcd72ed7ea5af553fcb5b7fcc",
        }
    })
        .then(function (response) {
            return {
                success: true,
                pinataUrl: "https://gateaway.pinata.cloud/ipfs/" + response.data.IpfsHash
            }
        })
        .catch(function (error) {
            console.log(error);
            return {
                success: false,
                message: error.message
            }
        });
};