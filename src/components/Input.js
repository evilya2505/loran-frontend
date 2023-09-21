import React from "react";
import useInput from "./hooks/useInput";
import { useSelector } from "react-redux";
function Input({
  title,
  name,
  placeholder,
  initialState,
  isDisabled,
  onChange,
  value,
  refInput,
}) {
  const input = useInput(initialState);

  return (
    <div className="input">
      <h3 className="input__title">{title}:</h3>
      <textarea
        type="text"
        name={name}
        value={value}
        ref={refInput}
        onChange={onChange}
        className="input__input"
        placeholder={placeholder}
        onFocus={(e) => {
          input.handleOnFocus(e, true);
        }}
        onBlur={(e) => {
          input.handleOnFocus(e, false);
        }}
        disabled={!isDisabled}
        required
      />
      <span>
        {/* {(descriptionInput.errorText && descriptionInput.isOnFocus) && descriptionInput.errorText} */}
      </span>
    </div>
  );
}

export default Input;
