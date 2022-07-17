require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
 
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.RPC,
      accounts: [process.env.PRI]
    }
  }
};
