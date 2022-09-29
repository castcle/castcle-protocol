# Castcle Protocol

## Installation

#### On Linux and macOS

Install the latest release by using `foundryup`

```bash
# Open your terminal and type in the following command:
$ curl -L https://foundry.paradigm.xyz | bash

# This will download foundryup. Then install Foundry by running:
$ foundryup
```

For detailed explanation on how things work, check out the [documentation](https://book.getfoundry.sh).

## Build Contract

```bash
$ forge build
```

## Deploy Contract

The path to the contract is in the format <path>:<contract>, e.g. src/Contract.sol:Contract

```bash
$ forge create src/Cast.sol:Cast --private-key=WALLET_PRIVATE_KEY
```

The deployed NFT contract address is the field of `Deployed to` in result

```
Deployer: 0x0000000000000000000000000000000000000000
Deployed to: 0x0000000000000000000000000000000000000000
Transaction hash: 0x0000000000000000000000000000000000000000
```

## Generate Contract's ABI only

```bash
$ forge inspect Cast abi | tee CastABI.json
```

## Remove the Build Artifacts and Cache Directories.

```bash
$ forge clean
```
