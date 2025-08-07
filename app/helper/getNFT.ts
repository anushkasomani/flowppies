import Moralis from 'moralis';

export async function getNFT(){
    try {
  await Moralis.start({
    apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY
  });

  const response = await Moralis.EvmApi.nft.getContractNFTs({
    "chain": "flow-testnet",
    "format": "decimal",
    "address": "0x9157F94b5027B4943D8c03B303704fA9a9BB135f"
  });
  return response.raw.result
} catch (e) {
  console.error(e);
}

}