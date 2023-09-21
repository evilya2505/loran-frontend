import React from "react";

export default function useInput(initialState) {
  const inputRef = React.useRef(null);
  const [value, setValue] = React.useState("");
  const [isOnFocus, setIsOnFocus] = React.useState(false);

  React.useEffect(() => {
    setIsOnFocus(false);
    inputRef.current = `${initialState}`;
    setValue(`${initialState}`);
  }, [initialState]);

  const setInputHeight = (element, defaultHeight) => {
    const target = element.target ? element.target : element;

    if (!isOnFocus) {
      target.style.height = defaultHeight;
      target.style.height = `${target.scrollHeight}px`;
    } else {
      target.style.height = defaultHeight;
    }
  };

  const handleInputChange = (e) => {
    inputRef.current = e.target.value;
    setValue(e.target.value);
    setInputHeight(e, "30px");
  };

  const handleOnFocus = (e, state) => {
    setIsOnFocus(state);
    setInputHeight(e, "30px");
  };

  return {
    value,
    handleInputChange,
    handleOnFocus,
    isOnFocus,
    inputRef,
  };
}
