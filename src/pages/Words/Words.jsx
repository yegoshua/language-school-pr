import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'


const Words = () => {
    const [words, setWords] = useState([{ 
        "words_id": "4", 
        "words_name": "Сreate", 
        "words_translate": "Створити" 
    }]);

    useEffect(()=>{
        // fetch("http://localhost:80/user-form/words.php") 
        //     .then(response => response.json()) 
        //     .then(data => { 
        //     console.log(data);
        //     setWords(data);
        // })

    },[])
    return (
        <>
            <Header />
            <Container className="bg-bg-col-var1 p-5 rounded-xl">
                <table>
                <tr>
                    <th>Word</th>
                    <th>Translation</th>
                </tr>
                {words.map(word => (
                <tr key={word.words_id}>
                    <td>{word.words_name}</td>
                    <td>{word.words_translate}</td>
                </tr>
                ))}
                </table>
            </Container>
            <Footer />
        </>
    )
}

export default Words