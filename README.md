# hack721


Hack721 is an ERC721 token and a Smartc

-----------------------

### Install truffle

```
$ npm install -g truffle
```

### Compile

```
$ truffle compile
```

### Run test

```
$ truffle test
```

### Migrate to ropsten network

```
$ mv .env.example .env
$ truffle migrate --network ropsten --reset
```

### Use CareGame contract

```
$ cd script
$ truffle exec caregame_contract.js --network ropsten
$ truffle exec create_achievement.js --network ropsten
$ truffle exec transfer_achievement.js --network ropsten
$ truffle exec check_achievement.js --network ropsten
```
