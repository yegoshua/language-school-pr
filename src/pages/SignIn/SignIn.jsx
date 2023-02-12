import React from 'react'
import Container from "../../components/Container";
import LogoImage from "../../assets/img/logo.png";
import { useState } from 'react';

const SignIn = () => {
    const [payload, setPayload] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e)=>{
        const {name, value} = e.target;
        setPayload((prev)=>({...prev, [name]: value}))
    }
    return (
        <Container className="h-screen flex flex-col">
            <div className='flex flex-col sm:flex-row w-full justify-between py-3'>
                <div className='flex items-center justify-center'><img src={LogoImage} alt="" /></div>
                <div className='flex flex-col items-center gap-2 sm:flex-row'>
                    <p className='font-medium'>Don`t have an account yet ?</p>
                    <button className='bg-accent-blue text-white px-5 py-2 rounded-lg'>Get Started</button>
                </div>
            </div>
            <div className='flex items-center justify-center h-full sm:p-0 px-4'>
                <div className='flex flex-col max-w-sm gap-6'>
                    <p className='text-4xl'>Log into your account</p>
                    <input type="email" placeholder='Email' name='email' className='px-5 py-4 border-2 border-gray-200 rounded-lg' value={payload.email} onInput={handleInput}/>
                    <input type="password" placeholder='Password' name='password' className='px-5 py-4 border-2 border-gray-200 rounded-lg' value={payload.password} onInput={handleInput}/>
                    <button className='bg-accent-blue text-white px-5 py-4 rounded-lg'>Get Started</button>
                </div>
            </div>
        </Container>
    )
}

export default SignIn