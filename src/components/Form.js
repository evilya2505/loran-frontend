import React from "react";
import deleteIcon from "../images/icons8-delete.svg";
import saveIcon from "../images/icons8-check-mark-78.png";
import editIcon from "../images/icons8-edit.svg";

function Form({ children, handleSubmitFunc, setIsEditing, isEditing }) {
  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();

    handleSubmitFunc();
  }, []);

  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.keyCode === 13) {
        handleSubmit(e);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [handleSubmit]);

  function onEditIconClick() {
    setIsEditing(!isEditing);
  }

  return (
    <form onSubmit={handleSubmit} className="" name="editDoctors" noValidate>
      <fieldset className="form__fieldset">
        {children}
        <ul className="form__btns-section">
          <li className="form__btns-item">
            <button
              onClick={onEditIconClick}
              type="button"
              className="form__btn form__btn_type_icon"
            >
              <img className="form__btn-icon" src={editIcon}></img>
            </button>
          </li>
          <li className="form__btns-item">
            <button type="submit" className="form__btn form__btn_type_icon">
              <img className="form__btn-icon" src={saveIcon}></img>
            </button>
          </li>
          <li className="form__btns-item">
            <button type="submit" className="form__btn form__btn_type_icon">
              <img className="form__btn-icon" src={deleteIcon}></img>
            </button>
          </li>
        </ul>
      </fieldset>
    </form>
  );
}

export default Form;
