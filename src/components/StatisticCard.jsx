import React from 'react'

const StatisticCard = ({data}) => {
    const {icon, number, text, subText} = data;
    return (
        <div className='flex flex-col gap-4 items-center py-11 px-7'>
            <img src={icon} alt="" />
            <div className='text-7xl italic font-thin'>{number}</div>
            <div>
            <p className='text-base font-thin italic text-center'>{text}</p>
            <p className='text-base font-normal text-slate-600 text-center'>{subText}</p>
            </div>
        </div>
    )
}

export default StatisticCard