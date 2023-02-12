import Container from "../Container";
import React from "react";
import Image1 from "../../assets/img/forth-content-1.png"
const ReviewBlock = () => {
    return (
        <Container className="flex flex-col lg:flex-row py-24 px-4 lg:px-0 items-center lg:gap-28 rounded-3xl">
            <img src={Image1} alt="" className="xl:ml-56"/>
            <div className="flex flex-col items-center">
                <p className="text-2xl lg:text-5xl font-light text-center lg:text-left">
                    “Your platform gave me an amazing opportunity to form a new
                    habit to learn language regularly and of course improve my
                    language skills. I received a letter with congratulations
                    from the team.”
                </p>
                <p className="text-xl mt-6"><b>Margot Robbie</b>, 32 years old</p>
            </div>
        </Container>
    );
};

export default ReviewBlock;
