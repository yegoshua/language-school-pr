import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'


const Words = () => {
    const [words, setWords] = useState([]);
    
    useEffect(()=>{

    },[])
    return (
        <>
            <Header />
            <Container className="bg-bg-col-var1 p-5 rounded-xl">
                <table>
                    <tr>WORD</tr>
                </table>
            </Container>
            <Footer />
        </>
    )
}

export default Words