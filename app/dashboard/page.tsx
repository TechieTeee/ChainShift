'use client'
import { motion } from 'framer-motion';

import { BranchIsWalletConnected } from '@/components/shared/branch-is-wallet-connected';
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/config/design';

export default function PageDashboard() {
  return (
    <>
      <motion.div
        className="flex-center flex h-full w-full"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
      >
        <BranchIsWalletConnected>
          <div className="flex-center col-span-12 flex flex-col lg:col-span-9">
            <div className="text-center">
              <h3 className="font-primary text-2xl font-bold lg:text-6xl">
                <span className="text-gradient-secondary">
                  hi 👋 {/* <WalletEnsName /> */}
                </span>
              </h3>
              <span className="font-light">
                {/* <WalletAddress className="mt-5 block text-xl font-light" /> */}
                <div className="mt-4">
                  <span className="font-primary text-3xl font-light">
                    Balance: {/* <WalletBalance decimals={7} className="" /> */} ETH
                  </span>
                </div>
              </span>
            </div>
            <div className="mt-8 flex justify-between">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="/packaging.jpg" alt="Packaging" style={{ width: '100%', height: 'auto' }} />
                <p className="text-sm mt-2 font-bold">Packaging</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="/coffee_maker.jpg" alt="Coffee Maker" style={{ width: '100%', height: 'auto' }} />
                <p className="text-sm mt-2 font-bold">Coffee Maker</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="/baked_goods_suppliers_2.jpg" alt="Baked Goods Suppliers" style={{ width: '100%', height: 'auto' }} />
                <p className="text-sm mt-2 font-bold">Baked Goods Suppliers</p>
              </div>
            </div>
            <h3 className="text-lg font-normal text-center mt-8">
              Connect Wallet to view your personalized dashboard.
            </h3>
          </div>
        </BranchIsWalletConnected>
      </motion.div>
    </>
  );
}

