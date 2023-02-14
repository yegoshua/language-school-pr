import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'

const Themes = () => {
    const [themes, setThemes] = useState([]);
    
    useEffect(()=>{

    },[])
    return (
        <>
            <Header />
            <Container className="bg-bg-col-var1 p-5 rounded-xl">
                <ul>
                    <li>THEME 1</li>
                    <li>THEME 2</li>
                    <li>THEME 3</li>
                </ul>
            </Container>
            <Footer />
        </>
    )
}

export default Themes