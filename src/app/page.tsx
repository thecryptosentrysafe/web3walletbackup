"use client";

import Link from "next/link";
import { useState } from "react";
import ConnectWalletModal from "@/components/ConnectWalletModal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default function page() {
    const [modalOpen, setModalOpen] = useState(false);
    const [faqOpened, setFaqOpened] = useState(2);

    return (
        <>
            <main className="mt-[82px] xxl:mt-[98px]">
                {/* hero section */}
                <section className="relative overflow-hidden">
                    <img className="max-xxl:hidden absolute left-0 top-8" src="/assets2/images/ellipse-1.png" alt="" />
                    <img className="max-xl:hidden absolute right-0 bottom-16" src="/assets2/images/ellipse-2.png" alt="" />
                    <img className="max-xl:hidden rocket absolute left-10 bottom-8 z-[2]" src="/assets2/images/rocket.png" alt="" />
                    <img className="max-md:hidden absolute right-5 top-12 animate-slow-rotate" src="/assets2/images/globe.png" alt="" />
                    <img className="absolute left-[5%] bottom-[30%] animate-slow-rotate-reverse" src="/assets2/images/bitcoin.png" alt="" />
                    <img className="absolute right-[12%] top-[40%] animate-slow-rotate" src="/assets2/images/coin-1.png" alt="" />
                    <div className="max-lg:hidden w-[250px] h-[204px] xxl:w-[404px] xxl:h-[404px] absolute bottom-[-15%] blur-[85px] left-[-12%] bg-[rgba(240,185,11,0.50)]"></div>
                    <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[6%] blur-[85px] left-[-12%] bg-primary/50"></div>
                    <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-[6%] blur-[85px] right-[-8%] bg-accent1/50"></div>

                    <div className="max-w-7xl mx-auto px-4 container pt-120 pb-120 grid grid-cols-12 gap-6 items-center">
                        <div className="col-span-12 lg:col-span-6 relative z-[2] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
                            <h2 className="display-4 mb-4 fade_up_anim">
                                Gateway to Encrypt, back up, and
                                <span className="text-[#298CF6] underline decoration-[#298CF6]"> secure</span>
                                <span className="text-[#F9B31A] underline decoration-[#F9B31A]"> your assets</span>
                            </h2>
                            <p className="mb-8 xl:mb-10 max-w-md lg:text-lg fade_up_anim">The easiest, safest, and fastest way to secure & back up crypto asset.</p>
                            <div className="flex gap-4 xl:gap-6 fade_up_anim">
                                <button onClick={() => setModalOpen(true)} className="bg-[#298CF6] hover:bg-[#1C73D5] text-white px-6 xl:px-8 py-3 rounded-full font-medium transition-colors whitespace-nowrap">Connect Wallet</button>
                                <button onClick={() => setModalOpen(true)} className="border border-neutral4/30 hover:border-white text-white px-6 xl:px-8 py-3 rounded-full font-medium transition-colors whitespace-nowrap">Explore Now</button>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 lg:col-start-8 relative max-lg:flex max-lg:justify-center fade_up_anim">
                            <img src="/Web3-removebg-preview.png" className="relative z-[3]" alt="" />
                            <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] absolute top-[6%] blur-[85px] left-0 bg-primary/50"></div>
                        </div>
                        <div className="col-span-12 gap-6 grid grid-cols-12 xl:divide-x divide-neutral4/60 pt-120 relative z-[2]">
                            <div className="col-span-6 md:col-span-3">
                                <h3 className="h3 mb-3"><span>200</span>+</h3><p className="text-neutral1/80 lg:text-lg">Countries Covered</p>
                            </div>
                            <div className="col-span-6 md:col-span-3 xl:pl-8">
                                <h3 className="h3 mb-3"><span>30</span> Million</h3><p className="text-neutral1/80 lg:text-lg">Global Investors</p>
                            </div>
                            <div className="col-span-6 md:col-span-3 xl:pl-8">
                                <h3 className="h3 mb-3"><span>700</span>+</h3><p className="text-neutral1/80 lg:text-lg">Secured Wallet</p>
                            </div>
                            <div className="col-span-6 md:col-span-3 xl:pl-8">
                                <h3 className="h3 mb-3">$<span>1.36</span> Billion</h3><p className="text-neutral1/80 lg:text-lg">Secured Volume</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* find opportunities */}
                <section className="bg-accent2 relative z-[2] pt-120 pb-120 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 container relative z-[2]">
                        <div className="grid grid-cols-12 gap-6 items-end mb-10 xl:mb-[60px]">
                            <div className="col-span-12 lg:col-span-7">
                                <h2 className="fade_up_anim mb-4 lg:mb-0">Find & Secure <span className="text-[#298CF6] underline decoration-[#298CF6] h2">crypto</span> Now!</h2>
                            </div>
                            <div className="col-span-12 md:col-span-12 xl:col-span-4 xl:col-start-9">
                                <p className="text-xs md:text-base lg:text-lg fade_up_anim">Our comprehensive cybersecurity platform, driven by artificial intelligence, not only safeguards your organization.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 grid-rows-2">
                            <div className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 row-span-2 bg-accent6 rounded-xl p-4 !pb-0 xl:p-6 xxl:p-8 flex-col flex justify-between">
                                <div>
                                    <h3 className="mb-1">Connect to Dapps</h3>
                                    <p className="text-lg text-neutral1/70">Connect decentralized apps to mobile wallets and enable DAPP.</p>
                                </div>
                                <img src="/assets2/images/globe-2.png" className="lg:-ml-5" alt="" />
                            </div>
                            <div className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 bg-accent6 rounded-xl p-4 !pb-0 xl:p-6 xxl:p-8">
                                <h3 className="mb-1">Missing Funds</h3>
                                <p className="lg:text-lg text-neutral1/70">Lost access to funds or missing funds? Click here.</p>
                                <div className="flex justify-end"><img src="/assets2/images/trade.png" className="lg:-mr-5 -mt-9" alt="" /></div>
                            </div>
                            <div className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 bg-accent6 rounded-xl p-4 !pb-0 xl:p-6 xxl:p-8">
                                <h3 className="mb-1">High Fee</h3>
                                <p className="lg:text-lg text-neutral1/70">Transaction fees too high? Click here.</p>
                                <div className="flex justify-end"><img src="/assets2/images/spot.png" className="lg:-mr-5" alt="" /></div>
                            </div>
                            <div className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 bg-accent6 rounded-xl p-4 !pb-0 xl:p-6 xxl:p-8">
                                <h3 className="mb-1">24/7 Support</h3>
                                <p className="lg:text-lg text-neutral1/70">Count on us for round-the-clock support, help whenever you need it.</p>
                                <div className="flex justify-between items-end">
                                    <img src="/assets2/images/bitcoin-2.png" className="max-md:hidden" alt="" />
                                    <img src="/assets2/images/support.png" className="lg:-mr-5" alt="" />
                                </div>
                            </div>
                            <div className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 bg-accent6 rounded-xl p-4 !pb-0 xl:p-6 xxl:p-8">
                                <h3 className="mb-1">Trusted & Secure</h3>
                                <p className="lg:text-lg text-neutral1/70">Your assets2. On your terms. At your fingertips.</p>
                                <div className="flex justify-between items-end">
                                    <img src="/assets2/images/coins.png" className="max-md:hidden" alt="" />
                                    <img src="/assets2/images/trusted.png" className="lg:-mr-5 -mt-4" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* explore crypto */}
                <section className="bg-accent5 relative overflow-hidden">
                    <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-[-6%] blur-[85px] left-[-12%] bg-primary/50"></div>
                    <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[-6%] blur-[85px] right-[-8%] bg-accent1/50"></div>
                    <img className="max-md:hidden absolute right-5 top-12 animate-slow-rotate" src="/assets2/images/globe.png" alt="" />
                    <img className="max-lg:hidden absolute left-[5%] top-[46%] animate-slow-rotate-reverse" src="/assets2/images/bitcoin-3.png" alt="" />
                    <img className="max-lg:hidden absolute right-0 bottom-0" src="/assets2/images/element-1.png" alt="" />
                    <div className="max-w-7xl mx-auto px-4 container pb-120 pt-120 relative z-[2]">
                        <div className="mb-10 xl:mb-[60px] flex flex-wrap justify-between items-center gap-5">
                            <div className="max-w-lg">
                                <h2 className="mb-2 fade_up_anim">Explore <span className="text-[#298CF6]">Web3</span></h2>
                                <p className="lg:text-lg text-neutral4 fade_up_anim">It is the easiest, safest, and fastest way to secure & backup crypto asset.</p>
                            </div>
                            <Link href="/wallets" className="bg-[#298CF6] hover:bg-[#1C73D5] text-white px-6 xl:px-8 py-3 rounded-full font-medium transition-colors">View More</Link>
                        </div>

                        {/* Swiper JS carousel mirroring exact layout metrics from Screenshot 3 */}
                        <Swiper
                            modules={[Navigation, Scrollbar]}
                            spaceBetween={24}
                            slidesPerView={1}
                            navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                            scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1400: { slidesPerView: 3 },
                            }}
                            className="product-swiper fade_up_anim"
                        >
                            {[
                                { img: "spot-trading.png", title: "Spot Trading", desc: "Trade crypto with our comprehensive set of powerful tools to maximize your profits." },
                                { img: "margin-trade.png", title: "Margin Trading", desc: "Borrow, trade, and repay. Leverage your assets with margin trading." },
                                { img: "derivative.png", title: "Crypto Derivatives", desc: "We are the best crypto exchange for trading crypto futures." },
                                { img: "earn.png", title: "QFSEarn", desc: "Invest and earn steady income with the help of a professional asset manager." },
                            ].map((item, idx) => (
                                <SwiperSlide key={idx} className="group h-auto">
                                    <div className="bg-accent5 text-center group-hover:bg-accent6 duration-300 px-6 lg:px-10 py-5 lg:py-8 rounded-xl border border-accent4 flex flex-col items-center">
                                        <div className="size-20 rounded-full group-hover:bg-primary border border-primary flex justify-center items-center mb-6 xl:mb-8 transition-colors">
                                            <img src={`/assets2/images/${item.img}`} alt={item.title} className="object-contain" />
                                        </div>
                                        <h4 className="mb-3">{item.title}</h4>
                                        <p className="text-neutral4 mb-6 lg:mb-8 lg:text-lg max-two-line">{item.desc}</p>
                                        <a href="#" className="mt-auto text-base lg:text-lg xl:text-xl font-medium flex group-hover:text-primary group-hover:underline justify-center transition-colors">View Details</a>
                                    </div>
                                </SwiperSlide>
                            ))}

                            <div className="mt-10 lg:mt-[60px] flex items-center justify-between xl:justify-start gap-6">
                                <div className="swiper-scrollbar"></div>
                                <div className="flex gap-4">
                                    <button className="swiper-button-prev"></button>
                                    <button className="swiper-button-next"></button>
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </section>

                {/* how to get started */}
                <section className="bg-accent2 relative overflow-hidden">
                    <div className="w-[200px] h-[200px] xxl:w-[350px] xxl:h-[350px] absolute top-[44%] blur-[85px] right-[-8%] bg-primary/30 pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-4 container pt-120 pb-120 relative z-[2]">
                        <h2 className="text-center mb-10 xl:mb-[60px] fade_up_anim">How To Get <span className="text-[#298CF6] underline decoration-[#298CF6]">Started</span></h2>

                        <div className="grid grid-cols-12 relative">
                            <div className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-3 p-4 lg:p-6 xxl:px-8 xl:py-10 xxl:py-[60px] rounded-xl bg-primary flex flex-col items-center">
                                <div className="size-[60px] text-primary text-2xl f-center rounded-full bg-neutral1 mb-4 xl:mb-6"><i className="ti ti-user-plus"></i></div>
                                <h4 className="mb-4 xl:mb-6">Connect wallet</h4>
                                <p className="mb-7 xl:mb-10 lg:text-lg">Click connect wallet button.</p>
                                <button onClick={() => setModalOpen(true)} className="btn-primary">Connect Wallet</button>
                            </div>
                            <div className="fade_up_anim bg-[#0F1E2E] col-span-12 md:col-span-6 xl:col-span-3 p-4 lg:p-6 xxl:px-8 xl:py-10 xxl:py-[60px] flex flex-col items-center">
                                <div className="size-[60px] text-2xl f-center rounded-full bg-accent4 mb-4 xl:mb-6"><h5>02</h5></div>
                                <h4 className="mb-4 xl:mb-6">Select Wallet</h4>
                                <p className="mb-7 xl:mb-10 text-neutral1/80 lg:text-lg text-center">Choose your prefered wallet to backup and click on connect.</p>
                            </div>
                            <div className="fade_up_anim bg-[#0F1E2E] col-span-12 md:col-span-6 xl:col-span-3 p-4 lg:p-6 xxl:px-8 xl:py-10 xxl:py-[60px] flex flex-col items-center">
                                <div className="size-[60px] text-2xl f-center rounded-full bg-accent4 mb-4 xl:mb-6"><h5>03</h5></div>
                                <h4 className="mb-4 xl:mb-6">Backup your wallet</h4>
                                <p className="mb-7 xl:mb-10 text-neutral1/80 lg:text-lg text-center">Your wallet backup may also be referred to as a: <b>backup</b>, <b>recovery seed, seed, seed phrase, BIP-39 seed phrase, mnemonic, recovery phrase,</b> (plus various combinations of these words)</p>
                            </div>
                            <div className="fade_up_anim bg-[#0F1E2E] col-span-12 md:col-span-6 xl:col-span-3 p-4 lg:p-6 xxl:px-8 xl:py-10 xxl:py-[60px] flex flex-col items-center">
                                <div className="size-[60px] text-2xl f-center rounded-full bg-accent4 mb-4 xl:mb-6"><h5>04</h5></div>
                                <h4 className="mb-4 xl:mb-6">Start your journey</h4>
                                <p className="mb-7 xl:mb-10 text-neutral1/80 lg:text-lg text-centerx">Having a safe wallet backup means you can recover your Bitcoin.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Try our crypto */}
                <section className="bg-accent5 relative overflow-hidden">
                    <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-[-6%] blur-[85px] left-[-12%] bg-primary/50"></div>
                    <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[-6%] blur-[85px] right-[-8%] bg-accent1/50"></div>
                    <img className="max-md:hidden absolute right-5 top-12 animate-slow-rotate" src="/assets2/images/globe.png" alt="" />
                    <img className="max-lg:hidden absolute left-[5%] bottom-[6%] animate-updown" src="/assets2/images/try-el-1.png" alt="" />
                    <img className="max-lg:hidden absolute right-[5%] bottom-[4%] animate-slow-rotate-reverse" src="/assets2/images/try-el-2.png" alt="" />
                    <div className="max-w-7xl mx-auto px-4 container pt-120 pb-120 grid grid-cols-12 gap-6 xl:gap-10 items-center relative z-[2]">
                        <div className="col-span-12 lg:col-span-5"><img src="/get-started-recovery-phrase-lg@2x.png" className="fade_up_anim" alt="" /></div>
                        <div className="col-span-12 lg:col-span-7">
                            <h2 className="fade_up_anim mb-4">How does wallet backup and recovery work?</h2>
                            <div className="fade_up_anim rounded-3xl p-4 lg:p-6 xxl:p-8 bg-accent6 border border-accent4 flex gap-4 flex-wrap items-center justify-between">
                                <div className="max-w-sm">
                                    <h3 className="mb-3">Secure</h3>
                                    <p className="lg:text-lg text-neutral4">First, we need to talk a little bit about how crypto wallets work. Crypto wallets work by holding cryptographic keys that are used to prove you have control over cryptoassets2 on a blockchain. Whenever you wish to do something with your cryptoassets2, you instruct the blockchain and use your private cryptographic key as a sort of digital signature to approve your desired action.</p>
                                </div>
                                <button onClick={() => setModalOpen(true)} className="bg-[#298CF6] hover:bg-[#1C73D5] text-white px-5 xl:px-8 py-2.5 rounded-full font-medium transition-colors whitespace-nowrap">Connect Wallet</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* faq */}
                <section className="bg-accent2 relative overflow-hidden">
                    <div className="max-lg:hidden w-[350px] h-[350px] absolute bottom-[-6%] blur-[85px] left-[-12%] bg-accent1/50"></div>
                    <img className="max-lg:hidden absolute right-[2%] bottom-[3%]" src="/assets2/images/faq-box.png" alt="" />
                    <div className="max-w-7xl mx-auto px-4 container relative z-[2] pt-120 pb-120 grid grid-cols-12 gap-6 xl:gap-10 items-center">
                        <div className="fade_up_anim col-span-12 lg:col-span-5 p-4 lg:p-6 xl:p-8 xxl:px-10 bg-accent5 border border-accent4 rounded-xl">
                            <p className="text-lg font-semibold mb-3">FAQ</p>
                            <h2 className="mb-4">Your questions <span className="h2 underline text-primary">answered.</span></h2>
                            <p className="text-neutral4 mb-6 text-lg xl:mb-10">Let's do our best to answer your most frequently asked questions.</p>
                            <div className="bg-accent6 p-5 rounded-xl">
                                <div className="flex gap-3 flex-wrap min-[420px]:flex-nowrap items-center mb-6">
                                    <div className="size-20 shrink-0 rounded-xl border border-neutral1 f-center">
                                        <div className="size-8 rounded-full bg-primary text-accent5 text-2xl f-center"><i className="ti ti-question-mark"></i></div>
                                    </div>
                                    <div>
                                        <h5 className="mb-3">Still have questions?</h5>
                                        <p className="text-neutral4 text-sm">Can't find the answer you're looking for? Please chat to our friendly team!</p>
                                    </div>
                                </div>
                                <button onClick={() => setModalOpen(true)} className="btn-primary">Connect Wallet</button>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-7 p-4 lg:p-6 xl:p-8 xxl:px-10 bg-accent5 border border-accent4 rounded-xl flex flex-col gap-4 xxl:gap-7">
                            {[
                                {
                                    i: 1,
                                    q: "How can I secure my wallet?",
                                    a: "Set a unique passcode for your wallet.\n\nAlso, make sure the numbers are random. Birthdays, anniversaries, house addresses, and the last digits of your phone number are all popular combinations and are crackable codes to a resourceful criminal."
                                },
                                {
                                    i: 2,
                                    q: "How to backup a crypto wallet?",
                                    a: "1. Export Private Keys/Seed Phrase: Go to your wallet's settings and select the “backup wallet” or “export keys” option.\n\n2. Secure Your Backup: Store backups in multiple secure locations like USB drives, paper copies in fireproof safes, and safety deposit boxes."
                                },
                                {
                                    i: 3,
                                    q: "How to keep bitcoin wallet safe?",
                                    a: "Securing Your Bitcoin: Choosing a Reputable Exchange."
                                },
                                {
                                    i: 4,
                                    q: "How do I trust a safe wallet?",
                                    a: "Back up your wallet.\n\nBe cautious of phishing scams."
                                }
                            ].map(item => (
                                <div key={item.i} className={`fade_up_anim p-4 rounded-xl border border-accent4 cursor-pointer ${faqOpened === item.i ? 'bg-accent6' : ''}`} onClick={() => setFaqOpened(faqOpened === item.i ? 0 : item.i)}>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm lg:text-base xxl:text-xl font-medium">{item.q}</p>
                                        <span className={`size-8 md:size-10 cursor-pointer rounded-full f-center text-lg shrink-0 md:text-2xl duration-300 ${faqOpened === item.i ? 'bg-primary rotate-180' : 'bg-accent6'}`}>
                                            <i className="ti ti-chevron-down"></i>
                                        </span>
                                    </div>
                                    {faqOpened === item.i && (
                                        <div><p className="text-sm lg:text-base xxl:text-lg pt-3 whitespace-pre-line leading-relaxed">{item.a}</p></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Trusted By */}
                <section className="bg-accent5 relative overflow-hidden">
                    <div className="max-lg:hidden w-[250px] h-[250px] absolute bottom-[-6%] blur-[85px] left-[-9%] bg-primary/50"></div>
                    <div className="max-lg:hidden w-[250px] h-[250px] absolute top-[-6%] blur-[85px] right-[-8%] bg-primary/50"></div>

                    <div className="max-w-7xl mx-auto px-4 container pb-120 pt-120 relative z-[2]">
                        <h2 className="text-center mb-10 xl:mb-[60px] fade_up_anim">Trusted by</h2>

                        {/* Marquee 1 */}
                        <div className="brand-slider-one fade_up_anim overflow-hidden relative w-full mb-8">
                            <div className="flex ease-linear animate-marquee-left w-max">
                                {/* Double the items to allow seamless looping */}
                                {[...Array(2)].map((_, idx) => (
                                    <div key={idx} className="flex">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                            <div key={n} className="flex items-center h-20 justify-center px-8 w-[200px]">
                                                <img src={`/assets2/images/brands/item-${n}.png`} alt={`Brand ${n}`} />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Marquee 2 */}
                        <div className="brand-slider-two fade_up_anim overflow-hidden relative w-full">
                            <div className="flex ease-linear animate-marquee-right w-max">
                                {[...Array(2)].map((_, idx) => (
                                    <div key={idx} className="flex">
                                        {[11, 12, 13, 4, 7, 5, 9, 8, 7, 10].map((n, i) => (
                                            <div key={i} className="flex items-center h-20 justify-center px-8 w-[200px]">
                                                <img src={`/assets2/images/brands/item-${n}.png`} alt={`Brand ${n}`} />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <ConnectWalletModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
