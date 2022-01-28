import logoPath from '../images/logo.svg';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__left-section">
        <img className="footer__logo" src={logoPath} alt="логотип" />
        <p className="footer__credits">© 2022.</p>
      </div>

      <div className="footer__right-section">
        <ul className="footer__list">
          <h3 className="footer__list-title">Разделы сайта</h3>
          <li className="footer__list-item"><a className="footer__list-link" href="./">Главная</a></li>
          <li className="footer__list-item"><a className="footer__list-link" href="./#about-us">О Нас</a></li>
          <li className="footer__list-item"><a className="footer__list-link" href="./#directions">Услуги</a></li>
          <li className="footer__list-item"><a className="footer__list-link" href="./#doctors">Врачи</a></li>
        </ul>

        <ul className="footer__list">
          <h3 className="footer__list-title">Клиника “Лоран”</h3>
          <li className="footer__list-item"><a className="footer__list-link" href="./">Лицензии и сертификаты</a></li>
          <li className="footer__list-item"><a className="footer__list-link" href="./#contacts">Контакты</a></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer;