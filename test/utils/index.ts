import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';

export const toWei = (value: number) =>
  ethers.utils.parseEther(value.toString());

export const fromWei = (amount: BigNumber) => {
  return ethers.utils.formatEther(
    typeof amount === 'string' ? amount : amount.toString(),
  );
};

export const getBalance = async (address: string) => {
  return await ethers.provider.getBalance(address);
};
