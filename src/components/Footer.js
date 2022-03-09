import logoPath from '../images/logo.svg';
import license from '../images/Лицензия.pdf';
import document from '../images/Документ_ЕГРЮЛ.pdf';

function Footer(props) {
  function openWindow(doc) {
    switch (doc) {
      case "license":
        window.open(license);
        break;
      case "document":
        window.open(document);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <footer className="footer">
        <img className="footer__logo" src={logoPath} alt="логотип" />
        <div className='footer__content'>
          <div className="footer__left-section">
            <ul className="footer__list">
              <li className="footer__list-item">ОГРН 1206500006217</li>
              <li className="footer__list-item">ИНН 6501311760</li>
              <li className="footer__list-item"><span className='footer__list-item_type_bold'>Полное наименование организации:</span> ООО «АНГУР»</li>
              <li className="footer__list-item"><span className='footer__list-item_type_bold'>Учредителем является</span> Гуржий Андрей Александрович</li>
              <li className="footer__list-item"><span className='footer__list-item_type_bold'>Контактные телефоны:</span> +76-00-79, +29-90-90, +39-90-90</li>
            </ul>

            <ul className="footer__list">
              <li className="footer__list-item"><span className='footer__list-item_type_bold'>Юридический адрес:</span> 693000, г.Южно-Сахалинск, пр.Победы 55В, кв.63</li>
              <li className="footer__list-item"><span className='footer__list-item_type_bold'>Фактический адрес:</span> 693000, г.Южно-Сахалинск, пр.Победы 10-Б, помещение 20</li>
            </ul>


            <ul className="footer__list">
              <h3 className="footer__list-title">Адреса органов исполнительной власти субъекта РФ</h3>
              <li className="footer__list-item"><a className="footer__list-link" href="./">Роспотребнадзор: г.Южно-Сахалинск,  ул. Чехова, д.30, тел.8(4242)495200</a></li>
              <li className="footer__list-item"><a className="footer__list-link" href="./#about-us">Росздравнадзор: г.Южно-Сахалинск,  ул.К.Маркса, д.24, тел. 8(4242)728557</a></li>
            </ul>

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
              <li className="footer__list-item"><a className="footer__list-link" href="./" onClick={() => {openWindow("license")}}>Лицензия</a></li>
              <li className="footer__list-item"><a className="footer__list-link" href="./" onClick={() => {openWindow("document")}}>Документ ЕГРЮЛ</a></li>
              <li className="footer__list-item"><a className="footer__list-link" href="./#contacts">Контакты</a></li>
            </ul>
          </div>
        </div>

        <p className="footer__info-text">Помощь оказывается на платной основе, расчет производится – наличный и безналичный.</p>

        <p className="footer__info-text">Экстренная бесплатная помощь в соответствии с постановлением Правительства Сахалинской области от 30.12.2020 №661 г. Южно-Сахалинска «Об утверждении Территориальной  программы Сахалинской области государственных гарантий бесплатного оказания гражданам медицинской помощи на 2021год и на плановый период 2022  и 2023 годов» оказывается в Муниципальных учреждениях здравоохранения.</p>

        <p className="footer__credits">&copy; 2021-2022 Клиника “Лоран”.</p>
      </footer>
    </>

  )
}

export default Footer;