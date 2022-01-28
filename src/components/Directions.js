import Card from "./Card";
import image1 from "../images/direcions_1.svg";
import image2 from "../images/directions_2.svg";
import image3 from "../images/directions_3.svg";
import image4 from "../images/directions_4.svg";
import image5 from "../images/directions_5.svg";
import image6 from "../images/directions_6.svg";
import image7 from "../images/directions_7.svg";
import { Link } from 'react-router-dom';
import React from "react";
import { useInView } from "react-intersection-observer";

function Directions({ handleMenuEl }) {
  const { ref, inView } = useInView({ threshold: 1 });

  React.useEffect(() => {
    handleMenuEl('directions', inView);
  }, [inView, handleMenuEl]);

  function handleDirectionCardClick() {
    window.scrollTo(0, 0);
  }

  return (
    <section className="directions" id="directions" ref={ref}>
      <h2 className="directions__title">
        Направления
      </h2>
      <hr className="hr"></hr>
      <ul className="cards">
        <Link to="./узи" className="cards__link" onClick={handleDirectionCardClick}><Card title="УЗИ" imagePath={image1}/></Link>
        <Link to="./узи" className="cards__link" onClick={handleDirectionCardClick}><Card title="Генетическое тестирование" imagePath={image2}/></Link>
        <Link to="./узи" className="cards__link" onClick={handleDirectionCardClick}><Card title="Косметология" imagePath={image3}/></Link>
        <Link to="./узи" className="cards__link" onClick={handleDirectionCardClick}><Card title="Гинекология" imagePath={image4}/></Link>
        <Link to="./узи" className="cards__link" onClick={handleDirectionCardClick}><Card title="Гемабанк" imagePath={image5}/></Link>
        <Link to="./узи" className="cards__link" onClick={handleDirectionCardClick}><Card title="Акушерство" imagePath={image6}/></Link>
        <Link to="./узи" className="cards__link" onClick={handleDirectionCardClick}><Card title="Анализы" imagePath={image7}/></Link>
      </ul>
    </section>
  )
}

export default Directions;