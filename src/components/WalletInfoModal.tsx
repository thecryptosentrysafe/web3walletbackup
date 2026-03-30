"use client";

interface WalletInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  walletName: string;
  walletSrc: string;
  onConnect: () => void;
}

const WALLET_DESCRIPTIONS: Record<string, string> = {
  default: "A Web3 wallet is a versatile and significant piece of technology that is set to revolutionize the way our online identity is presented and accessed.",
  Exodus: "Exodus is a beautiful, easy-to-use multi-asset wallet with a built-in exchange. It supports hundreds of cryptocurrencies and gives you full control of your private keys.",
  Trust: "Trust Wallet is the official crypto wallet of Binance. It supports Ethereum and 100+ blockchains. Store, send, receive, stake, and exchange crypto securely.",
  "Wallet Connect": "WalletConnect is an open protocol to communicate securely between dApps and wallets using QR code scanning or deep linking.",
  "Nano x plus": "Ledger Nano X is a Bluetooth hardware wallet that lets you manage your crypto and NFTs on the go without ever exposing your private keys.",
  Tangem: "Tangem is a smart card wallet — no seed phrase, no recovery phrase. Your private key is generated on-device and never leaves the card.",
  Arculus: "Arculus is a next-generation crypto cold storage card that uses NFC technology to sign transactions securely.",
  Trezor: "Trezor is the original hardware wallet. It stores your private keys offline and protects your crypto from hackers and malware.",
  Xaman: "Xaman (formerly XUMM) is a non-custodial wallet and signing platform for the XRP Ledger ecosystem.",
  Bitbox02: "BitBox02 is a minimal, open-source hardware wallet built in Switzerland. Its sole purpose is to secure your coins.",
  Lobstr: "LOBSTR is the leading wallet and exchange for the Stellar network, making it easy to store and trade Stellar assets.",
  Atomic: "Atomic Wallet is a decentralized multi-currency wallet that supports 300+ assets with a built-in exchange and staking.",
  Metamask: "MetaMask is the world's leading self-custodial wallet. It puts you in control of your digital identity and data.",
  Rainbow: "Rainbow is a fun and simple Ethereum wallet that makes managing your NFTs and DeFi positions a joy.",
  SafePal: "SafePal is a secure, simple, and easy-to-use crypto wallet supported by Binance. Available as hardware and software wallets.",
  Coinbase: "Coinbase Wallet is a self-custody wallet giving you complete control of your crypto. It's separate from Coinbase exchange.",
  "OKX Wallet": "OKX Wallet supports 30+ blockchains and 10,000+ dApps, giving you a powerful gateway into Web3.",
  "Ledger Live": "Ledger Live is the companion app for Ledger hardware wallets, providing a secure interface for managing your assets.",
  Phantom: "Phantom is the most-used Solana wallet, now supporting Ethereum and Polygon too. Fast, friendly, and secure.",
  Keplr: "Keplr is the leading wallet for the Cosmos ecosystem, supporting IBC-enabled blockchains and staking.",
  Uniswap: "Uniswap Wallet gives you access to the Uniswap Protocol and the broader Ethereum DeFi ecosystem, self-custodied.",
  imToken: "imToken is a secure, powerful, easy-to-use digital wallet used by millions. It supports Ethereum, Bitcoin, Cosmos, and more.",
  "1inch": "1inch Wallet is a fast, secure mobile wallet from the 1inch DeFi aggregator team, supporting hundreds of tokens.",
  "Crypto.com DeFi": "Crypto.com DeFi Wallet is a non-custodial wallet that gives you access to a full suite of DeFi services.",
  Pillar: "Pillar is a community-run, non-custodial smart wallet focused on self-sovereignty and low gas fees via L2 rollups.",
};

export default function WalletInfoModal({
  isOpen,
  onClose,
  walletName,
  walletSrc,
  onConnect,
}: WalletInfoModalProps) {
  if (!isOpen) return null;

  const description = WALLET_DESCRIPTIONS[walletName] || WALLET_DESCRIPTIONS.default + ` ${walletName} wallet can go here.`;

  return (
    <div
      className="fixed inset-0 flex items-end justify-center"
      style={{ zIndex: 998, background: "rgba(0,0,0,0.45)" }}
      onClick={onClose}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
      `}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#eaf2f6",
          width: "100%",
          maxWidth: "500px",
          borderRadius: "16px 16px 0 0",
          position: "relative",
          animation: "slideUp 0.3s ease-out forwards",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl transition-colors"
        >
          <i className="ti ti-x"></i>
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center px-8 py-10">
          {/* Wallet icon */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-md overflow-hidden"
            style={{ background: "#fff" }}
          >
            <img
              src={walletSrc}
              alt={walletName}
              style={{ width: "56px", height: "56px", objectFit: "cover", borderRadius: "50%" }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'%3E%3Ccircle cx='28' cy='28' r='28' fill='%23d4eaf8'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='central' fill='%23007184' font-size='22' font-family='Arial'%3EW%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Name */}
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "#111" }}
          >
            {walletName}
          </h3>

          {/* Description */}
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "#444", maxWidth: "340px" }}
          >
            {description}
          </p>

          {/* Connect button */}
          <button
            onClick={onConnect}
            className="px-12 py-3.5 rounded-2xl font-bold text-base transition-all"
            style={{
              background: "#fff",
              border: "2px solid #87b8d1",
              color: "#072840",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#02050a";
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#fff";
              (e.currentTarget as HTMLButtonElement).style.color = "#072840";
            }}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}
