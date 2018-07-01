pragma solidity ^0.4.24;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';

contract Hack721Token is ERC721Token("Hack721Token", "HTK") {

	mapping(string => uint256) internal nameToTokenId;
	mapping(uint256 => string) internal tokenIdToName;
	mapping(uint256 => bool) internal tokenIdToSolidaire;
	mapping(uint256 => string) internal tokenIdToAchievement;
	mapping(uint256 => string) internal tokenIdToPlatform;
	mapping(uint256 => uint) internal tokenIdToTime;
	mapping(uint256 => address) internal tokenIdToAddress;
	mapping(address => uint) private balances;
	mapping(uint256 => address) private tokenOwners;
  	mapping(uint256 => bool) private tokenExists;
	mapping(address => mapping(uint256 => uint256)) private ownerTokens;

	function create(string name, bool solidaire,  string achievment, string plateforme) public {
		require(nameToTokenId[name] == 0);
		uint256 tokenId = allTokens.length + 1;
		_mint(msg.sender, tokenId);
		nameToTokenId[name] = tokenId;
		tokenIdToName[tokenId] = name;
		tokenIdToSolidaire[tokenId] = solidaire;
		tokenIdToAchievement[tokenId] = achievment;
		tokenIdToPlatform[tokenId] = plateforme;
		tokenIdToTime[tokenId] = now;
		tokenIdToAddress[tokenId] = msg.sender;
	}

	function ownerOf(uint256 _tokenId) public constant returns (address owner) {
	    require(tokenExists[_tokenId]);
	    return tokenOwners[_tokenId];
  	}

	function transfer(address _to, uint256 _tokenId) public{
		address currentOwner = msg.sender;
		address newOwner = _to;
		require(tokenExists[_tokenId]);
		require(currentOwner == ownerOf(_tokenId));
		require(currentOwner != newOwner);
		removeFromTokenList(currentOwner, _tokenId);
		balances[currentOwner] -= 1;
		tokenOwners[_tokenId] = newOwner;
		balances[newOwner] += 1;
 	}

	function removeFromTokenList(address owner, uint256 _tokenId) private {
		for(uint256 i = 0;ownerTokens[owner][i] != _tokenId;i++){
		  ownerTokens[owner][i] = 0;
		}
  	}

	function balanceOf(address _owner) public constant returns (uint balance){
		return balances[_owner];
    }

	function getTokenName(uint256 tokenId) view public returns (string) {
		return tokenIdToName[tokenId];
	}

	function getTokenId(string name) view public returns (uint) {
		return nameToTokenId[name];
	}

	function getTokenSolidaire(uint256 tokenId) view public returns (bool) {
		return tokenIdToSolidaire[tokenId];
	}

	function getTokenAchievement(uint256 tokenId) view public returns (string) {
		return tokenIdToAchievement[tokenId];
	}

	function getTokenPlatform(uint256 tokenId) view public returns (string) {
		return tokenIdToPlatform[tokenId];
	}

	function getTokenTime(uint256 tokenId) view public returns (uint) {
		return tokenIdToTime[tokenId];
	}

	function getTokenAddress(uint256 tokenId) view public returns (address) {
		return tokenIdToAddress[tokenId];
	}
}
