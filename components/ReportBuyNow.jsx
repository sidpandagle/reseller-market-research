'use client'

import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import RequestSample from '@/components/RequestSample';
import axios from 'axios';
import { apiUrl, getPriceInNumber, discountedPrice } from '@/constants';
import Skeleton from './Skeleton';

export default function ReportBuyNow({ report }) {

  const [priceList, setPriceList] = useState([]);


  const getPriceList = () => {
    axios.get(`${apiUrl}/price/`).then(res => {
      setPriceList(res.data.data.reverse())
    })
  };

  useEffect(() => {
    getPriceList();
  }, [])

  const [discountFormOpen, setDiscountFormOpen] = useState(false);
  const handleDiscountFormOpen = () => setDiscountFormOpen(true);
  const handleDiscountFormClose = () => setDiscountFormOpen(false);

  const [license, setLicense] = useState('Single User License');
  return (

    <div className='flex flex-col gap-4 px-4 py-6 border rounded-md shadow-lg '>
      {
        priceList.length == 0 && <Skeleton count={2} />
      }
      {
        priceList.map((res, i) => {
          return (
            <div key={i} onClick={() => setLicense(res.license)} className={`flex justify-between cursor-default hover:text-primary ${license == res.license && 'text-primary'} p-1 rounded-sm`}>
              <div className='flex gap-2'>
                {res.license}</div>
              <div className='relative font-bold'>
                {res.price}
                {/* {'$' + discountedPrice(getPriceInNumber(res.price))}
                <div className='absolute text-right text-sm font-normal w-full line-through text-red-500 top-[-16px]'>
                  {res.price}
                </div> */}
              </div>
            </div>
          )
        })
      }
      <div className='flex flex-col gap-2 mt-2'>
        {/* <button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Buy Now</button>
<button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Inquiry Before Buying</button> */}
        <Link href={`/buy-now/${report?.id}/${priceList.find(res => res.license === license)?.id}`} className="inline-flex items-center justify-center font-semibold codepen-button">
          <span className='flex items-center justify-center py-2 text-center'>
            Buy Now
          </span>
        </Link>
        <button type="button" onClick={handleDiscountFormOpen} className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
          Request Discount
        </button>
      </div>
      <Modal
        open={discountFormOpen}
        onClose={handleDiscountFormClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className='flex items-center justify-center'>
            <div className=' m-2 p-4 md:p-6 w-[350px] md:w-[700px] rounded-md bg-white'>
              <div className="flex justify-between pb-2 mb-2 text-xl font-semibold text-center">
                <div>Request Discount</div>
                <svg height={24} width={24} onClick={handleDiscountFormClose} className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#1C274C" /> </g></svg>
              </div>
              <div className="h-[82vh] overflow-auto text-sm md:text-md">
                <RequestSample reportTitle={report?.title.split('Market')[0] + 'Market'} enquiryType='Request Discount' closeModal={handleDiscountFormClose} />
              </div>
            </div>
          </div>
        </Box>
      </Modal>

    </div>
  )
}
