'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { apiUrl, getCategories } from "@/constants";
import { usePathname, useRouter } from 'next/navigation'
import { notifyError } from "@/utils/CustomToastContainer";
import axios from "axios";
import _ from 'lodash';

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isCategoryOpenFlag, setCategoryOpenFlag] = useState(false);
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState('');
  const router = useRouter()
  const [searchComplete, setSearchComplete] = useState(false)
  const [reportList, setReportList] = useState([])
  let timeoutVal;

  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }
  const setCategoryCloseWithDelay = (time) => {
    timeoutVal = setTimeout(()=>{
      if(isCategoryOpenFlag){
        setCategoryOpen(false)
      }
    },time)
  }

  const handleSearch = () => {
    if (keyword) {
      router.push(`/search/${keyword}`)
    } else {
      notifyError('Enter search keyword')
    }
  }


  useEffect(() => {
    setKeyword('')
    setReportList([])
  }, [pathname]);


  const delayedFetch = _.debounce(async () => {
    try {
      const cancelTokenSource = axios.CancelToken.source();

      const res = await axios.get(`${apiUrl}/reports/search?page=1&per_page=10&keyword=${keyword}`, {
        cancelToken: cancelTokenSource.token
      });

      let reportList = res.data.data;
      setSearchComplete(true);
      if (reportList.length) {
        setReportList(reportList);
      } else {
        setReportList([]);
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        console.error('Error during API call:', error);
      }
    }
  }, 1000);

  useEffect(() => {
    if (keyword.length > 2) {
      delayedFetch();
    } else {
      setReportList([]);
    }
  }, [keyword]);


  useEffect(() => {
    getCategoryList();
    document.addEventListener('mouseup', function (e) {
      const categoryDropDown = document.getElementById('openedCategoryDropDown');
      if (categoryDropDown && !categoryDropDown.contains(e.target)) {
        setCategoryOpen(false)
      }
    });
  }, [])


  function redirectToCategory() {
    setCategoryOpen(!isCategoryOpen);
    setMenuOpen(false);
  }

  const getCategoryList = () => {
    getCategories().then((data) => {
      setCategories(data)
    });
  }

  return (
    <div className="relative z-20">
      <header className='w-full bg-white border-b shadow-lg border-slate-200'>
        <div className="relative flex items-center justify-between md:mx-4">
          <div className="px-4">
            <div className="w-full m-4 text-2xl md:m-0">
              <Link href='/'>
                <img loading="lazy" src={'/assets/cmidarklogo.png'} alt="logo" className="flex justify-center w-44"></img>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end w-full px-4">
            <div>
              <button
                onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }}
                id="navbarToggler"
                className={` ${isMenuOpen && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l16 0" />
                  <path d="M4 12l16 0" />
                  <path d="M4 18l16 0" />
                </svg>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none z-20 ${!isMenuOpen && "hidden"
                  } `}
              >
                <div className="block lg:flex">
                  {/* <div className="relative">
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} href="/">Home</Link>
                  </div> */}
                  
                  <div className="relative md:py-4" onMouseEnter={() => setCategoryOpen(false)}>
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' href="/">Home</Link>
                  </div>
                  <div className="relative cursor-pointer md:py-4" onClick={()=>setCategoryOpen(!isCategoryOpen)} onMouseEnter={() => setCategoryOpen(true)}>
                    <div className='flex items-center gap-2 py-2 text-base font-medium lg:ml-12 lg:inline-flex'>
                      <div>Category</div>
                      {
                        <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-chevron-up transition-all duration-200 ${isCategoryOpen ? 'rotate-0' : 'rotate-180'}`} width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 15l6 -6l6 6" />
                        </svg>
                      }
                    </div>
                    {
                      <div id='openedCategoryDropDown' onMouseEnter={()=>{setCategoryOpenFlag(true); clearTimeout(timeoutVal);}} onMouseLeave={()=>setCategoryCloseWithDelay(500)} className={`absolute z-20 bg-white py-6 px-10  shadow-2xl rounded-md top-[100%] md:top-[120%] left-[-35%] md:left-[-120%] text-sm w-[300px] md:w-[550px] transition-all duration-200 ${isCategoryOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <div className="grid grid-cols-1 gap-x-2 gap-y-0 md:grid-cols-2">
                          {categories.map((res, index) => {
                            return (
                              <Link key={index} onClick={() => redirectToCategory()} href={`/reports/${res.url}`}>
                                <div className="mb-3 cursor-pointer hover:font-bold">
                                  {res.name}
                                </div>
                              </Link>)
                          })}
                        </div>
                      </div >
                    }
                  </div >
                  <div className="relative md:py-4" onMouseEnter={() => setCategoryOpen(false)}>
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} href="/press-releases/all-industries">Press Release</Link>
                  </div>
                  <div className="relative md:py-4" onMouseEnter={() => setCategoryOpen(false)}>
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} href="/offering">Offerings</Link>
                  </div>
                  < div className="relative md:py-4 onMouseEnter={() => setCategoryOpen(false)}" >
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} href="/contact">Contact</Link>
                  </ div>
                  <div className="relative md:py-4" onMouseEnter={() => setCategoryOpen(false)}>
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} href="/about">About</Link>
                  </div>
                  <div onMouseEnter={() => setCategoryOpen(false)} className={`relative hidden md:py-4 ${(pathname == '/') && 'hidden'} ${(pathname != '/') && 'md:block'}`}>
                    <div className="flex items-center gap-4 lg:ml-12">
                      <button type="button" className="hover:border-gray-7 md:border-gray-6 flex h-5 w-5 items-center justify-start md:h-auto md:w-64 md:flex-none md:rounded-lg md:border md:bg-backgroundSecondary md:py-2 md:pl-4 md:pr-3.5 md:text-sm">
                        <input type="text" value={keyword} onKeyDown={handleEnterSearch} onChange={(e) => setKeyword(e.target.value)} className="w-full pr-4 outline-none" placeholder="Search Market Report" />
                        <svg aria-hidden="true" onClick={()=>handleSearch()} viewBox="0 0 20 20" className="flex-none w-5 h-5 -ml-2 fill-content3 ">
                          <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div >

              </nav >
            </div >
          </div >
        </div >
      </header >
      <div className={`absolute  ${(!reportList.length || pathname == '/' || keyword == '') && 'hidden'} flex justify-center w-full  max-h-[75vh] top-20`}>
        <div className="w-[90%] border-slate-300 border bg-white rounded-md p-4 overflow-auto shadow-xl cursor-default">
          <div className="mb-2 font-bold">Reports</div>
          <div className="flex flex-col gap-2">
            {
              reportList.map((r, i) => {
                return (
                  <Link className="group" href={`/report/${r.url}`} key={i} onClick={() => { setReportList([]); setKeyword('') }}>
                    <div key={1} className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                      <div className="font-semibold group-hover:text-primary group-hover:underline">{r.title.split('').filter((res, i) => i < 160).join('')}...</div>
                      <div className="text-slate-600">{r.summary}</div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div >
  );
};

