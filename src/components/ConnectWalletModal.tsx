"use client";

import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectWalletModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 bg-accent2/80 text-neutral1 flex min-h-screen items-center justify-center px-3" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="my-8 w-full max-w-[856px] border border-accent4 overflow-hidden rounded-xl bg-accent5 p-3 sm:p-4 md:p-6 xl:p-8 2xl:p-10"
      >
        <div className="mb-7 xl:mb-10 flex items-center justify-between">
          <div>
            <h3 className="mb-3">Connect Wallet</h3>
            <p className="text-neutral4 lg:text-lg">Gateway to Web3</p>
          </div>
          <button onClick={onClose} className="size-10 rounded-full hover:rotate-180 duration-300 bg-accent4 flex justify-center items-center">
            <i className="ti ti-x text-xl"></i>
          </button>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-6 xl:gap-10 2xl:gap-20 mb-7 xl:mb-10">
            <button
              className="col-span-1 border-b py-1.5 text-base md:text-lg xl:text-2xl font-medium border-secondary"
            >
              Backup Wallet
            </button>
          </div>

          <div>
            <div className="p-4 md:p-6 xl:p-8 rounded-xl border border-accent4 gap-4 flex-wrap flex justify-between items-center mb-6">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <i className="ti ti-shield-lock text-primary text-xl"></i>
                </div>
                <h4>Automatic/Manual backup</h4>
              </div>
              <button
                onClick={onClose}
              >
                <Link href="/wallets?secure">
                  <button className="bg-primary hover:bg-opacity-80 transition rounded-3xl px-5 py-2.5 text-sm xl:text-lg font-medium">Continue</button>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
