import React from 'react'
import Search from '@/components/Search'
import Testimonial from '@/components/Testimonial'
import Clients from '@/components/Clients'
import AboutHome from '@/components/AboutHome'
import LatestReports from '@/components/LatestReports'
import Insights from '@/components/Insights'
import LatestPressRelease from '@/components/LatestPressRelease'
import Services from '@/components/Services'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Congruence Market Insights - Market Research & Consulting',
  description: 'Congruence is your trusted partner in navigating emerging opportunities and challenges through high-quality, tailored market research reports.',
  keywords: 'Congruence Market Insights, CMI, Market Research, Industry Analysis, Market Analysis, Global Market Trends, Business Intelligence, Custom Market Research, Strategic Insights, Market Dynamics, Emerging Opportunities, Competitive Landscape, Data-driven Decision Making, Market Forecast, Industry Reports, Tailored Research Solutions, Market Intelligence Services',
  alternates: {
    canonical: `https://www.congruencemarketinsights.com/`,
  },
}

export default function Home() {
  return (
    <section className="relative" >
      <h1 className='fixed text-transparent'>Congruence Market Insights</h1>
      <Search />
      <Insights />
      <LatestReports />
      < LatestPressRelease />
      <Services />
      <Testimonial />
      <AboutHome />
      <Clients />
    </section >
  )
}
