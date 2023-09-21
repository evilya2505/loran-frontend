import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function DirectionPage() {
  const directions = useSelector((store) => store.directions.directions);
  const [direction, setDirection] = React.useState({});
  const location = useLocation();
  React.useEffect(() => {
    // находит объект нужного направления из массива по пути
    directions.forEach((direction) => {
      if (
        `${direction.path}` ===
        location.pathname.split("/")[location.pathname.split("/").length - 1]
      ) {
        setDirection(direction);
      }
    });
  }, [directions, location.pathname]);

  return (
    <>
      <main className="direction-page">
        <section className="direction-lead">
          <h1 className="direction-lead__title">{direction.name}</h1>
          {/* <div className="direction-lead__img" /> */}
        </section>

        <section className="direction-info">
          <p className="direction-info__text">{direction.description}</p>
          <a href="./prices" className="direction-info__title">
            Цены
          </a>

          {/* <ul className="direction-info__list">
            <li className="direction-info__list-item">Aliquam sit amet consequat sapien.</li>
            <li className="direction-info__list-item">Phasellus nibh nunc, semper eget mi vel.</li>
            <li className="direction-info__list-item">Sagittis sollicitudin ligula.</li>
            <li className="direction-info__list-item">Fusce vel nisl a magna semper lacinia.</li>
            <li className="direction-info__list-item">Sed auctor accumsan tellus.</li>
          </ul> */}
        </section>

        {/* <section className="direction-doctors">
          <ul className="direction-doctors__list">
            <li className="direction-doctors__card doctor-card-direction">
              <div className="doctor-card-direction__info">
                <div className="doctor-card-direction__img"></div>
                <p className="doctor-card-direction__subtitle">Lorem, Ipsum</p>
                <h3 className="doctor-card-direction__title">MATTIS Odio Vehicula</h3>
              </div>
              <Link to="/тестовый-врач" className="doctor-card-direction__link">Подробнее</Link>
            </li>
          </ul>
        </section> */}
      </main>
    </>
  );
}

export default DirectionPage;
