import { ethers } from "ethers";

export const tokens = {
  eth: {
    chainId: 1,
    address: ethers.constants.AddressZero,
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
    logo: "/icons/eth-fill-black.svg",
  },
  usdc: {
    chainId: 1,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    logo: "/icons/usdc.png",
  },
  bacon: {
    chainId: 1,
    address: "0x186785D4cba7263532F1da9bBeC3Da612dd6D085",
    name: "Bacon Token",
    symbol: "BACON",
    decimals: 18,
    logo: "/images/nftstaking/tokens/bacon.png",
  },
  roo: {
    chainId: 1,
    address: "0x9d7107c8E30617CAdc11f9692A19C82ae8bbA938",
    name: "Lucky Roo",
    symbol: "ROO",
    decimals: 18,
    logo: "/images/nftstaking/tokens/lucky roo.png",
  },
  balto: {
    chainId: 1,
    address: "0x5955f7d312c5d84B004d259D55072C4F0A478dBC",
    name: "Balto Token",
    symbol: "BALTO",
    decimals: 18,
    logo: "/images/nftstaking/tokens/balto.png",
  },
  alcazar: {
    chainId: 1,
    address: "0x10f44a834097469AC340592d28c479c442E99bFe",
    name: "Alcazar",
    symbol: "ALCAZAR",
    decimals: 18,
    logo: "https://raw.githubusercontent.com/brewlabs-code/assets/master/blockchains/ethereum/assets/0x10f44a834097469AC340592d28c479c442E99bFe/logo.png",
  },
};
