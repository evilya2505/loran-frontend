import React from "react";

function LoginPage({ handleLoginSubmit }) {
  const usernameRef = React.useRef("");
  const passwordRef = React.useRef("");

  const onChange = (e) => {
    // console.log(e.target.value, e.target.name);
    switch (e.target.name) {
      case "username":
        usernameRef.current = e.target.value;
        break;
      case "password":
        passwordRef.current = e.target.value;
        break;
      default:
        break;
    }
  };

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      console.log(usernameRef.current, passwordRef.current);
      handleLoginSubmit({
        username: usernameRef.current,
        password: passwordRef.current,
      });
      // onAddEventFormSubmit({
      //   executor: executorRef.current,
      //   id: usernameRef.current,
      //   workdate: date,
      //   customer: customerRef.current,
      //   workdesrciption: workDesrciptionRef.current,
      // });
    },
    [handleLoginSubmit]
  );

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

  return (
    <form onSubmit={handleSubmit} className="form" name="login" noValidate>
      <h2 className="form__title">Авторизация</h2>
      <fieldset className="form__fieldset">
        <h3 className="form__input-title">Никнейм:</h3>
        <input
          type="text"
          name="username"
          ref={usernameRef}
          onChange={onChange}
          placeholder="Никнейм"
          minLength="2"
          maxLength="40"
          className="form__input"
          required
        />
        <span>
          {/* {(nameInput.errorText && nameInput.isOnFocus) && nameInput.errorText} */}
        </span>
        <h3 className="form__input-title">Пароль:</h3>
        <input
          type="password"
          name="password"
          ref={passwordRef}
          onChange={onChange}
          placeholder="Пароль"
          minLength="2"
          maxLength="200"
          className="form__input"
          required
        />
        <span>
          {/* {(descriptionInput.errorText && descriptionInput.isOnFocus) && descriptionInput.errorText} */}
        </span>
        <button type="submit" className="form__button">
          Войти
        </button>
      </fieldset>
    </form>
  );
}

export default LoginPage;
