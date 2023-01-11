async function main() {
    const BaseNFT = await ethers.getContractFactory("baseNFT");

    const baseNFT = await BaseNFT.deploy();
    console.log("Contract deployed to address:", baseNFT.address);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
})