import React from 'react';
import serve1 from "../assets/images/gray-img1.webp";
import serve2 from "../assets/images/gray-img2.webp";
import serve3 from "../assets/images/gray-img3.webp";
import serve4 from "../assets/images/gray-img4.webp";
import serve5 from "../assets/images/gray-img5.webp";
import serve6 from "../assets/images/gray-img6.webp";

const Serve = () => {
    return (
        <>
            <div className=' max-w-[1280px] mx-auto px-3 py-10 container'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='w-full lg:w-1/2 px-3'>
                        <h2 className="max-w-[445px] text-zinc-900 sm:text-[40px] text-[30px] md:text-[48px] font-extrabold font-Inter sm:leading-[50px] leading-[43px] md:leading-[64px]">We serve over 100 Nigerian Websites</h2>
                        <p className="max-w-[400px] text-zinc-900 sm:text-lg text-base font-normal font-Inter leading-loose">Connect LemonWares with your favourite tools that you use daily and keep things on track.<br /><br /></p>
                    </div>
                    <div className='w-full lg:w-1/2 px-3'>
                        <div className='flex flex-wrap flex-row -mx-3 sm:mt-[-12px]'>
                            <div className='sm:w-1/3 w-1/2 px-3'>
                                <img className='' src={serve3} alt="cloud1" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3'>
                                <img className='' src={serve1} alt="cloud1" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3'>
                                <img className='' src={serve2} alt="cloud1" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3'>
                                <img className='' src={serve4} alt="cloud1" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3'>
                                <img className='' src={serve5} alt="cloud1" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3'>
                                <img className='' src={serve6} alt="cloud1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Serve;