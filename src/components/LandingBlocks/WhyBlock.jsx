import React from 'react'
import Container from '../Container'
import SubtextComponent from '../SubtextComponent'
import Image1 from '../../assets/img/third-content-1.png'
import Image2 from '../../assets/img/third-content-2.png'
import Image3 from '../../assets/img/third-content-3.png'

const WhyBlock = () => {
    return (
        <div className='third-block-bg'>
        <Container className="pt-32 pb-6 px-4 md:px-8 xl:px-0">
            <h2 className='text-4xl mb-20 font-light'>Why is Speak<span className='text-accent-blue'>Now</span>right for me?</h2>
            <div className='flex flex-col gap-3 xl:ml-48 xl:flex-row'>
                <SubtextComponent
                    className="mt-20 bg-white p-2 rounded-md bg-opacity-90 md:bg-transparent"
                    subHeader="Flexible for busy people"
                    text="We offer 550k classes per year. That means over 60 classes start every hour around the clock."
                />
                <img src={Image1} alt="" />
            </div>
            <div className='flex flex-col-reverse mt-8 xl:gap-32 xl:flex-row'>
                <img src={Image2} alt="" />
                <SubtextComponent
                    className="mt-4 xl:mt-40 bg-white p-2 rounded-md bg-opacity-90 md:bg-transparent"
                    subHeader="Professional teachers"
                    text="Our native-level teachers are located worldwide so you get to know cultural differences in a language."
                />
            </div>
            <div className='flex flex-col mt-8 xl:gap-4 xl:flex-row'>
            <SubtextComponent
                    className="mt-4 mb-4 xl:mt-72 xl:ml-60 bg-white p-2 rounded-md bg-opacity-90 md:bg-transparent"
                    subHeader="Start speaking confidently"
                    text="Teachers will mainly speak the learning-language in class, so you get comfy with the language fast."
            />
            <img src={Image3} alt="" className='xl:mr-20'/>
            </div>
        </Container>
        </div>
    )
}

export default WhyBlock