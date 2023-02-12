import React from 'react'

const LevelCard = ({data}) => {
    const {level, title, text} = data;
    return (
        <div className='flex px-3 py-2 items-center gap-3 bg-white rounded-2xl'>
            <div className='bg-card-level text-white text-4xl px-4 py-3 rounded-xl'>{level}</div>
            <div>
                <p className='text-xl'>{title}</p>
                <p className='text-xl text-slate-600'>{text}</p>
            </div>
        </div>
    )
}

export default LevelCard