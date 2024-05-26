'use client'
import React, { Component, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { notifyError } from '@/utils/CustomToastContainer';
import CustomToastContainer from '@/utils/CustomToastContainer';
{/* <CustomToastContainer /> */ }
import { getCategories } from '@/constants';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Search() {
    const router = useRouter()
    const [categories, setCategories] = useState([]);
    const [keyword, setKeyword] = useState('');


    const handleEnterSearch = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    const handleSearch = () => {
        if (keyword) {
            router.push(`/search/${keyword}`)
        } else {
            notifyError('Enter search keyword')
        }
    }


    const getCategoryList = () => {
        getCategories().then(data => {
            setCategories(data)
        });
    }
    useEffect(() => {
        getCategoryList();
    }, [])


    return (
        // <div className={`mx-auto h-[90vh] bg-cover bg-bottom flex justify-center items-center`} style={{ backgroundImage: `url(/world-background.jpg)` }}>
        // <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient-to-bl from-blue-900 to-blue-500 text-white`}>
        // <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient-0 text-white`}>
        // <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient-45 text-white`}>
        <div className={`relative mx-auto py-12 md:h-[75vh] bg-cover overflow-clip bg-bottom flex justify-center items-center bg-gradient text-white`}>
            {/* <video className='absolute bottom-0 z-10 hidden w-full brightness-[0.4] md:block' autoPlay muted loop id="myVideo">
                <source data-src={"/assets/sample.webm"} type="video/mp4" src={"/assets/sample.webm"} />
            </video>
            <video className='absolute top-0 z-10 block w-full brightness-[0.4] md:hidden' autoPlay muted loop id="myVideo">
                <source data-src={"/assets/sample_vertical.webm"} type="video/mp4" src={"/assets/sample_vertical.webm"} />
            </video> */}

            <div className='z-10 flex flex-col gap-8 px-4 text-center md:px-16 md:gap-8'>
               
            <div className='relative flex items-center justify-center gap-4 pt-4' >
                    <div className='hidden md:block w-1/4 h-[2px] bg-white'>
                    </div>
                    <div className='text-xl text-center'>
                        Browse By Industry
                    </div>
                    <div className='hidden md:block w-1/4 h-[2px] bg-white'>
                    </div>
                </div>
                <div className='md:h-20'>
                    <motion.div initial={{ opacity: 0, y: '25%' }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }}>
                        <div className='grid items-start justify-center w-full grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-14'>
                        {
                                categories.map((res, index) => (
                                    <Link key={index} href={`/reports/${res.url}`}>
                                        <div className='flex flex-col items-center gap-1 mb-2 duration-200 hover:scale-125 hover:font-semibold'>
                                            <img loading="lazy" src={'/assets/' + res.icon} alt='category-icon' className="flex justify-center w-6 duration-100 "></img>
                                            <div className="text-center mx-1 text-[8px] md:text-[10px] w-20">{res.name}</div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </motion.div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-between overflow-hidden bg-white rounded-lg focus-within:shadow-lg'>
                        <div className="flex items-center">
                            <div className="grid w-12 h-full text-gray-300 place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                className="h-full pr-2 text-gray-700 outline-none w-[100px] text-xs  md:text-sm md:w-[400px]"
                                type="text"
                                id="search"
                                value={keyword}
                                onKeyDown={handleEnterSearch}
                                onChange={(e) => setKeyword(e.target.value)}
                                placeholder="Search reports.." />
                        </div>
                        {/* <button className='px-8 m-1 text-sm font-bold tracking-wide text-white rounded-md bg-primary'>Search</button> */}
                        <button onClick={handleSearch}>
                            <div className="codepen-button"><span className='px-6 py-2'>Search</span></div>
                        </button>

                    </div>
                </div>
                
                <div className="mt-3 text-3xl tracking-widest uppercase md:text-2xl" >
                    Decision with Precision
                </div>
            </div>
            <CustomToastContainer />
        </div>
    )
}