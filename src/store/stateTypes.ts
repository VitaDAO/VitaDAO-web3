import { Contract } from "ethers";

export interface Contracts {
  tokenContract: Contract;
  raphaelContract: Contract;
  stakingContract: Contract;
  daiContract: Contract;
}
