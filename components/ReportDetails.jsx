'use client'

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import ReportRequestSample from '@/components/ReportRequestSample';
import axios from 'axios';
import { apiUrl } from '@/constants';
import Skeleton from '@/components/Skeleton'
import Faq from '@/components/Faq';
import Methodology from '@/components/Methodology';

export default function ReportBuyNow({ report, url, segment }) {
  
  const [localReport, setLocalReport] = useState(report);
  const [isNoTOC, setNoTOC] = useState(false);

  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');


  useEffect(() => {
    setBlankImage(report);
  }, [url])

  useEffect(() => {
    if (img1 && !segment) {
      setDescriptionImages(img1, img2)
    }
  }, [segment])




  const setBlankImage = (reportData) => {
    if (!reportData) return;
    const parser = new DOMParser();

    // For Description
    const descriptionDoc = parser.parseFromString(reportData.description, "text/html");
    const imgToModify1 = descriptionDoc.querySelectorAll("img")[0];
    const imgToModify2 = descriptionDoc.querySelectorAll("img")[1];
    if (imgToModify1) {
      imgToModify1.setAttribute("src", '');
      imgToModify1.style.height = '0px';
    }
    if (imgToModify2) {
      imgToModify2.setAttribute("src", '');
      imgToModify2.style.height = '0px';
    }
    reportData.description = descriptionDoc.documentElement.outerHTML;

    // For Methodology
    const methodologyDoc = parser.parseFromString(reportData?.methodology, "text/html");
    const methodologyImgToModify1 = methodologyDoc.querySelectorAll("img")[0];
    if (methodologyImgToModify1) {
      methodologyImgToModify1.setAttribute("src", '');
      methodologyImgToModify1.style.height = '0px';
    }
    reportData.methodology = methodologyDoc.documentElement.outerHTML;
    if(extractContent(reportData.toc)=='Request Table of Contents'){
      setNoTOC(true);
    } 
    setLocalReport(reportData);
    getReportImages(reportData.id);
  }

  const getReportImages = (repId) => {
    axios.get(`${apiUrl}/report_images/RP${repId}`).then((response) => {
      let image1 = response.data.data.find(res => res.img_name.includes('_1'))?.img_file || '';
      let image2 = response.data.data.find(res => res.img_name.includes('_2'))?.img_file || '';

      setImg1(image1);
      setImg2(image2);
      setTimeout(() => {
        setDescriptionImages(image1, image2);
      }, 500);
    })
  }
  const setDescriptionImages = (image1, image2) => {

    const descriptionImages = document.querySelectorAll('.description-content p span img');

    if (descriptionImages.length > 0) {
      descriptionImages[0].src = image1 ? image1 : img1;
      descriptionImages[0].style.height = 'auto';

      if (descriptionImages.length > 1) {
        descriptionImages[1].src = image2 ? image2 : img2;
        descriptionImages[1].style.height = 'auto';
      }
    }
  }


  const extractContent = (s) => {
    let span = document.createElement('span');
    span.innerHTML = s;
    console.log(span.textContent || span.innerText)
    return span.textContent || span.innerText;
  }

  return (
    <div>
      <div className={`${(segment !== 'request-sample' && segment !== 'Request') && 'md:sticky top-0'} p-4 relative justify-between gap-2 bg-white md:flex`}>
        <Link href={'/report/' + report?.url} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${!segment ? 'font-bold bg-primary text-white' : ''}`}>Description</Link>
        <Link href={'/report/' + report?.url + '/toc' } className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${segment === 'toc' ? 'font-bold bg-primary text-white' : ''}`}>Table Of Content</Link>
        <Link href={'/report/' + report?.url + '/highlights' } className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${segment === 'highlights' ? 'font-bold bg-primary text-white' : ''}`}>Highlights</Link>
        <Link href={'/report/' + report?.url + '/methodology' } className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${segment === 'methodology' ? 'font-bold bg-primary text-white' : ''}`}>Methodology</Link>
        <Link href={'/report/' + report?.url + '/request-sample' } className={`codepen-button md:w-1/4 w-full md:mb-0 mb-4 text-sm box-border relative z-10 flex justify-center items-center border rounded-sm cursor-pointer ${segment === 'request-sample'  && segment !== 'Request' ? 'font-bold' : ''}`}>
          <span className='py-2 text-center'>Request Sample</span>
        </Link>
      </div>
      <div className='px-4'>
        {!segment &&
          <div>
            <div className='html-content description-content' dangerouslySetInnerHTML={{ __html: localReport?.description }}></div>
            {localReport?.description && <Faq faqs={JSON.parse(localReport?.faqs)} />}
          </div>
        }
        {segment === 'toc' && !isNoTOC &&
          <div>
            <div dangerouslySetInnerHTML={{ __html: localReport?.toc }}></div>
          </div>
        }
        {segment === 'toc' && isNoTOC &&
          <div className='flex items-center justify-center h-36'>
            <div>Request Table Of Contents</div>
          </div>
        }
        {segment === 'highlights' &&
          <div>
            <div dangerouslySetInnerHTML={{ __html: localReport?.highlights }}></div>
          </div>
        }
        {segment === 'methodology' &&
          <div>
            <Methodology />
          </div>
        }
        {segment === 'request-sample' &&
          <div>
            <ReportRequestSample reportTitle={localReport?.title.split('Market')[0] + 'Market'} enquiryType='Request Sample' closeModal={() => { }} />
          </div>
        }
      </div>
    </div>
  )
}
