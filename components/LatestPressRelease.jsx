'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { apiUrl, toCapitalCase } from '@/constants';
import { notifyError, notifySuccess } from '@/utils/CustomToastContainer';
import CustomToastContainer from '@/utils/CustomToastContainer';
import moment from 'moment';
import { motion } from "framer-motion"

export default function LatestPressRelease() {

    const [pressReleaseList, setPressReleaseList] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}/press_release/latest?page=1&per_page=4`).then(res => {
            let reportList = res.data.data;
            if (reportList.length) {
                setPressReleaseList(reportList)
            } else {
                setPressReleaseList([])
                notifyError('No latest reports')
            }
        })
    }, []);

    return (
        <div className="relative py-12 overflow-clip">
            <CustomToastContainer />
            <img loading='lazy' src={"/assets/reseller/b4.webp"} alt="bgimg2" className='absolute top-0 hidden w-full text-black -z-10 md:block blur-md' />
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
                <div className="mx-auto text-center ">
                    <h2 className="mb-6 text-3xl font-extrabold text-slate-600">Latest Press Release</h2>

                    <motion.div
                        initial={{ opacity: 0, y: '25%' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className='flex flex-col flex-wrap justify-between md:gap-0 md:flex-row'>
                            {pressReleaseList.map((res, i) => {
                                return (
                                    <div key={i} className="p-4 md:w-1/2">
                                        {/* <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }}> */}
                                        <div className="text-left border rounded-md md:flex ">
                                            <div className='flex items-center justify-center md:w-2/5 rounded-s-md rounded-e-md md:rounded-e-none overflow-clip'>
                                                <img loading="lazy" src={res.cover_img.replace('/upload/','/upload/h_400/q_50/')} className='object-cover w-full h-48' alt="cover_img" />
                                            </div>
                                            <div className="relative flex flex-col p-4 text-sm md:w-3/5">
                                                <div className='text-xs font-semibold text-right'>
                                                    {moment(res.created_date).format('Do MMM YYYY')}
                                                </div>
                                                <div className='py-2 font-semibold'>
                                                    {toCapitalCase(res.url)}
                                                </div>
                                                <div className='h-12 mb-8 text-xs md:text-justify'>
                                                    {res.summary.split('').filter((r, i) => i < 150).join('').split(' ').slice(0, -1).join(' ')}...
                                                </div>
                                                <div className='absolute bottom-[-10px] right-[35%] md:right-[20px] flex justify-center md:justify-end'>
                                                    <Link href={`/press-release/${res.url}`}>
                                                        <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all border border-transparent rounded-md bg-primary hover:bg-quaternary focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                                                            Read Me
                                                        </button>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                        {/* </motion.div> */}
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
