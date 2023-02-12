import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutImage from "../../assets/img/about1.png"

const About = () => {
    return (
        <>
        <Header/>
        <Container className="py-10 px-7 lg:px-0">
            <h2 className="text-4xl font-light">Learn English for everyday situations</h2>
            <div className="flex flex-col lg:flex-row mt-16 gap-9 items-center">
                <p className="text-2xl text-slate-600">
                    We don’t simply teach English from a textbook.<br/><br/> Through our
                    rotation of international teachers, you’ll be exposed to a wide
                    variety of accents, expressions and cultures. This means you’ll
                    always learn the most up-to-date words and phrases used by
                    English speakers worldwide.
                    <br/><br/>And, in our Business English
                    classes, we’ll prepare you for success in all contexts, teaching
                    you to communicate, present and negotiate with confidence.
                </p>
                <img src={AboutImage} alt="" />
            </div>
        </Container>
        <Footer/>
        </>
    );
};

export default About;
