"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ConnectWalletModal from "./ConnectWalletModal";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith("/success")) return null;

  if (pathname.startsWith("/wallets")) {
    return (
      <header
        className="z-100 fixed top-0 left-0 right-0 w-full"
        style={{ background: "linear-gradient(135deg, #02050a 0%, #4d97b8 100%)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Top row */}
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link className="font-bold text-xs uppercase tracking-widest text-white" href="/">
            Web3 Wallet Backup
          </Link>

          <div className="flex items-center gap-3">
            {/* Desktop links */}
            <ul className="hidden lg:flex gap-6 text-sm text-white whitespace-nowrap">
              <li><Link className="hover:opacity-70 transition-opacity" href="/wallets?dapps">DApps</Link></li>
              <li><Link className="hover:opacity-70 transition-opacity" href="/wallets?nft">NFT</Link></li>
              <li><Link className="hover:opacity-70 transition-opacity" href="/wallets?web3">Web3</Link></li>
            </ul>
            <button
              className="hidden lg:inline-flex border border-white/70 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <Link className="hover:opacity-70 transition-opacity" href="/wallets?secure">Secure Wallet</Link>
            </button>

            {/* Hamburger toggle — mobile only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white border border-white/40 rounded-md p-1.5 hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`ti ${mobileMenuOpen ? 'ti-x' : 'ti-menu-2'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Inline dropdown — mobile only, expands below the top bar */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ background: "linear-gradient(135deg, #02050a 0%, #4d97b8 100%)" }}
        >
          <div className="px-4 pb-6 pt-2 flex flex-col gap-4">
            <Link onClick={() => setMobileMenuOpen(false)} className="text-white text-base hover:opacity-70" href="/wallets?dapps">DApps</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className="text-white text-base hover:opacity-70" href="/wallets?nft">NFT</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className="text-white text-base hover:opacity-70" href="/wallets?web3">Web3</Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="self-start border border-white/70 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <Link className="hover:opacity-70 transition-opacity" href="/wallets?secure">Secure Wallet</Link>
            </button>
          </div>
        </div>

        <ConnectWalletModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </header>
    );
  }


  return (
    <>
      <header className={`z-100 px-4 py-4 xxl:py-6 border-b border-neutral4/15 fixed top-0 left-0 right-0 w-full ${scrolled ? 'bg-accent2' : ''}`}>
        <div className="container flex justify-between items-center mx-auto">
          <Link className="navbar-brand text-xl xl:text-2xl font-bold flex gap-1 mr-4 shrink-0" href="/">
            <span className="text-[#F9B31A]">Web3</span>
            <span className="text-[#E6007A]">Wallet</span>
            <span className="text-[#46B5FF]">Backup</span>
          </Link>
          <ul className="hidden lg:flex gap-2 lg:gap-3 xl:gap-5 text-[13px] lg:text-sm xl:text-base whitespace-nowrap">
            <li><Link className="py-2 inline-flex menu-link" href="/wallets?igo">IGO</Link></li>
            <li><Link className="py-2 inline-flex menu-link" href="/wallets?launchpad">LAUNCHPAD</Link></li>
            <li><Link className="py-2 inline-flex menu-link" href="/wallets?staking">STAKING</Link></li>
            <li><Link className="py-2 inline-flex menu-link" href="/wallets?farming">FARMING</Link></li>
            <li><Link className="lg:text-lg py-2 inline-flex menu-link" href="/wallets?crypto">CRYPTO</Link></li>
            <li><Link className="lg:text-lg py-2 inline-flex menu-link" href="/wallets?defi">DEFI</Link></li>
            <li><Link className="lg:text-lg py-2 inline-flex menu-link" href="/wallets?web3">WEB3</Link></li>
            <li><Link className="lg:text-lg py-2 inline-flex menu-link" href="/wallets?ido">IDO</Link></li>
            <li><Link className="lg:text-lg py-2 inline-flex menu-link" href="/wallets?token">TOKEN</Link></li>
            <li><Link className="lg:text-lg py-2 inline-flex menu-link" href="/wallets?nft">NFT</Link></li>
          </ul>
          <div className="flex gap-3 items-center">
            <button onClick={() => setModalOpen(true)} className="bg-[#298CF6] hover:bg-[#1C73D5] text-white px-5 xl:px-8 py-2.5 rounded-full font-medium transition-colors whitespace-nowrap">Connect Wallet</button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl lg:hidden"><i className="ti ti-menu-2"></i></button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`absolute h-screen overflow-y-auto bg-accent5 lg:hidden top-0 left-0 z-[150] duration-300 p-4 w-[300px] ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center">
            <Link className="navbar-brand font-bold text-[1.35rem]" href="/">
              <span className="text-[#EFBD31]">W</span>
              <span className="text-[#ff4e98]">e</span>
              <span className="text-[#44c4ff]">b3connectswallet</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-xl"><i className="ti ti-x"></i></button>
          </div>
          <ul className="flex flex-col gap-3 lg:gap-4 mt-4">
            {["IGO", "LAUNCHPAD", "STAKING", "FARMING", "CRYPTO", "DEFI", "WEB3", "IDO", "TOKEN", "NFT"].map(l => (
              <li key={l}><Link className="py-1 inline-flex menu-link text-neutral1" href={`/wallets?${l.toLowerCase()}`}>{l}</Link></li>
            ))}
          </ul>
        </div>
        {mobileMenuOpen && (
          <div onClick={() => setMobileMenuOpen(false)} className="fixed bg-neutral1/10 z-[140] w-full h-full inset-0 lg:hidden"></div>
        )}
      </header>

      <ConnectWalletModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
