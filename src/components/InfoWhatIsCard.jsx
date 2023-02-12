import React from 'react'
import SubtextComponent from './SubtextComponent';
const InfoWhatIsCard = ({card}) => {
    const {subHeader, text, img } = card;
    return (
        <div className='flex-col max-w-xs sm:max-w-sm'>
            <img src={img} alt="NO IMAGE" className='pb-8'/>
            <SubtextComponent subHeader={subHeader} text= {text}/>
            {/* <h5 className='text-slate-500 text-2xl leading-10 font-semibold'>{subHeader}</h5>
            <p className='text-2xl leading-10 text-slate-500'>{text}</p> */}
        </div>
    )
}

export default InfoWhatIsCard