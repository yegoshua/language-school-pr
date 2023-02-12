import React from 'react'

const SubtextComponent = ({subHeader, text, className}) => {
    return (
        <div className={className}>
            <h5 className='text-slate-500 text-2xl leading-10 font-semibold'>{subHeader}</h5>
            <p className='text-2xl leading-10 text-slate-500'>{text}</p>
        </div>
    )
}

export default SubtextComponent