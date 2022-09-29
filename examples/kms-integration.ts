import { KMSSigner } from '@rumblefishdev/eth-signer-kms';
import { KMS } from 'aws-sdk';
import { BigNumber, ethers, Transaction } from 'ethers';
import { formatEther, parseUnits } from 'ethers/lib/utils';
import * as Cast from '../out/Cast.sol/Cast.json';

(async function KMSIntegration() {
  const provider = new ethers.providers.InfuraProvider('maticmum');
  const keyId = 'mrk-3661794eef574bb1b8471cac494b6ad5';
  const kms = new KMS({ region: 'us-east-1' });
  const signer = new KMSSigner(provider, keyId, kms);
  const [me, coin] = await Promise.all([signer.getAddress(), signer.getBalance()]);
  console.info(`🔑  Wallet address: ${me} (${formatEther(coin).toString()} ETH)`);

  const contractFactory = new ethers.ContractFactory(Cast.abi, Cast.bytecode, signer);
  const contract = await contractFactory.deploy();
  console.info('🚀  Contract deploying at address:', contract.address);

  await contract.deployed();
  console.info('✅  Contract deployed successfully');

  const balance: BigNumber = await contract.balanceOf(me);
  const symbol: string = await contract.symbol();
  console.info('🤑  Balance:', formatEther(balance).toString(), symbol);

  const tx: Transaction = await contract.burn(parseUnits('1', 'ether'));
  console.info(`🔥  Burn 1 token (TxID: ${tx.hash})`);
})();
