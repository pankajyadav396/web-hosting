import React from 'react';
import footerlogo from "../assets/images/footer-logo.webp"

const Footer = () => {
    return (
        <>
            <div className='bg-red-700' id='services'>
                <div className='max-w-[1244px] mx-auto px-3 py-[80px]'>
                    <div className='flex flex-wrap flex-row -mx-3'>
                        <div className=' lg:w-1/3 w-full px-3'>
                            <img src={footerlogo} alt="footerlogo" />
                            <p className="max-w-[296px] text-neutral-200 text-base font-normal font-Inter leading-loose pt-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                        </div>
                        <div className='lg:w-2/3 w-full pt-10 px-3'>
                            <div className='flex flex-wrap flex-row -mx-3'>
                                <ul className='w-1/2 md:w-1/4 px-3'>
                                    <li className='text-white sm:text-base text-[14px] font-bold font-inter leading-normal'>Service</li>
                                    <li className=" pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Domain</a></li>
                                    <li className=" pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Shared Hosting</a></li>
                                    <li className=" pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Cloud Hosting</a></li>
                                    <li className=" pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Private Hosting</a></li>

                                </ul>
                                <ul className='w-1/2 md:w-1/4 px-3'>
                                    <li className='text-white sm:text-base text-[14px] font-bold font-inter leading-normal'>Hosting</li>
                                    <li className="https://i.ibb.co/S0vtpLs/Screenshot-CRAPPO.png pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Cheap Hosting</a></li>
                                    <li className=" pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Hosting Wordpress</a></li>
                                    <li className=" pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Email Hosting</a></li>
                                    <li className=" pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Hosting Unlimited</a></li>
                                </ul>
                                <ul className='w-1/2 md:w-1/4 px-3  pt-8 md:pt-0    '>
                                    <li className='text-white sm:text-base text-[14px] font-bold font-inter leading-normal'>Company</li>
                                    <li className=" pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>About</a></li>
                                    <li className=" pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Career</a></li>
                                    <li className=" pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Contact Us</a></li>
                                </ul>
                                <ul className='w-1/2 md:w-1/4 px-3 pt-8 md:pt-0 '>
                                    <li className='text-white sm:text-base text-[14px] font-bold font-inter leading-normal'>Help</li>
                                    <li className=" pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>FAQ</a></li>
                                    <li className=" pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-inter leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[0%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Help support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className='text-white text-[12px] sm:text-base font-normal font-inter leading-loose flex items-center pt-[90px]' >Built by Jeremiah with &#129293; in Lagos. Copyright 2021</p>
                </div>
            </div>
        </>
    )
}

export default Footer;