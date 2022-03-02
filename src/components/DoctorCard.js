import { Link } from 'react-router-dom';
import doctor_1 from '../images/doctor_1.jpg';
import doctor_2 from '../images/doctor_2.jpg';
import doctor_3 from '../images/doctor_3.jpg';

function DoctorCard({ name, link, info }) {

  function setDoctorImgPath() {
    switch(name) {
      case "Горбунов Вячеслав Александрович":
        return doctor_1;
      case "Гулевич Евгения Александровна":
        return doctor_2;
      case "Гуржий Андрей Александрович":
        return doctor_3;
      default:
        break;
    }
  }

  return (
    <li className="doctor-card doctors__card">
      <Link to={link} className="doctor-card__link">
        <img src={setDoctorImgPath()} className="doctor-card__img" alt="изображение врача" />
        <div className="doctor-card__info">
          <p className="doctor-card__subtitle">{info}</p>
          <h3 className="doctor-card__title">{name}</h3>
        </div>
      </Link>
    </li>
  );
}

export default DoctorCard;