import React from 'react'
import Container from '../Container'
import QuickStartImage from "../../assets/img/landing-image.png"

const QuickSignUpBlock = () => {
    return (
        <Container className="flex flex-col items-center justify-center gap-7 lg:flex-row mb-6">
            <div>
                <img src={QuickStartImage} alt=""/>
            </div>
            <div className='flex-col flex items-center px-4 md:px-6 lg:px-0 lg:items-start'>
                <h2 className='text-2xl md:text-7xl font-normal mb-6 italic'>Your key for language wins</h2>
                <p className='text-xl mb-12 leading-8 text-slate-500'>With professional teachers, flexible learning schedules and courses for all levels you will speak confidently in no time.</p>
                {/* <div className='flex flex-col gap-4 items-center sm:flex-row'>
                    <input type="email" placeholder='email' className='px-5 py-4 border-2 border-gray-200 rounded-lg'/>
                    <button className='w-full bg-accent-blue text-white px-5 py-4 rounded-lg'>Get Started</button>
                </div> */}
            </div>
        </Container>
    )
}

export default QuickSignUpBlock