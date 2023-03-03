import { parseEther } from 'ethers/lib/utils';
import { ethers } from 'hardhat';
import { toWei } from '../test/utils';

async function main() {
  const Exchange = await ethers.getContractFactory('Exchange');
  const Token = await ethers.getContractFactory('Token');

  const token = await Token.deploy('Token', 'TKN', toWei(1000));
  await token.deployed();

  const exchange = await Exchange.deploy(token.address);
  await exchange.deployed();

  console.log(
    `Exchange with ${exchange.address} and token with ${token.address} are deployed`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
