import Image from 'next/image'
import React from 'react';
import jump from '../assets/jump.jpg';
import dance from '../assets/dance.jpg'

const How = () => {
    return (
        <main className='flex justify-center w-full mt-[140px] text-white '>
            <section className=' w-[90%] lg:w-full'>
                <h1 className='who font-bold my-[24px] text-center '>HOW IT WORKS</h1>
                <section className='grid lg:grid-cols-2 mt-[80px] grid-cols-1 '>
                    <div className='relative'>
                        <div className='num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] '>
                            01
                        </div>
                        <div className='bigcard h-[468px] ' >
                            <h1 className='subtitle font-bold'>Install Metamask</h1>
                            <p className=' text-[24px] leading-[180%]  '>Download & install the official MetaMask wallet either from the app store on your phone or the browser extension for desktop.</p>
                            <Image src={dance} alt='gonzo' className='w-[159px] mt-[10px] mx-auto rounded-[50%] ' />
                        </div>
                    </div>
                    <div className='relative lg:ml-[50px] '>
                        <div className='num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] '>
                            02
                        </div>
                        <div className='bigcard h-[468px]'>
                            <h1 className='subtitle font-bold'>Add Base Network to Metamask</h1>
                            <div className=' text-[24px] leading-[180%]  '>    Add the following network to MetaMask via &apos;Settings &gt; Networks &gt; Add network&apos;:
                               <p> Network Name: Base</p>
                               <p> RPC Endpoint: https://mainnet.base.org/</p>
                               <p> Chain ID: 8453</p>
                               <p> Currency Symbol: ETH</p>
                                Block Explorer: https://basescan.org</div>
                        </div>
                    </div>
                    <div className='relative my-[110px] '>
                        <div className='num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] '>
                            03
                        </div>
                        <div className='bigcard h-[468px] '>
                            <h1 className='subtitle mb-[15px] font-bold'>Send ETH To Your Wallet</h1>
                            <div className=' text-[24px] leading-[160%]  '>    First, add some Ethereum ETH to your wallet. Next, visit bridge.base.org, connect your wallet to the Ethereum network, then choose how much ETH you wish to bridge from Ethereum to BASE. Remember to leave enough for gas fees.
    <p>Alternatively, you can send BASE ETH from your Coinbase CEX account directly to your private MetaMask wallet.</p></div>
                        </div>
                    </div>
                    <div className='relative my-[110px] lg:ml-[50px]'>
                        <div className='num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] '>
                            04
                        </div>
                        <div className='bigcard h-[468px]'>
                            <h1 className='subtitle font-bold'>Navigate to Uniswap</h1>
                            <p className=' text-[24px] leading-[180%]  '>Visit Uniswap, connect your wallet to the BASE network, paste the DOGGO contract address (listed below) into the &apos;Select token&apos; field, then swap some BASE ETH for DOGGO.</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] '>
                            05
                        </div>
                        <div className='bigcard h-[468px]'>
                            <h1 className='subtitle font-bold'>Display DOGGO In Your Wallet</h1>
                            <p className=' text-[24px] leading-[180%]  '>Finally, for DOGGO to show in your MetaMask wallet, simply paste the DOGGO contract address via MetaMask&apos;s &apos;Tokens &gt; Import tokens&apos; option</p>
                            <Image src={jump} alt='gonzo'  className='w-[159px] mt-[20px] mx-auto rounded-[50%] '  />
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default How