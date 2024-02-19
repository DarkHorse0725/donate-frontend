import { tokens } from "./tokens";

export const collections = {
  b2d: {
    chainId: 1,
    address: "0x09d2f73ff9B42F7F9499d2f44489CDB1264934FD",
    payingToken: tokens.usdc,
    name: "Beastie 2D Epic Collection",
    symbol: "B2D",
    description:
      "DO NOT MISS THE CHANCE TO OWN AN AMAZING 2D EPIC BEASTIE. HIGH % STAKING REWARDS IN $BACON. STACK EM, TRADE EM AND COLLECT THEM. ONLY 1,000 MADE.",
    socials: {
      telegram: "https://t.me/wptwarpigstoken",
      twitter: "https://mobile.twitter.com/warpigstoken?s=21&t=gkTSIkMZ6pRU0q3KNcb04w",
      website: "https://www.warpigs.io/",
    },
    logo: "/images/nftstaking/nfts/wpt.png",
    marketplace: "https://opensea.io/collection/beastie-2d-epic-collection-v2",
  },
  lucky: {
    chainId: 1,
    address: "0xC4d358277CBfb8DaEd830fFDD511a649e53d3F0a",
    payingToken: tokens.eth,
    name: "Lucky Roo",
    symbol: "lUCKY",
    description:
      "The Lucky Roo Card collection is a unique set of hand drawn casino playing cards and are a must have on the Ethereum block chain.",
    socials: {
      telegram: "https://t.me/LuckyRooToken",
      twitter: "https://mobile.twitter.com/LuckyRooToken",
      website: "https://www.luckyroo.io",
    },
    logo: "/images/nftstaking/nfts/lucky roo.png",
    subgraph: "https://api.thegraph.com/subgraphs/name/brainstormk/lucky-roo-nft",
    marketplace: "https://looksrare.org/collections/0xC4d358277CBfb8DaEd830fFDD511a649e53d3F0a",
  },
  balto: {
    chainId: 1,
    address: "0x270D3971d46d1b6B75C20113cE796BE83577e82D",
    maxSupply: 5000,
    payingToken: tokens.eth,
    prices: [0.03, 0.04, 0.04, 0.04, 0.05, 0.05, 0.06],
    disableMint: true,
    name: "Balto Origin NFT",
    symbol: "BaltoAlpha",
    description:
      "The Balto Token Alpha Pack is a collection of 5,000 unique huskies helping other animals across Ethereum blockchain. There are four families in the Pack—Fox, Fritz, Tillie and Togo, with hundreds of unique traits.",
    socials: {
      telegram: "https://t.me/baltotokenofficial",
      twitter: "http://twitter.com/baltotoken",
      website: "https://baltoalpha.com/",
    },
    logo: "/images/nftstaking/nfts/balto.png",
    subgraph: "https://api.thegraph.com/subgraphs/name/brainstormk/balto-origin-nft",
    marketplace: "https://opensea.io/collection/baltoalphapack",
  },
  lions: {
    chainId: 1,
    address: "0x9B38A4759848f100019ee7d429E9384820914780",
    maxSupply: 888,
    payingToken: tokens.eth,
    price: 0.04,
    disableMint: true,
    name: "Lions by Alcazar",
    symbol: "LIONS",
    description:
      "Lions by Alcazar is an NFT collection created by the Alcazar team. The NFTs are going to be usable in the upcoming Alcazar dApp and they will be used for staking to earn rewards.",
    socials: {
      telegram: "https://t.me/alcazartokenofficial",
      twitter: "https://twitter.com/alcazartoken",
      website: "https://alcazartoken.io/",
    },
    logo: "/images/nftstaking/nfts/alcazar_lions.png",
    subgraph: "https://api.thegraph.com/subgraphs/name/brainstormk/alcazarlions-nft",
    marketplace: "https://shidomarket.com/collection/lions-by-alcazar",
  },
};
