'use client'
import React, { Component } from 'react'
import Link from 'next/link'

export default class ScheduleCall extends Component {
    render() {
        const currentMonthNumber = (new Date()).getMonth()+1;
        const currentMonthNumberWithPrefix = currentMonthNumber < 10 ? '0' + currentMonthNumber  : currentMonthNumber;
        return (
            <div className='gap-4 p-4 border rounded-md shadow-lg'>
                {/* <div className="flex items-center justify-center gap-2 pb-4">
                    <div className="text-sm">I'm Available</div>
                </div> */}
                    <div className="flex justify-between gap-4">
                        <Link target="_blank" className='relative duration-200 ease-in-out hover:scale-105' href={'https://www.linkedin.com/in/evangelina-p-60845416b/'}>
                            {/* <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div> */}
                            <span class="   flex h-3 w-3  absolute top-0 right-0">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <img src={'/assets/schedule-call.webp'} className="w-[70px] h-[70px] rounded-full bg-slate-400" />
                        </Link>
                        <div className='w-2/3'>
                        <Link target="_blank" className='hover:underline' href={'https://www.linkedin.com/in/evangelina-p-60845416b/'}>
                            <div className="flex items-center gap-2 font-semibold">
                                <div>Evangelina P. </div>
                                    <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" className='w-4 h-4' alt="linkedinimg" />
                            </div>
                        </Link>
                            <div className='mt-[3px] text-sm'>
                                <div>Team Lead</div>
                                <div className='flex items-start gap-2 text-xs'>Business Development </div>
                            </div>
                        </div>
                    </div>
                <div className='p-3 text-sm text-center'>
                Would you like to connect?
                </div>
                <Link href={'https://calendly.com/congruencemarketinsights/15min?back=1&month=2024-'+currentMonthNumberWithPrefix} target='_blank' className="inline-flex items-center justify-center font-semibold codepen-button">
                    <span className='flex items-center justify-center py-2 text-center'>
                        Schedule a Call
                    </span>
                </Link>
            </div>
        )
    }
}
