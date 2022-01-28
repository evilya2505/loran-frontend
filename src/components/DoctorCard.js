import { Link } from 'react-router-dom';

function DoctorCard(props) {
  return (
    <li className="doctor-card doctors__card">
      <div src="" className="doctor-card__img" alt="изображение врача" />
      <Link to="./тестовый-врач" className="doctor-card__link">
        <div className="doctor-card__info">
          <p className="doctor-card__subtitle">{props.info}</p>
          <h3 className="doctor-card__title">{props.name}</h3>
        </div>
      </Link>
    </li>
  );
}

export default DoctorCard;