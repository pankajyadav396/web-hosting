import React, { useState } from 'react'
import main from '/src/assets/images/hero-img.webp'

const Tabsmainsec = () => {
    // tabs
    const [data, setdata] = useState("tab1")
    function tabs(tab) {
        setdata(tab);
    }
    return (
        <div className=' max-w-[1200px] px-3 mx-auto sm:pt-[69px] pt-[30px] pb-[50px] sm:pb-[79px]'>
            <div className='flex flex-row max-md:flex-col-reverse -mx-3 flex-wrap'>
                <div className='w-full md:w-1/2 px-3'>
                    <div className='flex gap-4 relative'>
                        <span className='border-bottom-1 absolute h-[1px] w-[215px] bottom-[-1.7px] rounded bg-[#E5E5E5]'></span>
                        <p onClick={() => tabs('tab1')} className={`${data === "tab1" && " !text-[#b00000] relative before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:bottom-[-10%] before:ease-linear before:w-[77%] before:left-[6px]"} text-[15px] font-semibold font-poppins text-[#dbd9d9] tracking-normal cursor-pointer`}>Hosting</p>
                        <p onClick={() => tabs('tab2')} className={`${data === "tab2" && " !text-[#b00000] relative before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:bottom-[-10%] before:ease-linear before:w-[77%] before:left-[6px]"} text-[15px] font-semibold font-poppins text-[#dbd9d9] tracking-normal cursor-pointer`}>Domain</p>
                        <p onClick={() => tabs('tab3')} className={`${data === "tab3" && " !text-[#b00000] relative before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:bottom-[-10%] before:ease-linear before:w-[77%] before:left-[3px]"} text-[15px] font-semibold font-poppins text-[#dbd9d9] tracking-normal cursor-pointer`}>SEO </p>
                        <p onClick={() => tabs('tab4')} className={`${data === "tab4" && " !text-[#b00000] relative before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:bottom-[-10%] before:ease-linear before:w-[77%] before:left-[5px]"} text-[15px] font-semibold font-poppins text-[#dbd9d9] tracking-normal cursor-pointer`}>Email</p>
                    </div>
                    {data === "tab1" && <div className='pt-7'>
                        <h2 className='text-[35px] sm:text-[55px] md:text-[50px] lg:text-[64px] font-bold font-poppins leading-[40px] sm:leading-[77px] text-[#2E2E2E] max-w-[608px]'>Premium Web Hosting for Your Website</h2>
                        <p className=' text-base font-normal leading-7 font-inter text-[#808080] max-w-[448px] pt-8 tracking-[0.8px]'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                        <div className='sm:pt-14 pt-8 flex gap-6'>
                            <button className='hover:shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] font-normal hover: text-[12px] sm:text-[14px] text-nowrap leading-6 font-poppins text-black border border-[#000] hover:border-transparent hover:border p-3 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Create an Account</button>
                            <button className='hover:shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] font-normal hover: text-[12px] sm:text-[14px] text-nowrap leading-6 font-poppins text-black border border-[#000] hover:border-transparent hover:border p-3 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Choose your plan</button>
                        </div>
                    </div>}
                    {data === "tab2" && <div className='pt-7'>
                        <h2 className=' text-[35px] sm:text-[55px] md:text-[50px] lg:text-[64px] font-bold font-poppins leading-[40px] sm:leading-[77px] text-[#2E2E2E] max-w-[608px]'>Premium Web for Your Website</h2>
                        <p className=' text-base font-normal leading-7 font-inter text-[#808080] max-w-[448px] pt-8 tracking-[0.8px]'>Blazing fast web hosting for individuals and businessesd by 24x7x365 Support.</p>
                        <div className=' sm:pt-14 flex gap-6 pt-8 '>
                            <button className=' font-normal text-[12px] sm:text-[14px] text-nowrap leading-6 font-poppins text-black border border-[#000] hover:border-transparent hover:border p-3 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Create an Account</button>
                            <button className=' font-normal text-[12px] sm:text-[14px] text-nowrap leading-6 font-poppins text-black border border-[#000] hover:border-transparent hover:border p-3 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Choose your plan</button>
                        </div>
                    </div>}
                    {data === "tab3" && <div className=' pt-7'>
                        <h2 className=' text-[35px] sm:text-[55px] md:text-[50px] lg:text-[64px] font-bold font-poppins leading-[40px] sm:leading-[77px] text-[#2E2E2E] max-w-[608px]'>Premium Web Hosting for Yo</h2>
                        <p className=' text-base font-normal leading-7 font-inter text-[#808080] max-w-[448px] pt-8 tracking-[0.8px]'>Blazing fast web hosting for individuals and businesses of all sizes backed</p>
                        <div className=' sm:pt-14 pt-8 flex gap-6'>
                            <button className=' font-normal text-[12px] sm:text-[14px] text-nowrap leading-6 font-poppins text-black border border-[#000] hover:border-transparent hover:border p-3 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Create an Account</button>
                            <button className=' font-normal text-[12px] sm:text-[14px] text-nowrap leading-6 font-poppins text-black border border-[#000] hover:border-transparent hover:border p-3 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Choose your plan</button>
                        </div>
                    </div>}
                    {data === "tab4" && <div className=' pt-7'>
                        <h2 className=' text-[35px] sm:text-[55px] md:text-[50px] lg:text-[64px] font-bold font-poppins leading-[40px] sm:leading-[77px] text-[#2E2E2E] max-w-[608px]'>Premium Web Hosting f Website</h2>
                        <p className=' text-base font-normal leading-7 font-inter text-[#808080] max-w-[448px] pt-8 tracking-[0.8px]'>Blazing fast web hosting for  and businesses of all sizes backed  Support.</p>
                        <div className=' sm:pt-14 flex gap-6 pt-8 flex'>
                            <button className=' font-normal text-[12px] sm:text-[14px] text-nowrap leading-6 font-poppins text-black border border-[#000] hover:border-transparent hover:border p-3 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Create an Account</button>
                            <button className=' font-normal text-[12px] sm:text-[14px] text-nowrap leading-6 font-poppins text-black border border-[#000] hover:border-transparent hover:border p-3 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Choose your plan</button>
                        </div>
                    </div>}
                </div>
                <div className='w-full md:w-1/2 px-3 max-md:mb-8'>
                    <img src={main} alt="main" />
                </div>
            </div>

        </div>
    )
}

export default Tabsmainsec