import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
  function handleDirectionCardClick() {
    window.scrollTo(0, 0);
  }

  return (
    <li className="doctor-card doctors__card">
      <Link
        to={`/doctors/${doctor.path}`}
        className="doctor-card__link"
        onClick={handleDirectionCardClick}
      >
        <img
          src={doctor.imagePath}
          className="doctor-card__img"
          alt="изображение врача"
        />
        <div className="doctor-card__info">
          <p className="doctor-card__subtitle">{doctor.specialty}</p>
          <h3 className="doctor-card__title">{doctor.fullName}</h3>
        </div>
      </Link>
    </li>
  );
}

export default DoctorCard;
