const hre = require("hardhat");

async function main() {
  const NFT_CONTRACT_ADDRESS = "0xF10100444c99d837c2524Ab655051f8A69eF78a1";
  const CREATOR = await hre.ethers.getContractFactory("Creators");
  const creator = await CREATOR.deploy(NFT_CONTRACT_ADDRESS);

  await creator.deployed();

  console.log("Creator contract deployed to:", creator.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
