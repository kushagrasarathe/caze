const hre = require("hardhat");

async function main() {
  const NFTaddress = "0xF10100444c99d837c2524Ab655051f8A69eF78a1";
  const CreatorAddress = "0x60140FfDF1296f8534cC97140b6D3317f077db2F";
  const Subscription = await hre.ethers.getContractFactory("SubscriptionPlan");
  const subscription = await Subscription.deploy(NFTaddress, CreatorAddress);

  await subscription.deployed();

  console.log("Subscription deployed to:", subscription.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
