import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import CustomCheckBox from "../../components/CustomCheckBox";

const Themes = () => {
    const [themes, setThemes] = useState([{ 
        "themes_id": "1", 
        "themes_name": "Present Simple" 
    },
    { 
        "themes_id": "1", 
        "themes_name": "Present Simple" 
    },
    { 
        "themes_id": "1", 
        "themes_name": "Present Simple" 
    },
    { 
        "themes_id": "1", 
        "themes_name": "Present Simple" 
    },
    { 
        "themes_id": "1", 
        "themes_name": "Present Simple" 
    },]);
    
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
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Theme
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Is Learned
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {themes.map((theme)=>(
                                            <tr key={theme.themes_id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-lg text-gray-900">
                                                    {theme.themes_name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-lg text-gray-900">
                                                    <CustomCheckBox/>
                                                </div>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Themes