/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "volta",
   networks: {
      hardhat: {},
      volta: {
         url: API_URL,
         accounts: [PRIVATE_KEY], // Assuming PRIVATE_KEY is already a hexadecimal string prefixed with '0x'
         gas: 210000000,
         gasPrice: 800000000000,
      }
   },
};
