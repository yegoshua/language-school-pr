import React from 'react'
import StatIco1 from '../../assets/img/stat-card1.png';
import StatIco2 from '../../assets/img/stat-card2.png';
import StatIco3 from '../../assets/img/stat-card3.png';
import StatIco4 from '../../assets/img/stat-card4.png';
import StatisticCard from '../StatisticCard';
import Container from '../Container';
const cardsData = [
    {
        icon: StatIco1,
        number: "97.95%",
        text: "Completing rate",
        subText: "of all our courses",
    },
    {
        icon: StatIco2,
        number: "37.4k",
        text: "Happy students",
        subText: "on the platform",
    },
    {
        icon: StatIco3,
        number: "5,000+",
        text: "Video lessons",
        subText: "in our courses",
    },
    {
        icon: StatIco4,
        number: "40",
        text: "Certificated professionals",
        subText: "in our team",
    },
]
const StatisticBlock = () => {
    return (
        <Container>
        <div className='flex flex-col gap-8 lg:flex-row justify-between'>{cardsData.map((card, index)=>(
            <StatisticCard key={index} data={card}/>
        ))}</div>
        </Container>
    )
}

export default StatisticBlock