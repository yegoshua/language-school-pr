import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'

const Themes = () => {
    const [themes, setThemes] = useState([{ 
        "themes_id": "1", 
        "themes_name": "Present Simple" 
    }]);
    
    useEffect(()=>{
        // fetch("http://localhost:80/user-form/themes.php") 
        //     .then(response => response.json()) 
        //     .then(data => { 
        //     console.log(data);
        //     setThemes(data);
        // })
        
    },[])
    return (
        <>
            <Header />
            <Container className="bg-bg-col-var1 p-5 rounded-xl">
                <h1 className='text-5xl mb-4'>Themes</h1>
                <ul>
                    {themes.map((theme => (<li key={theme.themes_id}>{theme.themes_name}</li>)))}
                </ul>
            </Container>
            <Footer />
        </>
    )
}

export default Themes