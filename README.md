

# Flowppies - AI-Generated NFT Pets on Flow Blockchain

<img width="959" alt="01" src="https://github.com/user-attachments/assets/a92a489b-4931-4674-b4b3-3578006eea0b" />


## 🌟 Overview

Flowppies is an innovative Web3 gaming platform that combines AI-generated NFT pets with interactive gameplay on the Flow blockchain. Users can create, train, and battle unique digital companions in a gasless environment powered by Flow's native VRF (Verifiable Random Function) and sponsored transaction system.

## ✨ Key Features

### 🎨 AI-Powered Pet Generation

- **AI Image Creation**: Powered by Google's Gemini 2.0 Flash with advanced image generation capabilities
- **Custom Art Styles**: Choose from multiple styles including Pixel Art, Watercolor, 3D Render, Anime, and more
- **Dynamic Backstories**: AI-generated lore that evolves with your pet's journey
- **Unique Attributes**: Each pet has distinctive traits including Happiness, Power, Level, and Multiplier stats


### 🎲 Flow's Native VRF Integration

Token Tails uses Flow's Verifiable Random Function (VRF) for truly fair pet battles - a feature exclusive to Flow blockchain.

**How It Works:**

- **Battle Outcomes**: 70% pet stats + 30% cryptographic randomness
- **Zero Cost**: Free randomness (costs \$10+ on other chains)
- **Instant Results**: No waiting for oracles
- **Provably Fair**: Mathematical proof of fairness


### ⚡ Gasless Experience

- **Sponsored Transactions**: All gas fees covered by Flow Wallet
- **Seamless Onboarding**: No need to acquire native tokens for new users
- **Ultra-Low Costs**: When fees apply, they're minimal on Flow EVM


### 🏆 Interactive Gameplay

- **Pet Training**: Feed and train pets to increase their stats
- **Battle System**: Engage in PvP battles with stake-based rewards
- **Evolution Mechanics**: Level up pets to unlock new abilities and appearances
- **Leaderboard**: Compete for top rankings based on pet performance


## 🏗️ Technical Architecture

### Frontend Stack

- **Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS for responsive design
- **Web3 Integration**: RainbowKit with wagmi for wallet connectivity
- **UI Components**: Custom components with Framer Motion animations


### Blockchain Infrastructure

- **Network**: Flow Testnet \& Mainnet
- **Smart Contracts**: Solidity-based ERC721 implementation with custom battle mechanics
- **VRF Integration**: Flow's native randomness beacon for fair battle outcomes
- **Gas Sponsorship**: Flow Wallet's automatic fee coverage


### Storage \& AI

- **Decentralized Storage**: Irys Network for NFT metadata and images
- **AI Generation**: Google Gemini 2.0 Flash for image and backstory creation
- **Metadata Standards**: ERC721-compliant with evolving attributes


### Project Stack Overview


| Category | Component | Details |
| :-- | :-- | :-- |
| Frontend Stack | Framework | Next.js 14 with React 18 |
| Frontend Stack | Styling | Tailwind CSS for responsive design |
| Frontend Stack | Web3 Integration | RainbowKit with wagmi for wallet connectivity |
| Frontend Stack | UI Components | Custom components with Framer Motion animations |
| Blockchain Infrastructure | Network | Flow Testnet \& Mainnet |
| Blockchain Infrastructure | Smart Contracts | Solidity-based ERC721 implementation with custom battle mechanics |
| Blockchain Infrastructure | VRF Integration | Flow's native randomness beacon for fair battle outcomes |
| Blockchain Infrastructure | Gas Sponsorship | Flow Wallet's automatic fee coverage |
| Storage \& AI | Decentralized Storage | Irys Network for NFT metadata and images |
| Storage \& AI | AI Generation | Google Gemini 2.0 Flash for image and backstory creation |
| Storage \& AI | Metadata Standards | ERC721-compliant with evolving attributes |


