import DoctorCard from "./DoctorCard";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

function Doctors({ handleMenuEl }) {
  const { ref, inView } = useInView({ threshold: 1 });
  const doctors = useSelector((store) => store.doctors.doctors);

  React.useEffect(() => {
    handleMenuEl("doctors", inView);
  }, [inView, handleMenuEl]);

  return (
    <section className="doctors" id="doctors" ref={ref}>
      <h3 className="doctors__title">Врачи</h3>
      <hr className="hr" />
      <ul className="doctors__cards">
        {doctors.map((doctor) => {
          return <DoctorCard doctor={doctor} />;
        })}
      </ul>
    </section>
  );
}

export default Doctors;
