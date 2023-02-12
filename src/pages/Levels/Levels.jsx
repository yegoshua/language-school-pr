import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LevelCard from "../../components/LevelCard";

const levelsData = [
    {
        level: "A1",
        title: "ABSOLUTE BEGINNER",
        text: "Basic words and phrases",
    },
    {
        level: "A2",
        title: "BEGINNER",
        text: "Simple interactions",
    },
    {
        level: "B1",
        title: "INTERMEDIATE",
        text: "Everyday conversation",
    },
    {
        level: "B2",
        title: "UPPER-INTERMEDIATE",
        text: "Complex topics",
    },
    {
        level: "C1",
        title: "ADVANCED",
        text: "Proficient language use",
    },

]

const Levels = () => {
    return (
        <>
            <Header />
            <Container className="bg-bg-col-var1 p-5 rounded-xl">
                <div className="flex flex-col lg:flex-row mt-16 gap-8 items-center">
                    <p className="text-2xl text-slate-600 max-w-md text-center lg:text-left">
                        Each course is divided into specific learning levels. We
                        teach up to C1 in English and B2 in Business English.
                        <br />
                        <br />
                        Don’t know your English level?
                    </p>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 items-center">
                        {levelsData.map((level, index)=>(
                            <LevelCard key={index} data={level}/>
                        ))}
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default Levels;
