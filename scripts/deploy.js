const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Illumi", "Shizuku", "Hisoka"],     // Names
    ["https://i.imgur.com/vAB1JrQ.jpeg", // Images
    "https://i.imgur.com/ZWsQfif.png", 
    "https://i.imgur.com/KFeLEa9.jpeg"],
    [500, 500, 400],                   // HP values
    [100, 75, 100],                     // Attack damage values
    "Kurapika",                         // Boss name
    "https://i.imgur.com/KHVv8pR.png", // Boss image
    10000,                             // Boss hp
    50                                // Boss attack damage
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
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