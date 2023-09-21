import DoctorForm from "./DoctorForm";
import { useSelector } from "react-redux";

function EditorDoctorsDetails({ handleEditDoctorSubmitBtn }) {
  const doctors = useSelector((store) => store.doctors.doctors);
  const testDoctor = {
    id: 3,
    fullName: "Гуржий Андрей Александрович",
    path: "gurzhiy-andrey-alexandrovich",
    specialty: "Врач акушер-гинеколог",
    appointmentTime: "Понедельник, Среда , Пятница с 16-30 до 19-00",
    education: "Высшее образование, Высшая квалификационная категория",
    university: "Амурская Государственная Медицинская академия 1990-1996г",
    imagePath:
      "http://localhost:3001/doctors/pictures/doctor_3_1693323283522.jpg",
  };
  return (
    <div className="editor__form-container">
      {doctors.map((doctor) => {
        return (
          <DoctorForm
            doctor={doctor}
            handleEditDoctorSubmitBtn={handleEditDoctorSubmitBtn}
          />
        );
      })}
      <DoctorForm doctor={testDoctor} />
      <DoctorForm doctor={testDoctor} />
      <DoctorForm doctor={testDoctor} />
    </div>
  );
}

export default EditorDoctorsDetails;
