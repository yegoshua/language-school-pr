import React from 'react'
import Header from '../components/Header'
import QuickSignUpBlock from '../components/LandingBlocks/QuickSignUpBlock'
import WhatIsBlock from '../components/LandingBlocks/WhatIsBlock'
import WhyBlock from '../components/LandingBlocks/WhyBlock'
import ReviewBlock from '../components/LandingBlocks/ReviewBlock'
import StatisticBlock from '../components/LandingBlocks/StatisticBlock'
import Footer from '../components/Footer'

const Landing = () => {
    return (
        <>
            <Header/>
            <QuickSignUpBlock/>
            <WhatIsBlock/>
            <WhyBlock/>
            <ReviewBlock/>
            <StatisticBlock/>
            <Footer/>
        </>
    )
}

export default Landing