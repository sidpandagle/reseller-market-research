'use client'
import React from 'react'
import { motion } from 'framer-motion'
export default function AboutHome() {
  return (
    <div className='relative py-12 text-white overflow-clip'>
      <div className='absolute bottom-0 w-full h-full -z-10 bg-gradient'>
        <img loading='lazy' src={'/assets/abstract.jpg'} alt="bgimg" className='hidden md:block' />
      </div>
      <div className='max-w-6xl mx-auto sm:px-6'>
        <div className="mb-10 text-3xl font-extrabold text-center ">About Us</div>
        <motion.div
          initial={{ opacity: 0, y: '25%' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left md:flex">

            <div className="md:pr-8 md:w-1/2">
              {/* <div className="mb-4 text-2xl font-semibold">Lorem ipsum dolor sit </div> */}
              <div className='flex flex-col gap-4'>
                <div className='px-8 md:text-justify md:p-0'>Research Envision stands as a premier market research firm committed to furnishing thorough analysis and strategic resolutions for enterprises spanning various sectors.</div>
                <div className='px-8 md:text-justify md:p-0'>Centered on delivering actionable insights, we furnish extensive market intelligence, trend scrutiny, and predictive analysis to bolster well-informed decision-making.</div>
                <div className='px-8 md:text-justify md:p-0'>Our proficiency resides in unveiling market shifts, consumer actions, and competitive arenas, empowering our clientele to maintain a lead in a perpetually changing business milieu.</div>
              </div>



            </div>
            <div className="p-10 pb-0 md:p-0 md:w-1/2">
              <img loading="lazy" className='object-cover w-full rounded-lg h-72 brightness-110' src={'/assets/blurry/about_img.webp'} alt="about-img" srcSet="" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
