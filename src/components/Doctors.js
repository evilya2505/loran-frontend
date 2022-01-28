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
        <DoctorCard info="Lorem, Ipsum" name="MATTIS Odio Vehicula"/>
        <DoctorCard info="Lorem, Ipsum" name="MATTIS Odio Vehicula"/>
        <DoctorCard info="Lorem, Ipsum" name="MATTIS Odio Vehicula"/>
      </ul>
    </section>
  );
}

export default Doctors;