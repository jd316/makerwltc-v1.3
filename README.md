# LiteMaker DeFi Protocol v1.3

A simplified MakerDAO-style protocol for Litecoin, allowing users to borrow USDm (USD-pegged stablecoin) against their LTC collateral.

## Features

- 🔒 Deposit LTC as collateral
- 💵 Borrow USDm stablecoin
- 📊 Real-time price feeds
- 🔄 Automated liquidations
- 💼 Smart contract security

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/litemaker-labs/litemaker-dapp.git
cd litemaker-dapp
```

2. Install dependencies:
```bash
npm install
cd frontend && npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Deploy contracts (Polygon Amoy Testnet):
```bash
npx hardhat run scripts/deploy.js --network amoy
```

5. Start the frontend:
```bash
cd frontend
npm start
```

## Smart Contracts (Polygon Amoy Testnet)

- WLTC Token: [Contract Address]
- USDm Token: [Contract Address]
- LiteMaker Vault: [Contract Address]
- Price Feed: [Contract Address]

## Testing

```bash
npx hardhat test
```

## Architecture

- **WLTC**: Wrapped LTC token
- **USDm**: USD-pegged stablecoin
- **LiteMaker Vault**: Main protocol contract
- **Price Feed**: Oracle for LTC/USD price

## Security

- Collateralization Ratio: 150%
- Liquidation Threshold: 125%
- Price Feed Updates: Every block
- Emergency Pause Functionality

## Frontend

The frontend is built with React and uses:
- Web3.js for blockchain interaction
- Material-UI for components
- Responsive design for all devices

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Contact

- GitHub: [@litemaker-labs](https://github.com/litemaker-labs)
- Project Link: [https://github.com/litemaker-labs/litemaker-dapp](https://github.com/litemaker-labs/litemaker-dapp)
- Discord: [Join our community](https://discord.gg/litemaker)
