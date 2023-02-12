import React, { useState } from 'react'
import Container from "../../components/Container";
import LogoImage from "../../assets/img/logo.png";

const SignUp = () => {
    const [payload, setPayload] = useState({
        first_name: "",
        last_name: "",
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
                    <p className='font-medium'>Already have an account ?</p>
                    <button className='bg-accent-blue text-white px-5 py-2 rounded-lg'>Login</button>
                </div>
            </div>
            <div className='flex items-center justify-center h-full sm:p-0 px-4'>
                <div className='flex flex-col max-w-sm gap-6 justify-center items-center'>
                    <p className='text-4xl text-center'>Sign up to start learning with SpeakNow</p>
                    <input type='text' placeholder='First Name' name='first_name' className='px-5 py-4 border-2 border-gray-200 rounded-lg' value={payload.first_name} onInput={handleInput}/>
                    <input type="text" placeholder='last Name' name='last_name'  className='px-5 py-4 border-2 border-gray-200 rounded-lg' value={payload.last_name} onInput={handleInput}/>
                    <input type="email" placeholder='Email' name='email' className='px-5 py-4 border-2 border-gray-200 rounded-lg' value={payload.email} onInput={handleInput}/>
                    <input type="password" placeholder='Password' name='password' className='px-5 py-4 border-2 border-gray-200 rounded-lg' value={payload.password} onInput={handleInput}/>
                    <button className='bg-accent-blue text-white px-5 py-4 rounded-lg' style={{width: "113px"}}>Sing Up</button>
                </div>
            </div>
        </Container>
    )
}

export default SignUp