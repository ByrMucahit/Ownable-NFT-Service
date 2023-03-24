require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const {REACT_ALCHEMY_HTTPS, METAMASK_PRIVATE_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: REACT_ALCHEMY_HTTPS,
      accounts: [`${METAMASK_PRIVATE_KEY}`]
    }
  }
};
