const WebpageRegister = artifacts.require("../contracts/WebpageRegister.sol");

module.exports = function(deployer, network) {
  	deployer.deploy(WebpageRegister, process.env.ORACLE_ADDRESS);
};