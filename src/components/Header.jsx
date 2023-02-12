import React from 'react'
import LogoImage from "../assets/img/logo.png"
import Container from './Container'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
    <>
        <Container>
            <div className='flex justify-between py-9'>
                <div>
                    <Link to="/"><img src={LogoImage} alt="" /></Link>
                </div>
                <ul className='hidden md:flex gap-7 text-base'>
                    <li className='hover:border-b-2 hover:border-accent-blue cursor-pointer trans transition-all'><Link to="/levels">Levels</Link></li>
                    <li className='hover:border-b-2 hover:border-accent-blue cursor-pointer trans transition-all'><Link to="/about">About Us</Link></li>
                    <li className='hover:border-b-2 hover:border-accent-blue cursor-pointer trans transition-all'>Our tutors</li>
                    <li className='hover:border-b-2 hover:border-accent-blue cursor-pointer trans transition-all'><Link to="/sign-in">Log in</Link></li>
                </ul>
            </div>
        </Container>
    </>
    )
}

export default Header