## 🎮 How to Play

### 1. Connect Your Wallet

- Install Flow Wallet extension
- Connect to the application
- All transaction fees are automatically sponsored!


### 2. Create Your Pet

- Navigate to the Generate page
- Describe your desired pet
- Choose an art style
- Let AI generate your unique companion


### 3. Train and Care

- Feed your pet to increase Happiness (+5) and Power (+1)
- Train your pet for enhanced Power (+5) and Happiness (+1)
- Watch your pet's multiplier grow with each interaction


### 4. Battle Other Pets

- Create battles between any two pets
- Stake Flow tokens on your favorite
- Outcomes determined by 70% stats + 30% Flow VRF randomness
- Winners receive rewards distributed automatically


### 5. Evolution System

- Level up pets when they reach sufficient points
- Unlock new backstory chapters
- Enhance visual appearance and abilities


## 📁 Project Structure

```
flowppies/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   ├── generate-backstory/   # AI backstory generation
│   │   ├── image/                # Gemini image generation
│   │   └── irys/                 # Decentralized storage
│   ├── components/               # React components
│   ├── battle/                   # Battle interface
│   ├── generate/                 # Pet creation
│   ├── showcase/                 # NFT gallery
│   └── leaderboard/              # Rankings
├── contract/                     # Smart contracts
│   └── DynamicNFT.sol           # Main NFT contract
├── utils/                        # Utilities and configs
└── lib/                          # Shared libraries
```


## 🔧 Smart Contract Features

### Core NFT Functionality

- **ERC721 Standard**: Full NFT compliance with metadata storage
- **Dynamic Attributes**: Stats that change based on interactions
- **Mutable Metadata**: Evolving backstories and characteristics
- **Ownership Tracking**: Secure pet ownership and transfer


### Battle System

- **Battle Creation**: Any user can create battles between pets
- **Stake Management**: Users can stake Flow tokens on battle outcomes
- **VRF Resolution**: Cryptographically fair battle resolution
- **Reward Distribution**: Automatic payout to winners (70% to stakers, 30% to creator)


### Gas Optimization

- **Efficient Minting**: Optimized contract deployment and execution
- **Batch Operations**: Support for multiple actions in single transactions
- **Event Logging**: Comprehensive event emission for frontend tracking


## 🌐 Live Demo

- **Application**: [Deployed on Vercel](https://flowppies-rosy.vercel.app)
- **Smart Contract**: [Flow Testnet Explorer](contract-explorer-url)


## 📊 Key Statistics

- **Zero Gas Fees**: All transactions sponsored by Flow Wallet
- **Instant Randomness**: No oracle delays for battle resolution
- **Scalable**: Flow's architecture supports high-throughput gaming
- **Decentralized Storage**: All metadata stored on Irys/IPFS


## 🔒 Security Features

- **Verifiable Randomness**: Cryptographically secure battle outcomes
- **Immutable Ownership**: Blockchain-secured pet ownership
- **Decentralized Metadata**: No single point of failure for pet data
- **Audited Libraries**: Built on OpenZeppelin's secure contracts


## 🌟 Why Flow Blockchain?

### Developer Benefits

- **Native VRF**: Built-in randomness without external oracles
- **Gas Sponsorship**: Eliminate user friction with sponsored transactions
- **High Performance**: Designed for mainstream adoption and gaming
- **EVM Compatibility**: Deploy Solidity contracts seamlessly


### User Benefits

- **No Gas Worries**: Play without managing native tokens
- **Instant Transactions**: Fast block times and finality
- **Fair Gameplay**: Provably random battle outcomes
- **True Ownership**: Decentralized NFT storage and metadata



## 🎯 Target Audience

- **Web3 Gamers**: Users seeking engaging blockchain-based gaming experiences
- **NFT Collectors**: Collectors interested in unique, evolving digital assets
- **AI Enthusiasts**: Users fascinated by AI-generated content and narratives





