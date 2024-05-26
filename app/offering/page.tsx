import React from 'react'
import OfferingMain from '../../components/OfferingMain'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Syndicate, Custom and Consulting Report Services from Research Envision',
    description: 'Unlock strategic advantages with Research Envision—your partner for syndicate reports, custom research, and consulting services.',
    keywords: 'Syndicate Reports, Custom Research, Consulting Services, Market Insights, Strategic Analysis, Tailored Solutions, Business Intelligence, Industry Trends, Data-driven Insights, Competitive Landscape, Emerging Markets, Comprehensive Research, Market Dynamics, Strategic Consulting, Customized Reports',
    alternates: {
        canonical: 'https://www.researchenvision.com/offering',
    },
}

export default function Offering() {

    return (
        <OfferingMain />
    )
}
