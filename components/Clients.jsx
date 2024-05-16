import React from 'react'
import ClientListSlider from '@/components/ClientListSlider'
export default function Clients() {
  return (
    <div className="py-12 mx-auto md:py-10">
      <div className="">
        {/* Section header */}
        <div className="max-w-3xl pb-12 mx-8 text-center md:mx-auto md:pb-4">
          <h2 className="mb-8 text-3xl font-extrabold text-slate-600">Our Clients</h2>
          <h2 className="mb-4 h2">Trusted by over 500 companies all over the world</h2>
          <p className="text-gray-600 md:text-xl" data-aos="zoom-y-out">Trusted by industry leaders, our insights drive success, empowering businesses to thrive in dynamic market landscapes with precision.</p>
        </div>
        <div className='mt-6 mb-3'>
          <ClientListSlider />
        </div>
      </div>
    </div >
  )
}
