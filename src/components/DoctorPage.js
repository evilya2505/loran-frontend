import Header from "./Header";
import doctor_1 from '../images/doctor_1.jpg';
import doctor_2 from '../images/doctor_2.jpg';
import doctor_3 from '../images/doctor_3.jpg';
import {
  useLocation,
} from "react-router-dom";
import React from "react";

function DoctorPage( { handlePageScroll, name, infoObj } ) {
  const location = useLocation();

  function setDoctorImgPath() {
    switch(location.pathname) {
      case "/gorbunov-vyacheslav-alexandrovich":
        return doctor_1;
      case "/gulevich-evgeniya-alexandrovna":
        return doctor_2;
      case "/gurzhiy-andrey-alexandrovich":
        return doctor_3;
      default:
        break;
    }
  }

  return (
    <>
      <Header handlePageScroll={handlePageScroll}/>
      <div className="doctor-wrapper">
        <main className="doctor">
          <h1 className="doctor__title">
            {name}
          </h1>

          <section className="doctor-content">

            <img src={setDoctorImgPath()} className="doctor-content__img" alt="изображение доктора"></img>
            <div className="doctor-content__info">
              <p className="doctor-content__text">
                {infoObj.direction}
              </p>

              <hr className="doctor-content__hr"></hr>

              <ul className="doctor-content__list">
                <li className="doctor-content__list-item">Время приема: {infoObj.time}</li>
                <li className="doctor-content__list-item">{infoObj.education}</li>
                <li className="doctor-content__list-item">Учеба: {infoObj.university}</li>
              </ul>
            </div>
          </section>
        </main>
      </div>

    </>
  )
}

export default DoctorPage;