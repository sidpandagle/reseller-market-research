import * as React from 'react';
import moment from 'moment';
import Link from 'next/link';
import ScheduleCall from '@/components/ScheduleCall';
import RelatedReports from '@/components/RelatedReports';
import ReportDetails from '@/components/ReportDetails';
import ReportBuyNow from '@/components/ReportBuyNow';
import { apiUrl, toCapitalCase } from '@/constants';

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params, searchParams }, parent) {
    const url = params.url
    let section = '';
    if(searchParams?.section){
        if(searchParams?.section  == 'Table'){
            section = 'Table Of Content - ';
        }else if(searchParams?.section  == 'Request'){
            section = 'Request Sample - ';
        }else{
            section = searchParams.section + ' - ';
        }
    }
    const report = await fetch(apiUrl + '/reports/meta/' + url).then((res) => res.json())
    const siteURL = 'https://www.researchenvision.com';
    return {
        title: section + toCapitalCase(report.data.meta_title.split('by Research Envision')[0]),
        description: section + report.data.summary,
        keywords: [...report.data.meta_keyword.split(','),searchParams?.section],
        alternates: {
            canonical: `${siteURL}/report/${url}${searchParams?.section?'?section='+searchParams?.section:''}`,
        },
    }
}


async function getReportData(url) {
    const res = await fetch(apiUrl + '/reports/url/' + url,  { next: { cache: 'no-store'} });
    const response = await res.json();
    return response.data;
}

export default async function Report({ params, searchParams }) {

    const { url } = params;
    const report = await getReportData(url);

    return (
        <div className='px-4 py-2 mx-auto md:py-12 max-w-7xl md:pt-0 sm:px-6'>
            <h1 className='fixed text-transparent translate-x-[200vh]'>{report.title}</h1>
            {/* <div className='pt-8 pb-4 '> Research Envision / {report.category} / <span className='text-primary'> {report.url}</span></div> */}
            <nav className="flex pt-8 pb-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link href='/'>
                            <div className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
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
                            <Link href={`/reports/${report.category_url}`}>
                                <div className="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 ">{report && report.category_name}</div>
                            </Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 ">{report.url?.split('-').map(res => res[0].toUpperCase() + res.slice(1)).join(' ')}</span>
                        </div>
                    </li>
                </ol>
            </nav>


            <div className="pb-8 select-none md:flex">
                <div className="mb-4 border rounded-md shadow-lg overflow-clip md:mb-0 md:w-3/4">
                    <div className='items-center justify-between md:flex'>
                        <div className="w-full">
                            {/* <div className='p-4 text-white bg-[#2C3E50]'> */}
                            <div className='p-4 font-semibold text-black bg-tertiary'>
                                {
                                    report.title &&
                                    <div>
                                        <div className='mb-2 text-justify'>{report.title}</div>
                                        <div className='justify-end gap-4 py-4 text-sm text-center md:py-2 md:text-left md:flex '>
                                            <div className='pr-4 border-black md:border-r-[1px]'><span>Region:</span> Global</div>
                                            <div className='pr-4 border-black md:border-r-[1px]'><span>Published:</span> {moment(report.created_date).format('MMMM YYYY')}</div>
                                            <div className='pr-4 border-black md:border-r-[1px]'><span>Report Code:</span> CGN{report.category_abr}{report.id}</div>
                                            <div ><span>Pages:</span> {report.pages}</div>
                                        </div>
                                    </div>
                                }
                                {
                                    !report.title &&
                                    <div className="flex mb-2">
                                        <div className="flex-shrink-0">
                                            <span className="block w-12 h-12 bg-gray-200 rounded-full " />
                                        </div>
                                        <div className="w-full mt-2 ms-4">
                                            <h3 className="h-4 bg-gray-200 rounded-full " style={{ width: '40%' }} />
                                            <ul className="mt-5 space-y-3">
                                                <li className="w-full h-4 bg-gray-200 rounded-full " />
                                                <li className="w-full h-4 bg-gray-200 rounded-full " />
                                                <li className="w-full h-4 bg-gray-200 rounded-full " />
                                                <li className="w-full h-4 bg-gray-200 rounded-full " />
                                            </ul>
                                        </div>
                                    </div>

                                }
                            </div>
                            {/* Report Details */}
                            <ReportDetails report={report} url={url} segment={searchParams?.section=='Request'?'request-sample':''}/>
                        </div>
                    </div >

                </div >
                <div className="relative md:pl-4 md:w-1/4">
                    <div className='sticky top-[20px] flex flex-col gap-4 '>

                        {/* Report Buy Now */}
                        <ReportBuyNow report={report} />
                        {/* ScheduleCall */}
                        <ScheduleCall />
                        {/* Related Reports */}
                        {report.category_url && <RelatedReports category_url={report.category_url} currentReportId={report.id} />}
                    </div>
                </div>
            </div >
        </div >
    )
}
