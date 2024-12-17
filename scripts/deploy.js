const hre = require("hardhat");
const { updateFrontendConfig } = require('./update-frontend-config');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy Mock Price Feed
  console.log("Deploying Mock Price Feed...");
  const MockPriceFeed = await hre.ethers.getContractFactory("MockPriceFeed");
  const priceFeed = await MockPriceFeed.deploy();
  await priceFeed.deployed();
  console.log("Mock Price Feed deployed to:", priceFeed.address);

  // Set initial price ($0.40 with 8 decimals for price feed standard)
  const price = ethers.utils.parseUnits("0.40", 8);
  await priceFeed.setPrice(price);
  console.log("Set initial DOGE price to $0.40");

  // Deploy WDOGE
  console.log("Deploying WDOGE...");
  const WDOGE = await hre.ethers.getContractFactory("WDOGE");
  const wdoge = await WDOGE.deploy();
  await wdoge.deployed();
  console.log("WDOGE deployed to:", wdoge.address);

  // Deploy DogeMakerVault (which will deploy USDm internally)
  console.log("Deploying DogeMakerVault...");
  const DogeMakerVault = await hre.ethers.getContractFactory("DogeMakerVault");
  const vault = await DogeMakerVault.deploy(wdoge.address, priceFeed.address);
  await vault.deployed();
  console.log("DogeMakerVault deployed to:", vault.address);

  // Get USDm address from vault
  const usdmAddress = await vault.usdm();
  console.log("USDm deployed to:", usdmAddress);

  // Mint WDOGE to deployer and additional address for testing
  const mintAmount = ethers.utils.parseEther("1000");
  await wdoge.mint(deployer.address, mintAmount);
  console.log("Minted 1000 WDOGE to:", deployer.address);
  
  // Mint to test account
  const testAccount = "0x976EA74026E726554dB657fA54763abd0C3a0aa9";
  await wdoge.mint(testAccount, mintAmount);
  console.log("Minted 1000 WDOGE to:", testAccount);

  // Initialize vault parameters
  console.log("Initializing vault parameters...");
  await vault.setBorrowRate(500); // 5% APR (500 basis points)
  console.log("Vault parameters initialized");

  // Update frontend config
  const addresses = {
    WDOGE: wdoge.address,
    USDm: usdmAddress,
    VAULT: vault.address,
    PRICE_FEED: priceFeed.address
  };
  
  await updateFrontendConfig(addresses);
  
  console.log("\nDeployment complete!");
  console.log("Deployment addresses on Local Network:");
  console.log("Mock Price Feed:", priceFeed.address);
  console.log("WDOGE:", wdoge.address);
  console.log("USDm:", usdmAddress);
  console.log("DogeMakerVault:", vault.address);

  // Verify all contracts are working
  console.log("\nVerifying contract functionality...");
  const priceCheck = await priceFeed.getPrice();
  console.log("Price feed working - Current DOGE price:", ethers.utils.formatUnits(priceCheck, 8));
  
  const borrowRate = await vault.borrowRate();
  console.log("Vault working - Current borrow rate:", borrowRate.toString(), "basis points");
  
  const wdogeBalance = await wdoge.balanceOf(deployer.address);
  console.log("WDOGE working - Deployer balance:", ethers.utils.formatEther(wdogeBalance), "WDOGE");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
