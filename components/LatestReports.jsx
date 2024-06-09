'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import axios from 'axios';
import { apiUrl, toCapitalCase } from '@/constants';
import { notifyError, notifySuccess } from '@/utils/CustomToastContainer';
import CustomToastContainer from '@/utils/CustomToastContainer';
import { motion } from "framer-motion"
export default function LatestReports() {


    const [my_swiper, set_my_swiper] = useState({});
    const [reportList, setReportList] = useState([]);


    useEffect(() => {
        axios.get(`${apiUrl}/reports/latest?page=1&per_page=12`).then(res => {
            if (res.data.data.length) {
                let repList = [];
                let rep = []
                res.data.data.forEach(r=>{
                    rep.push(r);
                    if(rep.length == 2){
                        repList.push(rep);
                        rep = [];
                    }
                })
                setReportList(repList)
            } else {
                setReportList([])
                notifyError('No latest reports')
            }
        })
    }, []);

    return (
        <div className='relative overflow-clip'>
            <CustomToastContainer />
            {/* <img loading='lazy' src={"/assets/reseller/b4.jpeg"} alt="bgimg2" className='absolute hidden w-full text-black -z-10 md:block blur-md' /> */}
            <div className="z-10 py-12 mx-auto max-w-8xl md:pt-10 sm:px-6">
                <div className='mb-8 text-3xl font-extrabold text-center'>Latest Reports</div>
                <motion.div initial={{ opacity: 0, y: '25%' }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                    
                    <div className="flex items-center justify-between mt-6">
                        <Swiper
                            onInit={(ev) => {
                                set_my_swiper(ev)
                            }}
                            // slidesPerView={2}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                400: {
                                    slidesPerView: 1,
                                },
                                639: {
                                    slidesPerView: 2,
                                },
                                865: {
                                    slidesPerView: 3
                                },
                            }}
                            onSlideChange={() => { }}
                            onSwiper={(swiper) => { }}
                        >

                            {reportList.map((val, index) =>
                                <SwiperSlide key={index}>
                                    <div className="mx-2 border rounded-md shadow-lg md:h-52 md:flex overflow-clip">
                                        <div className="flex items-center justify-center bg-white md:w-2/5 h-[200px] overflow-clip md:h-auto md:p-0 text-slate-400">
                                            <img loading="lazy" className='object-contain' src={val[0].cover_img} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between p-4 text-sm md:text-justify md:w-3/5">
                                            <div>
                                                <div className='mb-2 font-bold'>
                                                    {/* {toCapitalCase(val[0].url)} */}
                                                    {val[0].title?.split('Market')[0] + ' Market'}
                                                </div>
                                                <div className='line-clamp-4 max-h-[100px] overflow-hidden'>
                                                    {val[0].summary}
                                                </div>
                                            </div>
                                            <div className='flex justify-center mt-8 md:mt-0 md:justify-end'>
                                                <Link href={`/report/${val[0].url}`}>
                                                    <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all border border-transparent rounded-md bg-primary hover:bg-quaternary focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                                                        Read Me
                                                    </button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-2 mt-8 border rounded-md shadow-lg md:h-52 md:flex overflow-clip">
                                        <div className="flex items-center justify-center bg-white md:w-2/5 h-[200px] overflow-clip md:h-auto md:p-0 text-slate-400">
                                            <img loading="lazy" className='object-contain' src={val[1].cover_img} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between p-4 text-sm md:text-justify md:w-3/5">
                                            <div>
                                                <div className='mb-2 font-bold'>
                                                    {/* {toCapitalCase(val.url)} */}
                                                    {val[1].title?.split('Market')[0] + ' Market'}
                                                </div>
                                                <div className='line-clamp-4 max-h-[100px] overflow-hidden'>
                                                    {val[1].summary}
                                                </div>
                                            </div>
                                            <div className='flex justify-center mt-8 md:mt-0 md:justify-end'>
                                                <Link href={`/report/${val[1].url}`}>
                                                    <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all border border-transparent rounded-md bg-primary hover:bg-quaternary focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                                                        Read Me
                                                    </button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                    <div className="flex items-center justify-center ">
                        <div class="flex flex-1 max-w-lg px-4 py-3 mt-6  sm:px-6">
                            <div class="flex justify-between flex-1 sm:hidden">
                                <button type="button" onClick={() => { my_swiper.slidePrev(); }} class="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50" data-id="pagination-prev" ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Previous</button>
                                <button type="button" onClick={() => { my_swiper.slideNext(); }} class="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl   font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 " data-id="pagination-next">Next <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
                            </div>
                            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div class="relative z-0 flex justify-between w-full -space-x-px rounded-md" aria-label="Pagination">
                                    <button type="button"  onClick={() => { my_swiper.slidePrev(); }} class="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 sm:rounded-l-md" data-id="pagination-prev" ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Previous</button>
                                    <button type="button" onClick={() => { my_swiper.slideNext(); }} class="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl   font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 sm:rounded-r-md" data-id="pagination-next">Next <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )

}
