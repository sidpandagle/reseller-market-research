'use client'
import React from 'react'

export default function OfferingMain() {
    
    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

  return (
    <div>
        <h1 className='fixed text-transparent'>Offerings</h1>
            <div className='flex justify-between max-w-screen-xl gap-2 px-4 py-4 mx-auto md:gap-8 lg:py-12 lg:px-6'>
                <div className='w-1/3 duration-200 cursor-pointer md:hover:scale-95'>
                    <div onClick={() => scrollTo('section-1')} className='overflow-clip relative md:p-8 p-4 text-xs md:text-3xl font-bold  rounded-md flex justify-center md:justify-end items-end text-white h-20 md:h-[360px]'>
                        <img loading="lazy" className='absolute top-0 right-0 object-cover h-full w-100 -z-10 ' src="/assets/blurry/syndicate1.webp" alt="" />
                        <span className='z-10'>Syndicate</span>
                    </div>
                </div>
                <div className='w-1/3 duration-200 cursor-pointer md:hover:scale-95'>
                    <div onClick={() => scrollTo('section-2')} className='overflow-clip relative md:p-8 p-4 text-xs md:text-3xl font-bold  rounded-md flex justify-center md:justify-end items-end text-white h-20 md:h-[360px]'>
                        <img loading="lazy" className='absolute top-0 right-0 object-cover h-full w-100 -z-10 ' src="/assets/others/custom.webp" alt="" />
                        <span className='z-10'>Custom</span>
                    </div>
                </div>
                <div className='w-1/3 duration-200 cursor-pointer md:hover:scale-95'>
                    <div onClick={() => scrollTo('section-3')} className='overflow-clip relative md:p-8 p-4 text-xs md:text-3xl font-bold  rounded-md flex justify-center md:justify-end items-end text-white h-20 md:h-[360px]'>
                        <img loading="lazy" className='absolute top-0 right-0 object-cover h-full w-100 -z-10 ' src="/assets/others/consulting1.webp" alt="" />
                        <span className='z-10'>Consulting</span>
                    </div>
                </div>
            </div>
            <section id='section-1' className="bg-gray-50 -800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-12 lg:px-6">
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg -400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">Unlock industry reports and shared insights</h2>
                            <p className="mb-2 font-light lg:text-xl">Access our syndicated reports for comprehensive industry insights, trends, and market analysis tailored for diverse sectors and businesses.</p>
                            <ul role="list" className="space-y-5 my-7 -700">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Detailed industry reports
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Trend analysis for market landscapes

                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Insights into specific sector data

                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Current market scenario evaluation

                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Customizable access to shared industry insights


                                    </span>
                                </li>
                            </ul>
                            <p className="mb-2 font-light lg:text-xl">Syndicate report service offers ready-to-access industry reports, providing crucial insights for businesses navigating dynamic market environments</p>
                        </div>
                        <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src='/assets/blurry/syndicate2.webp' alt="dashboard feature image" />
                    </div>
                </div>
            </section>
            <section id='section-2' className="bg-gray-50 -800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-12 lg:px-6">

                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/others/custom2.webp'} alt="feature image 2" />
                        <div className="text-gray-500 sm:text-lg -400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">Tailored research solutions for unique business needs</h2>
                            <p className="mb-2 font-light lg:text-xl">Our custom research solutions offer personalized data analysis, in-depth market research, and strategic insights aligned with your specific business requirements.</p>
                            <ul role="list" className="space-y-5 my-7 -700">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Tailored market research solutions

                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">In-depth analysis based on client needs
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">Customized trend and market analysis
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">Strategic insights tailored to your business
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">Flexible research methodologies
                                    </span>
                                </li>
                            </ul>
                            <p className="font-light lg:text-xl">Custom research service provides tailored insights, crafted to meet the unique needs of your business strategy and growth</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='section-3' className="bg-gray-50 -800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-12 lg:px-6">
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg -400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">Expert guidance for data-driven business strategies</h2>
                            <p className="mb-2 font-light lg:text-xl">Engage with our consulting services for expert advice, strategic planning, and actionable recommendations based on our in-depth market analysis.</p>
                            <ul role="list" className="space-y-5 my-7 -700">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Strategic advisory services

                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        In-depth market analysis

                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Actionable business recommendations

                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Expert guidance for growth strategies

                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Customized consulting solutions

                                    </span>
                                </li>
                            </ul>
                            <p className="mb-2 font-light lg:text-xl">Consulting services offer expert guidance and actionable strategies derived from comprehensive market analysis to drive your business growth.</p>
                        </div>
                        <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/others/consulting2.webp'} alt="dashboard feature image" />
                    </div>
                </div>
            </section>
        </div>
  )
}
