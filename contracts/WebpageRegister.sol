pragma solidity ^0.5.0;

contract WebpageRegister
{
  	address public oracleAddress;

  	constructor (address _oracleAddress) public
  	{
    	oracleAddress = _oracleAddress;
  	}

  	event WebpageRequest(string url, uint256 option);
  	event WebpageRegistration(string timestamp, string url, string content);

  	function RegisterWebpageURL(string memory url, uint256 option) public
  	{
    	require(msg.sender == oracleAddress);

    	emit WebpageRequest(url, option);
  	}

  	function RegisterWebpageMetadata(string memory timestamp, string memory url, string memory content) public
  	{
    	require(msg.sender == oracleAddress);

    	emit WebpageRegistration(timestamp, url, content);
  	}
}