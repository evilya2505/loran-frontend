import React from 'react';
import logoPath from '../images/logo.svg'
import locationPath from '../images/location.svg';
import { useLocation, Link } from 'react-router-dom';


function Header({ handlePageScroll, isAboutSectionVisible, isDirectionSectionVisible, isDoctorsSectionVisible, isContactsSectionVisible }) {
  const [isOpened, setIsOpened] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);
  const location = useLocation();

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && document.body.clientWidth >= 768) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  });

  React.useEffect(() => {
    handlePageScroll(isOpened);
  }, [isOpened, handlePageScroll]);

  function handleBtn(e) {
    if (e.target.classList.contains('header__menu-btn')) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
  }

  function handleMenuItemClick() {
    if (isOpened) {
      setIsOpened(false);
      handlePageScroll(isOpened);
    }
  }

  function headerWrapperClass() {
    console.log(location.pathname);
    let headerWrapperClassName;

    if (location.pathname === '/') {
      headerWrapperClassName = 'header-wrapper_type_main';
    } else {
      headerWrapperClassName = 'header-wrapper_type_other';
    }

    return headerWrapperClassName;
  }

  return (
    <div className={`header-wrapper ${isSticky && `header-wrapper_type_sticky`} ${headerWrapperClass()}`}>
      <header className="header">
        <div className="header__left-section">
          <Link to="/"><img src={logoPath} alt="логотип" className="header__logo"/></Link>
        </div>
        <div className={isOpened ? `header__right-section header__right-section_opened` : `header__right-section`}>
          <ul className="header__list">
            <li className="header__list-item"><a className="header__list-link" href="./">Главная</a></li>
            <li className="header__list-item"><a className={`header__list-link ${isAboutSectionVisible ? 'header__list-link_active' : ''}`} href="https://loran-frontend.vercel.app/#about-us" onClick={handleMenuItemClick}>О Нас</a></li>
            <li className="header__list-item"><a className={`header__list-link ${isDirectionSectionVisible ? 'header__list-link_active' : ''}`} href="https://loran-frontend.vercel.app/#directions" onClick={handleMenuItemClick}>Услуги</a></li>
            <li className="header__list-item"><a className={`header__list-link ${isDoctorsSectionVisible ? 'header__list-link_active' : ''}`} href="https://loran-frontend.vercel.app/#doctors" onClick={handleMenuItemClick}>Врачи</a></li>
            <li className="header__list-item"><a className={`header__list-link ${isContactsSectionVisible ? 'header__list-link_active' : ''}`} href="https://loran-frontend.vercel.app/#contacts" onClick={handleMenuItemClick}>Контакты</a></li>
          </ul>

          <div className="header__contacts-wrapper">
            <img className="header__contacts-icon" src={locationPath} alt="изображение локация"></img>
            <p className="header__contacts">пр.Победы, 106</p>
            <p className="header__contacts">+ 39-90-90</p>
          </div>

        </div>

        <button className={isOpened ? `header__close-btn header__close-btn_visible` : `header__close-btn`} onClick={handleBtn}/>
        <button className="header__menu-btn" onClick={handleBtn}/>
      </header>
    </div>
  );
}

export default Header;