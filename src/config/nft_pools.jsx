import { collections } from "./nfts";
import { tokens } from "./tokens";

export const pools = [
  {
    id: 1,
    chainId: 1,
    address: "0x85E2fF34A62893C76951e73BEf4a8Ea51DeB53c4",
    stakingNft: collections.b2d,
    earningToken: tokens.bacon,
    type: "secondary",
  },
  {
    id: 2,
    chainId: 1,
    address: "0xfbBf21FA5F3d5f26dD226253b37027e2BeCED36d",
    stakingNft: collections.lucky,
    earningToken: tokens.roo,
  },
  {
    id: 3,
    chainId: 1,
    address: "0x54f0c7F3A0b5209B7D9A555b7CCC8e3AB254CCe0",
    stakingNft: collections.balto,
    earningToken: tokens.balto,
    secondToken: tokens.eth,
    category: "Dual",
  },
  {
    id: 4,
    chainId: 1,
    address: "0x97074C9891D45607deDdB28368B050309e9cFa9f",
    stakingNft: collections.lions,
    earningToken: tokens.alcazar,
  },
];
