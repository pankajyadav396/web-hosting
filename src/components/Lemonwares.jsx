import React, { useState } from 'react'
import { RightIcon } from './Svgs';

const Lemonwares = () => {
    const [toggel, setToggel] = useState(false)
    const Items = [
        { plan: "Starter", price: "$2.80", pricePremium: "$24.80" },
        { plan: "Standard", price: "$4.20", pricePremium: "$48.80" },
        { plan: "Suprem", price: "$7.00", pricePremium: "$99.99" },
    ]
    function Toggel() {
        setToggel(!toggel)
    }
    const [first, setfirst] = useState("tab1")
    function tabchange(tabs) {
        setfirst(tabs)
    } return (
        <div className='container max-w-[1120px] mx-auto px-3 flex flex-col mt-12 sm:mt-16 md:mt-20 lg:mt-[96px]'>
            <div className='flex flex-col max-w-[856px] mx-auto relative'>
                <h2 className='text-black text-center font-poppins font-semibold text-[28px] sm:text-[44px] md:text-[50px] leading-10 sm:leading-[60px] max-w-[650px]'>Ready to get started with Lemon Wares?</h2>
                <p className='text-black font-poppins text-[16px] font-normal text-center leading-[25px] mt-4 sm:mt-[38px]'>Choose the package that suits you</p>
                <div className='flex items-center justify-center  sm:my-[40px] my-[30px] md:my-[57px] gap-0 sm:flex-row'>
                    <p className='text-black font-poppins text-[16px] sm:text-[25px] font-normal text-center leading-[25px]'>Monthly</p>
                    <label onClick={() => Toggel()} className="relative inline-flex items-center cursor-pointer ml-5 mr-4 sm:mx-8">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="group peer ring-0 bg-[#B00000] peer-checked:bg-[yellow] peer-checked:after:bg-yellow  rounded-full outline-none duration-300 after:duration-300 sm:w-[93px] sm:h-[50px] w-[65px] h-[40px]  shadow-md peer-focus:outline-none   after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-[18px] after:w-[18px] sm:after:h-[30px] sm:after:w-[30px] sm:after:top-[9px] after:top-[11px] after:left-[9px] after:-rotate-180 after:flex after:justify-center after:items-center sm:peer-checked:after:translate-x-12 peer-checked:after:translate-x-8 peer-hover:after:scale-95 peer-checked:after:bg-red-400     peer-checked:after:rotate-0">
                        </div>
                    </label>
                    <p className='text-black font-poppins text-[16px] sm:text-[25px]  font-normal text-center  leading-[25px] relative'>Yearly <span className='text-black font-poppins text-[10px] font-medium text-center leading-[9px] text-nowrap bg-[#FFE87A] p-2 rounded-lg sm:ml-4 ml-2'>20%  discount</span></p>
                </div>
                <div className='flex items-center w-full relative after:absolute after:bg-[#C4C4C4] after:w-full after:h-[2px] sm:after:h-1 after:-bottom-[6px] after:left-0 pt-[14px]'>
                    <div className={`${first === "tab1" && "relative after:absolute after:-bottom-[6px] after:z-20 transition duration-300 after:w-full after:h-[2px] sm:after:h-1  after:bg-[#B00000] after:left-0"} w-1/2 flex justify-center`}><button onClick={() => tabchange("tab1")} className={` font-poppins text-xl xs:text-2xl sm:text-[30px] text-black font-semibold !leading-10`}>Basic</button></div>
                    <div className={`${first === "tab2" && "relative after:absolute after:-bottom-[6px] after:z-20 transition duration-300 after:w-full after:h-[2px] sm:after:h-1  after:bg-[#B00000] after:left-0"} w-1/2 flex justify-center`}><button onClick={() => tabchange("tab2")} className=' font-poppins text-xl xs:text-2xl sm:text-[30px] text-black font-semibold !leading-10'>Premium</button></div>
                </div>
            </div>
            {
                first === "tab1" && <div className='grid lg:mb-10 md:grid-cols-3 sm:grid-cols-2 mt-10 sm:mt-16 md:mt-[95px] gap-7 lg:gap-0'>
                    {
                        Items.map((items, index) => (
                            <div key={index} className=' bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] border-[1.5px] border-[#C4C4C4] rounded-2xl lg:max-w-[299px] w-full h-auto'>
                                <div className='p-[34px]'>
                                    {
                                        toggel ? (<div><h2 className=' text-[28px] font-poppins font-semibold text-black leading-6'>{items.price}</h2></div>) : (<div><h2 className=' text-[28px] font-poppins font-semibold text-black leading-6'>{items.plan}</h2></div>)
                                    }
                                    <p className=' font-poppins text-xs font-normal text-black mt-3 leading-[18px]'>with all your customers via all conversation channels in one central dashboard.</p>
                                    <p className=' text-black text-4xl sm:text-[42px] font-semibold font-poppins leading-8 mt-5 md:mt-7 mb-3'>{items.price}</p>
                                    <span className='text-black text-sm font-poppins font-light pt-4'>Per month</span>
                                    <div className='sm:flex items-center justify-center'>
                                        <button className=' text-black font-semibold w-[215px] font-poppins text-sm text-center bg-transparent border-[2px] border-black rounded-xl leading-8 py-[9px] my-6 sm:my-8 md:my-[35px] hover:text-[#fff] hover:shadow-[0px_0px_64px_0px_#b000004d] duration-300 hover:border-transparent hover:bg-[#B00000]'>Choose this Plan</button>
                                    </div>
                                    <div className='flex flex-col sm:flex-row lg:flex-col justify-between sm:justify-around lg:justify-start'>
                                        <div>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-bold gap-4 sm:gap-6'><span><RightIcon /></span>2GB SSD</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>10GB Bandwidth</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>15 Email Accounts</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>Unlimited Database</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>4 Subdomains</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>1 Parked Domain</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>2 Websites</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>Free SSL</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px] mb-[12px]'><span><RightIcon /></span>Softaculous</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
            {
                first === "tab2" && <div className='grid lg:mb-10 md:grid-cols-3 sm:grid-cols-2 mt-10 sm:mt-16 md:mt-[94px] gap-7 lg:gap-0'>
                    {
                        Items.map((items, index) => (
                            <div key={index} className=' bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] border-[1.5px] border-[#C4C4C4] rounded-2xl lg:max-w-[299px] w-full h-auto'>
                                <div className='lg:p-[34px] md:p-[15px] sm:p-[20px] p-[25px]'>
                                    <h2 className=' text-[28px] font-poppins font-semibold text-black leading-6'>{items.plan}</h2>
                                    <p className=' font-poppins text-xs font-normal text-black mt-3 leading-[18px]'>with all your customers via all conversation channels in one central dashboard.</p>
                                    <p className=' text-black text-4xl sm:text-[42px] font-semibold font-poppins leading-8 mt-5 md:mt-7 mb-3'>{items.pricePremium}</p>
                                    <p className='text-black text-sm font-poppins font-light'>Per year</p>
                                    <div className='flex items-center sm:justify-center'>
                                        <button className=' text-black font-semibold font-poppins mx-auto text-sm text-center w-[215px] bg-transparent border-[2px] border-black rounded-xl leading-8 py-[9px] my-6 sm:my-8 md:my-[35px]'>Choose this Plan</button>
                                    </div>
                                    <div className='flex flex-col sm:flex-row lg:flex-col justify-between sm:justify-around lg:justify-start'>
                                        <div>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-bold gap-4 sm:gap-6'><span><RightIcon /></span>2GB SSD</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>10GB Bandwidth</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>15 Email Accounts</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>Unlimited Database</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>4 Subdomains</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>1 Parked Domain</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>2 Websites</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>Free SSL</p>
                                            <p className='flex items-center text-[#808080] text-sm sm:text-base font-inter font-semibold gap-4 sm:gap-6 mt-[15px] mb-[12px]'><span><RightIcon /></span>Softaculous</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Lemonwares