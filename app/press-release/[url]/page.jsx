import React from 'react'
import { apiUrl, toCapitalCase } from '@/constants';
import moment from 'moment';
import Link from 'next/link';
import PressReleaseRequestSample from '../../../components/PressReleaseRequestSample'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params, searchParams }, parent) {
    const url = params.url
    const pr = await fetch(`${apiUrl}/press_release/meta/${url}`);
    const response = await pr.json();
    const siteURL = 'https://www.congruencemarketinsights.com';
    return {
        title: toCapitalCase(response.data.meta_title),
        // description: response.data.meta_desc,
        description: response.data.summary,
        keywords: response.data.meta_keyword,
        alternates: {
            canonical: `${siteURL}/press-release/${url}`,
        },
    }
}


async function getPressReleaseData(url) {
    const pr = await fetch(`${apiUrl}/press_release/url/${url}`);
    const r1 = await pr.json();

    const rd = await fetch(`${apiUrl}/reports/${r1.data.report_id}`);
    const r2 = await rd.json();
    return { pressRelease: r1.data, report: r2.data };
}

export default async function PressRelease({ params }) {
    const { url } = params;
    const { pressRelease, report } = await getPressReleaseData(url);
    return (
        <div>
            <h1 className='fixed text-transparent'>{pressRelease.title}</h1>
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
                <div className='flex justify-between'>
                    <nav className="flex pt-8 pb-4" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link href='/'>
                                    <div className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
                                        <svg className="w-3 h-3 me-1 md:me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        <span className='hidden md:block'>Home</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                    </svg>
                                    <Link href={`/press-releases/${pressRelease.category_url}`}>
                                        <div className="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 ">{pressRelease.category_name}</div>
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 ">{pressRelease.url && toCapitalCase(pressRelease?.url)}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="py-2 text-center md:pt-2 md:text-left">
                    <div className="pb-12 mx-auto max-w-8xl md:pb-10">
                        <div className='md:flex'>
                            <div className="w-full">
                                <div className='relative border rounded-lg shadow-lg'>
                                    <div className='absolute top-[-10px] right-[20px] text-xs md:text-sm lg:text-md py-1 px-4 bg-primary text-white rounded-sm'>
                                        {moment(pressRelease.created_date).format('Do MMM YYYY')}
                                    </div>

                                    <div className="px-4 py-6 mb-2 bg-[#2C3E50] text-white rounded-lg shadow-sm">
                                        <div className='text-xl font-semibold'>
                                            {pressRelease.title}
                                        </div>
                                        <div className='flex flex-col items-center justify-between mt-4 md:flex-row'>
                                            <div className='flex flex-col gap-4 md:flex-row'>
                                                <div className='flex flex-col gap-1 md:flex-row'>
                                                    <div>
                                                        Formats:
                                                    </div>
                                                    <div className='flex justify-center gap-1 md:justify-normal'>
                                                        <img loading="lazy" className='h-6' src={"/assets/format_icons/pdf.png"} alt="pdf-icon" />
                                                        <img loading="lazy" className='h-6' src={"/assets/format_icons/ppt.png"} alt="ppt-icon" />
                                                        <img loading="lazy" className='h-6' src={"/assets/format_icons/xls.png"} alt="xls-icon" />
                                                    </div>
                                                </div>
                                                {report?.pages &&
                                                    <div>
                                                        Pages: {report?.pages}
                                                    </div>}
                                            </div>
                                            <div className='flex flex-col gap-4 mt-4 md:flex-row md:mt-0'>
                                                {pressRelease.report_id > 0 &&
                                                    <Link href={`/buy-now/${pressRelease.report_id}/1`}>
                                                        <button className="inline-flex items-center justify-center gap-4 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md w-44 text-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                                                            Buy Now
                                                        </button>
                                                    </Link>}
                                                <PressReleaseRequestSample reportTitle={report?.title} pressRelaseTitle={'PR - ' + pressRelease.title} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 p-4 py-6 select-none'>
                                        <div dangerouslySetInnerHTML={{ __html: pressRelease.description }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
