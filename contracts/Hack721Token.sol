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

	//address id_destinatire;

	function create(string name, bool solidaire,  string achievment, string plateforme, uint time) public {
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
