"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    if (pathname.startsWith("/success")) return null;
    if (pathname.startsWith("/wallets")) return null;

    return (
        <footer className="bg-accent5 relative overflow-hidden footer mt-20">
            <div className="w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] absolute bottom-[-6%] blur-[85px] left-[-9%] bg-primary/50"></div>
            <div className="w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] absolute top-[-6%] blur-[85px] right-[-8%] bg-accent1/50"></div>
            <img className="max-[1700px]:hidden absolute left-0 bottom-0" src="/assets2/images/footer-el-1.png" alt="" />
            <img className="max-lg:hidden absolute right-1 bottom-0" src="/assets2/images/footer-el-2.png" alt="" />
            <img className="max-xl:hidden absolute right-0 top-2 animate-skew" src="/assets2/images/how-start-el-2.png" alt="" />
            <div className="pb-120 pt-120 relative z-[2] container grid grid-cols-12 xxl:grid-cols-10 gap-6 lg:divide-x divide-accent4 mx-auto">
                <div className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-3">
                    <h3 className="mb-4 xl:mb-6">Quick Links</h3>
                    <div className="grid grid-cols-2">
                        <div className="col-span-1 flex flex-col gap-4">
                            <a href="/wallets?igo" className="animated-link">IGO</a>
                            <a href="/wallets?launchpad" className="animated-link">LAUNCHPAD</a>
                            <a href="/wallets?staking" className="animated-link">STAKING</a>
                            <a href="/wallets?farming" className="animated-link">FARMING</a>
                            <a href="/wallets?crypto" className="animated-link">CRYPTO</a>
                        </div>
                        <div className="col-span-1 flex flex-col gap-4">
                            <a href="/wallets?defi" className="animated-link">DEFI</a>
                            <a href="/wallets?web3" className="animated-link">WEB3</a>
                            <a href="/wallets?ieo" className="animated-link">IEO</a>
                            <a href="/wallets?ido" className="animated-link">IDO</a>
                            <a href="/wallets?token" className="animated-link">TOKEN</a>
                            <a href="/wallets?gaming" className="animated-link">GAMING</a>
                            <a href="/wallets?nft" className="animated-link">NFT</a>
                        </div>
                    </div>
                </div>
                <div className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-6 xxl:col-span-4">
                    <div className="text-center px-4 md:px-6 lg:px-10 xxl:px-16">
                        <h3 className="mb-4 xl:mb-6">Newsletter</h3>
                        <p className="text-neutral4 lg:text-lg mb-8 xl:mb-10">Welcome to Web3 Wallet Backup your gateway to the world of Web3 trading! Our user-friendly platform</p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
                            <input type="email" placeholder="Enter Your Email..." className="w-full focus:border-primary bg-transparent rounded-full px-5 py-4 border border-accent4 text-neutral1" required />
                            <button type="submit" aria-label="submit button" className="size-[56px] rounded-full bg-primary shrink-0 f-center text-xl"><i className="ti ti-arrow-up-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="py-5 xl:py-8 border-t border-accent4">
                <div className="container mx-auto text-center flex justify-center gap-2 sm:gap-3 items-center relative z-[2]">
                    <p className="text-xs sm:text-sm md:text-base xl:text-lg text-neutral4">Copyright @ {new Date().getFullYear()} Web3 Wallet Backup</p>
                </div>
            </div>
        </footer>
    );
}
