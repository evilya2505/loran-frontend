import DoctorCard from "./DoctorCard";
import React from "react";
import { useInView } from "react-intersection-observer";

function Doctors({ handleMenuEl }) {
  const { ref, inView } = useInView({ threshold: 1 });

  React.useEffect(() => {
    handleMenuEl('doctors', inView);
  }, [inView, handleMenuEl]);

  return (
    <section className="doctors" id="doctors" ref={ref}>
      <h3 className="doctors__title">Врачи</h3>
      <hr className="hr" />
      <ul className="doctors__cards">
        <DoctorCard info="Врач акушер-гинеколог" name="Гуржий Андрей Александрович" link="./gurzhiy-andrey-alexandrovich" />
        <DoctorCard info="Врач ультразвуковой диагностики" name="Горбунов Вячеслав Александрович" link="./gorbunov-vyacheslav-alexandrovich" />
        <DoctorCard info="Врач акушер-гинеколог" name="Гулевич Евгения Александровна" link="./gulevich-evgeniya-alexandrovna" />
      </ul>
    </section>
  );
}

export default Doctors;