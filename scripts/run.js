const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Illumi", "Shizuku", "Hisoka"],       // Names
    ["https://i.imgur.com/vAB1JrQ.jpeg", // Images
    "https://i.imgur.com/ZWsQfif.png", 
    "https://i.imgur.com/KFeLEa9.jpeg"],
    [500, 500, 400],                    // HP values
    [100, 75, 100],                       // Attack damage values
    "Kurapika", // Boss name
    "https://i.imgur.com/KHVv8pR.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();