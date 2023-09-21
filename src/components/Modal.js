import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import { useSelector } from "react-redux";
const modalRoot = document.getElementById("react-modals");

function Modal({ children, closePopup }) {
  const doctor = useSelector((store) => store.doctors.currentDoctorInfo);

  return ReactDOM.createPortal(
    <ModalOverlay closePopup={closePopup}>
      <div className="modal">
        <button
          type="button"
          className="modal__close-button"
          onClick={closePopup}
        ></button>
        {/* {children} */}
        <p>{doctor.fullName}</p>
      </div>
    </ModalOverlay>,
    modalRoot
  );
}

export default Modal;
