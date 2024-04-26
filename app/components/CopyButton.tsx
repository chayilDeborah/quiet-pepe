"use client"
import React, { useState, useRef } from 'react';

const CopyButton: React.FC = () => {
    const [textToCopy, setTextToCopy] = useState("I AM HERE");
    const buttonRef = useRef<HTMLButtonElement>(null);

    const copyText = () => {
        if (buttonRef.current) {
            navigator.clipboard.writeText(textToCopy);
            // Optionally, you can provide visual feedback that the text has been copied
            buttonRef.current.innerText = "Copied!";
            setTimeout(() => {
                buttonRef.current!.innerText = "COPY";
            }, 1000);
        }
    };

    return (
        <main>
            <section className='flex justify-between text-[18px] leading-[150%] mb-[32px] font-bold  bg-[#3A80FE] lg:w-[796px] h-[70px] copybg'>
                <p className='pt-[20px] pl-[10px] lg:pl-[24px] text-[13px] lg:text-[16px] '>The contract address will be added here</p>
                <button ref={buttonRef} onClick={copyText} className="bg-[#00B700] w-[78px] lg:w-[101px] h-[54px] text-white text-[13px] lg:text-[16px] leading-[140%] font-bold rounded-[12px] copybtn mt-[5px] mr-[5px] f">
                    COPY
                </button>
            </section>
        </main>
    );
};

export default CopyButton;
