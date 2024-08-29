import { useState } from "react";
import Card from "./Card";
import profile1 from "../assets/images/profile1.png";
import profile2 from "../assets/images/profile2.png";

const Cards = () => {
  const [firstCard, setFirstCard] = useState({
    id: 1,
    title: "Александр",
    state: "Онлайн",
    img: profile1,
  });
  const [secondCard, setSecondCard] = useState({
    id: 2,
    title: "Евгений",
    state: "Онлайн",
    img: profile2,
  });

  return (
    <>
      <div className="cards">
        <div className="container cards__wrap">
          <Card card={firstCard} />
          <Card card={secondCard} />
        </div>
      </div>
    </>
  );
};

export default Cards;
