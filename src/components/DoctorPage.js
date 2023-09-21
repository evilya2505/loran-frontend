import { useLocation } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

function DoctorPage() {
  const location = useLocation();
  const doctors = useSelector((store) => store.doctors.doctors);
  const [doctor, setDoctor] = React.useState({});

  React.useEffect(() => {
    // находит объект нужного доктора из массива по пути
    doctors.forEach((doctor) => {
      if (
        `${doctor.path}` ===
        location.pathname.split("/")[location.pathname.split("/").length - 1]
      ) {
        setDoctor(doctor);
      }
    });
  }, [doctors, location.pathname]);

  return (
    <>
      <div className="doctor-wrapper">
        <main className="doctor">
          <h1 className="doctor__title">{doctor.fullName}</h1>

          <section className="doctor-content">
            <img
              src={doctor.imagePath}
              className="doctor-content__img"
              alt="изображение доктора"
            ></img>
            <div className="doctor-content__info">
              <p className="doctor-content__text">{doctor.specialty}</p>

              <hr className="doctor-content__hr"></hr>

              <ul className="doctor-content__list">
                <li className="doctor-content__list-item">
                  Время приема: {doctor.appointmentTime}
                </li>
                <li className="doctor-content__list-item">
                  {doctor.education}
                </li>
                <li className="doctor-content__list-item">
                  Учеба: {doctor.university}
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default DoctorPage;
