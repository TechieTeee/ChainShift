'use client'

import { motion } from 'framer-motion';
import { BranchIsWalletConnected } from '@/components/shared/branch-is-wallet-connected';
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/config/design';
import { Etherspot } from "@etherspot/react-transaction-buidler";

/**
 * This is all that is needed to get started.
 * To customize this, see the possible props
 * you can pass in the docs.
 */
function RenderEtherspot(props) {
  return <Etherspot />;
}

export default function PageDashboard() {
  const progressValues = [
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
  ];

  return (
    <>
      <motion.div
        className="flex-center flex h-full w-full"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        animate="show"
      >
        <BranchIsWalletConnected>
          <div className="flex-center col-span-12 flex flex-col lg:col-span-9">
            <div className="text-center">
              <h3 className="font-primary text-2xl font-bold lg:text-6xl">
                <span className="text-gradient-secondary">
                  ChainShift Dashboard {/* <WalletEnsName /> */}
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
              <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <img src="/packaging.jpg" alt="Packaging" style={{ width: '100%', height: 'auto' }} />
                <p className="text-sm mt-2 font-bold">Packaging Partner</p>
                <div
                  style={{
                    width: '100%',
                    height: '12px', // Increased height for thicker progress bar
                    background: '#ccc',
                    marginTop: '4px',
                    borderRadius: '6px', // Increased border radius for rounded corners
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${progressValues[0]}%`,
                      height: '100%',
                      background: '#0066ff',
                      position: 'relative',
                    }}
                  >
                    <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      {progressValues[0]}%
                    </span>
                  </div>
                </div>
                <a href="https://create.request.network/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2">
                    Request Pre-Payment
                  </button>
                </a>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <img
                  src="/coffee_maker.jpg"
                  alt="Coffee Farming Co-Op Partner"
                  style={{ width: '100%', height: 'auto' }}
                />
                <p className="text-sm mt-2 font-bold">Coffee Farming Co-Op</p>
                <div
                  style={{
                    width: '100%',
                    height: '12px', // Increased height for thicker progress bar
                    background: '#ccc',
                    marginTop: '4px',
                    borderRadius: '6px', // Increased border radius for rounded corners
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${progressValues[1]}%`,
                      height: '100%',
                      background: '#0066ff',
                      position: 'relative',
                    }}
                  >
                    <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      {progressValues[1]}%
                    </span>
                  </div>
                </div>
                <a href="https://create.request.network/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2">
                    Request Pre-Payment
                  </button>
                </a>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <img
                  src="/baked_goods_suppliers_2.jpg"
                  alt="Baked Goods Suppliers"
                  style={{ width: '100%', height: 'auto' }}
                />
                <p className="text-sm mt-2 font-bold">Local Bakery Supplier</p>
                <div
                  style={{
                    width: '100%',
                    height: '12px', // Increased height for thicker progress bar
                    background: '#ccc',
                    marginTop: '4px',
                    borderRadius: '6px', // Increased border radius for rounded corners
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${progressValues[2]}%`,
                      height: '100%',
                      background: '#0066ff',
                      position: 'relative',
                    }}
                  >
                    <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      {progressValues[2]}%
                    </span>
                  </div>
                </div>
                <a href="https://create.request.network/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2">
                    Request Pre-Payment
                  </button>
                </a>
              </div>
            </div>
            <h3 className="text-lg font-normal text-center mt-8">
              <b>Bridge Your Assets</b> {/* Updated text */}
            </h3>
            <RenderEtherspot /> {/* Etherspot component */}
          </div>
        </BranchIsWalletConnected>
      </motion.div>
    </>
  );
}
