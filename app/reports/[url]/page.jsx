'use client'
import Link from 'next/link';
import {
  useEffect, useState
} from 'react';
import { apiUrl, toCapitalCase } from '@/constants'
import axios from 'axios';
import moment from 'moment';
import { notifyError, notifySuccess } from '@/utils/CustomToastContainer';
import CustomToastContainer from '@/utils/CustomToastContainer';
const AllReport = ({ params }) => {
  const { url } = params;
  const [category, setCategory] = useState({});
  const [categoryList, setCategoryList] = useState([]);
  const [reportList, setReportList] = useState([]);
  const [reportCount, setReportCount] = useState(0);
  const [totalReportCount, setTotalReportCount] = useState(0);
  const [page, setPage] = useState(1);

  const scrollToTop = () => {
    window.scroll(0, 0)
  }

  useEffect(() => {
    // setCategory(categories.find(res => res.url === url))
    axios.get(`${apiUrl}/reports/category/category_count`).then(res => {
      let totalCount = 0;
      let tempCount = 0;
      let categoryList = res.data.data.map(r => {
        if (url == r.category_url) {
          tempCount = r.count;
        }
        totalCount += r.count;
        return r;
      })
      setReportCount(url === 'all-industries' ? totalCount : tempCount)
      setTotalReportCount(totalCount)
      setCategoryList(categoryList)
    })

    if (url != 'all-industries') {
      axios.get(`${apiUrl}/category/url/${url}`).then(res => {
        setCategory(res.data.data)
      })
    }
  }, [url]);

  useEffect(() => {
    if (url) {
      // axios.get(`${apiUrl}/reports/category/${categories.find(res => res.url === url).name}?page=${page}&per_page=8`).then(res => {
      axios.get(`${apiUrl}/reports/category/${url}?page=${page}&per_page=8`).then(res => {
        let reportList = res.data.data;
        if (reportList.length) {
          setReportList(reportList)
        } else {
          setReportList([])
          notifyError('No reports for this category')
        }
      })
    }
  }, [url, page]);

  const setPagination = (val) => {
    setPage(val);
    scrollToTop();
  }

  return (
    <div>
      <CustomToastContainer />
      <h1 className='fixed text-transparent'>{category.name && category.name.toUpperCase()}</h1>
      <div className="mb-6 md:text-3xl overflow-clip relative text-lg h-[200px] md:h-[300px] font-extrabold flex items-center justify-center bg-gradient text-white">
        {category.back_cover && <img loading="lazy" className='absolute flex items-center justify-center w-auto h-auto md:object-contain md:w-full' src={'/assets/' + category.back_cover.replace('.jpg', '.webp')} alt="" />}
        {url === 'all-industries' && <img loading="lazy" className='absolute flex items-center justify-center w-auto h-auto md:object-contain md:w-full' src={'/assets/category_covers/all.webp'} alt="" />}
        {
          category.name &&
          <div className='z-10 px-4 py-2 bg-slate-800 drop-shadow'>
            {category.name.toUpperCase()}
          </div>
          ||
          (
            <div className='z-10 px-4 py-2 bg-slate-800 drop-shadow'>
              {url.toUpperCase()}
            </div>
          )
        }
      </div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-2 text-center md:pt-10 md:text-left">
          <div className="pb-12 mx-auto max-w-8xl md:pb-10">
            <div className='md:flex'>
              <div className="md:w-[28%]">
                <div className='border rounded-md p-4 sticky top-[20px]'>
                  <div className="mb-2 text-xl font-semibold">Reports by Industry</div>
                  <div className='flex flex-col gap-2'>
                    <Link href={`/reports/all-industries`} >
                      {/* <div className={`py-2 text-sm cursor-pointer hover:text-primary  border-b-2 ${url === 'all-industries' && 'text-primary'}`}>All Industries {totalReportCount ? `(${totalReportCount})` : ''}</div> */}
                      <div className={`py-2 text-sm cursor-pointer hover:text-primary  border-b-2 ${url === 'all-industries' && 'text-primary'}`}>All Industries</div>
                    </Link>
                    {categoryList.map((res, key) => {
                      return (
                        <Link key={key} href={`/reports/${res.category_url}`} onClick={scrollToTop}>
                          {/* <div className={`py-2 text-sm cursor-pointer hover:text-primary ${res.category_url === String(url) && 'text-primary'} ${key < categoryList.length - 1 && 'border-b-2'}`} key={key}>{res.category_name} ({res.count})</div> */}
                          <div className={`py-2 text-sm cursor-pointer hover:text-primary ${res.category_url === String(url) && 'text-primary'} ${key < categoryList.length - 1 && 'border-b-2'}`} key={key}>{res.category_name}</div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="relative mt-12 md:w-3/4 md:ml-8 md:mt-0">
                <div className='hidden md:block absolute top-[-60px] right-0 text-right'>
                  <nav >
                    <ul className="inline-flex my-4 -space-x-px text-sm cursor-pointer">
                      <li>
                        <div onClick={() => (page - 1) > 0 ? setPagination(page - 1) : ''} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="-rotate-90 icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 15l6 -6l6 6" />
                          </svg>
                        </div>
                      </li>
                      {(page - 2) > 0 && <li>
                        <div onClick={() => setPagination(page - 2)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page - 2}</div>
                      </li>}
                      {(page - 1) > 0 && <li>
                        <div onClick={() => setPagination(page - 1)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page - 1}</div>
                      </li>}
                      <li>
                        <div className={`flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 `}>{page}</div>
                      </li>
                      {(page + 1) <= ((reportCount / 8) + 1) && <li>
                        <div onClick={() => setPagination(page + 1)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page + 1}</div>
                      </li>}
                      {(page + 2) <= ((reportCount / 8) + 1) && <li>
                        <div onClick={() => setPagination(page + 2)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page + 2}</div>
                      </li>}
                      <li>
                        <div onClick={() => (page + 1) <= ((reportCount / 8) + 1) ? setPagination(page + 1) : ''} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 15l6 -6l6 6" />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>

                {reportList.map((res, key) => {
                  return (
                    <Link href={`/report/${res.url}`} key={key}>
                      <div className='group' >
                        <div className='flex flex-col gap-2 p-4 border-b-2 cursor-pointer group-hover:bg-slate-50'>
                          <div className="font-semibold group-hover:text-primary group-hover:underline">{res.title.split('').filter((res, i) => i < 160).join('')}... </div>
                          <div className="">{res.summary}...</div>
                          <div className='flex gap-4 text-sm'>
                            <div className='pr-4 border-r-2 border-gray'>{moment(res.created_date).format('MMMM YYYY')}</div>
                            <div className='pr-4 border-gray'>{res.pages} Pages</div>
                            {/* <div className='pr-4'>October 2023</div> */}
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
                <div className='text-center'>
                  <nav >
                    <ul className="inline-flex my-4 -space-x-px text-sm cursor-pointer">
                      <li>
                        <div onClick={() => (page - 1) > 0 ? setPagination(page - 1) : ''} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="-rotate-90 icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 15l6 -6l6 6" />
                          </svg>
                        </div>
                      </li>
                      {(page - 2) > 0 && <li>
                        <div onClick={() => setPagination(page - 2)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page - 2}</div>
                      </li>}
                      {(page - 1) > 0 && <li>
                        <div onClick={() => setPagination(page - 1)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page - 1}</div>
                      </li>}
                      <li>
                        <div className={`flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 `}>{page}</div>
                      </li>
                      {(page + 1) <= ((reportCount / 8) + 1) && <li>
                        <div onClick={() => setPagination(page + 1)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page + 1}</div>
                      </li>}
                      {(page + 2) <= ((reportCount / 8) + 1) && <li>
                        <div onClick={() => setPagination(page + 2)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page + 2}</div>
                      </li>}
                      <li>
                        <div onClick={() => (page + 1) <= ((reportCount / 8) + 1) ? setPagination(page + 1) : ''} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 15l6 -6l6 6" />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReport;
