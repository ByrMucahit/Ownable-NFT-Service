import { Network, Alchemy} from "alchemy-sdk";

const settings = {
    apiKey: "xjxP2tzn3QxlIamX6rtHo6aJiK1kpIjG",
    network: Network.ETH_MAINNET
};

const alchemy = new Alchemy(settings);

const ownerAddr = "0x2fb67a6410836e74D88a0d52F587683C0378c6d7";
console.log('fetching NFTs for address:', ownerAddr);
console.log("...");

const nftsForOwner = await alchemy.nft.getNftsForOwner("0x2fb67a6410836e74D88a0d52F587683C0378c6d7");
console.log("number of NFTs found:", nftsForOwner.totalCount);
console.log("...");

for (const nft of nftsForOwner.ownedNfts) {
    console.log("===");
    console.log("contract address:", nft.contract.address);
    console.log("token ID:", nft.tokenId);
}

console.log("===");

console.log("fetching metadata for a crypto Coven NFT...");
const response = await alchemy.nft.getNftMetadata( "0x5180db8F5c931aaE63c74266b211F580155ecac8",
    "1590");

console.log('NFT name:', response.title);
console.log('token type:', response.tokenType);
console.log("tokenUri: ", response.tokenUri.gateway);
console.log("image url: ", response.rawMetadata.image);
console.log("time last updated: ", response.timeLastUpdated);
console.log("===");