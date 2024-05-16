import React from 'react'
import Link from 'next/link'
import { apiUrl } from '@/constants';
import Skeleton from './Skeleton';

async function getRelatedReports(category_url, currentReportId) {
  const res = await fetch(`${apiUrl}/reports/category/${String(category_url)}?page=1&per_page=3`);
  const response = await res.json();
  if (response.data.length) {
    let filterData = response.data.filter(res => res.id !== currentReportId);
    filterData = filterData.filter((r, i) => i < 2);
    return filterData;
  } else {
    return []
  }
}
export default async function RelatedReports({ category_url, currentReportId }) {

  const relatedReportList = await getRelatedReports(category_url, currentReportId);

  return (<div className='flex flex-col gap-2 border rounded-md shadow-lg'>
    <div>
      <div className='px-4 py-2'>Related Reports</div>
      <div className=''>
        {
          relatedReportList.map((r, i) => {
            return (
              // <Link key={i} href={`/report/${r.url}`} onClick={() => window.location.reload()}>
              <Link key={i} href={`/report/${r.url}`}>
                <div className='flex flex-col px-4 py-2 border-t-2 cursor-pointer group hover:bg-slate-100'>
                  <div className="font-bold group-hover:text-primary">{r.url?.split('-').map(res => res[0].toUpperCase() + res.slice(1)).join(' ')}</div>
                  <div className="text-sm">{r.summary.split(' ').filter((s, j) => j < 15).join(' ')}...</div>
                </div>
              </Link>
            )
          })
        }
        {
          relatedReportList.length === 0
          &&
          <div className='flex flex-col px-2 pt-4 border-t-2 cursor-pointer group hover:bg-slate-100'>
            <div className="font-bold group-hover:text-primary">
              <Skeleton count={2} />
            </div>
          </div>
        }
      </div>
    </div>
  </div>
  )
}
