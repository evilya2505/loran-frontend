import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

function EditorPage() {
  const pathnameArray = useLocation().pathname.split("/");
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("doctors");
  }, []);
  return (
    <main className="editor__page">
      <div className="editor__header">
        <h3 className="editor__title">Редактирование сайта</h3>
        <ul className="editor__header-btns-list">
          <li className="editor__header-btns-list-item">
            <Link
              to="doctors"
              className={`${
                pathnameArray[pathnameArray.length - 1] === "doctors"
                  ? "editor__header-btn editor__header-btn_active"
                  : "editor__header-btn"
              }`}
            >
              Сотрудники
            </Link>
          </li>

          <li className="editor__header-btns-list-item">
            <Link
              to="directions"
              className={`${
                pathnameArray[pathnameArray.length - 1] === "directions"
                  ? "editor__header-btn editor__header-btn_active"
                  : "editor__header-btn"
              }`}
            >
              Направления
            </Link>
          </li>

          <li className="editor__header-btns-list-item">
            <Link
              to="prices"
              className={`${
                pathnameArray[pathnameArray.length - 1] === "prices"
                  ? "editor__header-btn editor__header-btn_active"
                  : "editor__header-btn"
              }`}
            >
              Цены и услуги
            </Link>
          </li>

          <li className="editor__header-btns-list-item">
            <Link
              to="users"
              className={`${
                pathnameArray[pathnameArray.length - 1] === "users"
                  ? "editor__header-btn editor__header-btn_active"
                  : "editor__header-btn"
              }`}
            >
              Пользователи
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
}

export default EditorPage;
