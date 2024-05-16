import React from 'react'

export default function ClientListSlider() {

  const LOGOS = [
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/basf.png'} alt="basf" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/total.png'} alt="total" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/pfizer.png'} alt="pfizer" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/atos.png'} alt="atos" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/sanofi.png'} alt="sanofi" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/microsoft.png'} alt="microsoft" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/hcl.png'} alt="hcl" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/nestle.png'} alt="nestle" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/vmware.png'} alt="vmware" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/ranstad.png'} alt="randstad" />,
  ];

  return (
    // <div className="select-none mt-6 mb-3 relative m-auto w-50vw overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px]  before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100  after:content-['']" >
    <div className="select-none relative m-auto w-50vw overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px]  before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100  after:content-['']" >
      <div className="animate-infinite-slider flex w-[calc(500px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[250px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[250px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}
