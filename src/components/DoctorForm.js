import React from "react";
import Input from "./Input";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { editDoctor } from "../services/actions/doctors";

function DoctorForm({ doctor }) {
  const [newData, setNewData] = React.useState({
    fullName: doctor.fullName,
    path: doctor.path,
    specialty: doctor.specialty,
    appointmentTime: doctor.appointmentTime,
    education: doctor.education,
    university: doctor.university,
  });
  const fullNameRef = React.useRef(doctor.fullName);
  const pathRef = React.useRef(doctor.path);
  const specialtyRef = React.useRef(doctor.specialty);
  const appointmentTimeRef = React.useRef(doctor.appointmentTime);
  const educationRef = React.useRef(doctor.education);
  const universityRef = React.useRef(doctor.university);

  const [isEditing, setIsEditing] = React.useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prev) => ({
      ...prev,
      [name]: value,
    }));

    switch (name) {
      case "fullName":
        fullNameRef.current = value;
        break;
      case "path":
        pathRef.current = value;
        break;
      case "specialty":
        specialtyRef.current = value;
        break;
      case "appointmentTime":
        appointmentTimeRef.current = value;
        break;
      case "education":
        educationRef.current = value;
        break;
      case "university":
        universityRef.current = value;
        break;
      default:
        break;
    }
  };

  function onSubmit() {
    dispatch(
      editDoctor({
        fullName: fullNameRef.current,
        path: pathRef.current,
        specialty: specialtyRef.current,
        education: educationRef.current,
        university: universityRef.current,
      })
    );
  }

  return (
    <Form
      handleSubmitFunc={onSubmit}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
    >
      <Input
        title="ФИО"
        placeholder="ФИО"
        name="fullName"
        initialState={doctor.fullName}
        isDisabled={isEditing}
        onChange={handleChange}
        value={newData.fullName}
        refInput={fullNameRef}
      />

      <Input
        title="Путь к странице"
        placeholder="Путь к странице"
        name="path"
        initialState={doctor.path}
        isDisabled={isEditing}
        onChange={handleChange}
        refInput={pathRef}
        value={newData.path}
      />

      <Input
        title="Специальность"
        placeholder="Специальность"
        name="specialty"
        initialState={doctor.specialty}
        isDisabled={isEditing}
        onChange={handleChange}
        refInput={specialtyRef}
        value={newData.specialty}
      />
      <Input
        title="Время приема"
        placeholder="Время приема"
        name="appointmentTime"
        initialState={doctor.appointmentTime}
        isDisabled={isEditing}
        onChange={handleChange}
        refInput={appointmentTimeRef}
        value={newData.appointmentTime}
      />

      <Input
        title="Университет"
        placeholder="Университет"
        name="education"
        initialState={doctor.education}
        isDisabled={isEditing}
        onChange={handleChange}
        refInput={educationRef}
        value={newData.education}
      />

      <Input
        title="Образование"
        placeholder="Образование"
        name="university"
        initialState={doctor.university}
        isDisabled={isEditing}
        onChange={handleChange}
        refInput={universityRef}
        value={newData.university}
      />
    </Form>
  );
}

export default DoctorForm;
