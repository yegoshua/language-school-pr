import React from 'react'
import Container from '../Container'
import { whatIsCards } from '../../constants'
import InfoWhatIsCard from '../InfoWhatIsCard'
const WhatIsBlock = () => {
    return (
        <Container className="px-4 pb-32 md:px-6">
            <h2 className='text-4xl mb-20 font-light'>What is Speak<span className='text-accent-blue'>Now</span>?</h2>
            <div className='flex flex-col items-center justify-center lg:flex-row gap-8 lg:justify-between flex-wrap'>
                {whatIsCards.map((card, index)=>(<InfoWhatIsCard key={index} card={card}/>))}
            </div>
        </Container>
    )
}

export default WhatIsBlock