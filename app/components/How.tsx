import Image from 'next/image'
import React from 'react';
import jump from '../assets/jump.png';
import dance from '../assets/dance.png'

const How = () => {
    return (
        <main className='flex justify-center w-full mt-[110px] lg:mt-[200px] text-white overflow-hidden ' id='how'>
            <section className='w-full'>
                <h1 className='who lg:mb-[95px] mb-[35px] font-bold mt-[45px] text-center ' data-aos="fade-up">HOW TO BUY</h1>
                <section className='grid lg:grid-cols-2 mt-[112px] lg:w-[97%] w-[90%] mx-auto pb-[15px] lg:mt-[140px] grid-cols-1 '>
                    <div className='relative'  data-aos="fade-up" data-duration="1400">
                        <div className='num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] '>
                            01
                        </div>
                        <div className='bigcard h-[468px] ' >
                            <h1 className='subtitle font-bold'>Install Metamask</h1>
                            <p className='text-[16.9px] lg:text-[22px] leading-[180%]  '>Download & install the official MetaMask wallet either from the app store on your phone or the browser extension for desktop.</p>
                            <Image src={dance} alt='gonzo' className='w-[159px] mt-[20px] mx-auto rounded-[50%] ' />
                        </div>
                    </div>
                    <div className='relative lg:ml-[50px] mt-[150px] lg:mt-[0px] '  data-aos="fade-up" data-duration="1500">
                        <div className='num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] '>
                            02
                        </div>
                        <div className='bigcard lg:h-[468px] h-[505px]'>
                            <h1 className='subtitle font-bold'>Add Base Network to Metamask</h1>
                            <div className='text-[16.9px] lg:text-[22px] leading-[180%]  '>    Add the following network to MetaMask via &apos;Settings &gt; Networks &gt; Add network&apos;:
                               <p> Network Name: Base</p>
                               <p> RPC Endpoint: https://mainnet.base.org/</p>
                               <p> Chain ID: 8453</p>
                               <p> Currency Symbol: ETH</p>
                                Block Explorer: https://basescan.org</div>
                        </div>
                    </div>
                    <div className='relative mt-[150px] lg:my-[110px] '  data-aos="fade-up" data-duration="1600">
                        <div className='num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] '>
                            03
                        </div>
                        <div className='bigcard h-[525px] lg:h-[468px] '>
                            <h1 className='subtitle mb-[15px] font-bold'>Send ETH To Your Wallet</h1>
                            <div className='text-[16.9px] lg:text-[22px] leading-[160%]  '>    First, add some Ethereum ETH to your wallet. Next, visit bridge.base.org, connect your wallet to the Ethereum network, then choose how much ETH you wish to bridge from Ethereum to BASE. Remember to leave enough for gas fees.
    <p>Alternatively, you can send BASE ETH from your Coinbase CEX account directly to your private MetaMask wallet.</p></div>
                        </div>
                    </div>
                    <div className='relative mt-[150px] lg:my-[110px] lg:ml-[50px]'  data-aos="fade-up" data-duration="1700">
                        <div className='num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] '>
                            04
                        </div>
                        <div className='bigcard h-[468px]'>
                            <h1 className='subtitle font-bold'>Navigate to Uniswap</h1>
                            <p className='text-[16.9px] lg:text-[22px] leading-[180%]  '>Visit Uniswap, connect your wallet to the BASE network, paste the GONZO contract address (listed below) into the &apos;Select token&apos; field, then swap some BASE ETH for GONZO.</p>
                        </div>
                    </div>
                    <div className='relative mt-[150px] lg:mt-[0px] '  data-aos="fade-up" data-duration="1800">
                        <div className='num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] '>
                            05
                        </div>
                        <div className='bigcard h-[520px] lg:h-[468px]'>
                            <h1 className='subtitle font-bold'>Display GONZO In Your Wallet</h1>
                            <p className='text-[16.9px] lg:text-[22px] leading-[180%]  '>Finally, for GONZO to show in your MetaMask wallet, simply paste the GONZO contract address via MetaMask&apos;s &apos;Tokens &gt; Import tokens&apos; option</p>
                            <Image src={jump} alt='gonzo'  className='w-[159px] -mt-[12px] mx-auto rounded-[50%] '  />
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default How