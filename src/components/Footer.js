import logoPath from '../images/logo.svg';
import license from '../images/Лицензия.pdf';

function Footer(props) {
  function openWindow() {
    window.open(license);
  }

  return (
    <>
      <footer className="footer">
        <img className="footer__logo" src={logoPath} alt="логотип" />
        <div className='footer__content'>
          <div className="footer__left-section">
            <ul className="footer__list">
              <li className="footer__list-item"><span className='footer__list-item_type_bold'>Полное наименование организации:</span> ООО «АНГУР»</li>
              <li className="footer__list-item"><span className='footer__list-item_type_bold'>Учредителем является</span> Гуржий Андрей Александрович</li>
              <li className="footer__list-item"><span className='footer__list-item_type_bold'>Контактные телефоны:</span> +76-00-79, +29-90-90, +39-90-90</li>
            </ul>

            <ul className="footer__list">
              <li className="footer__list-item"><span className='footer__list-item_type_bold'>Юридический адрес:</span> 693000, г.Южно-Сахалинск, пр.Победы 55В, кв.63</li>
              <li className="footer__list-item"><span className='footer__list-item_type_bold'>Фактический адрес:</span> 693000, г.Южно-Сахалинск, пр.Победы 10-Б, помещение 20</li>
            </ul>

            <p className="footer__credits">&copy; 2021-2022 Клиника “Лоран”.</p>
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
              <li className="footer__list-item"><a className="footer__list-link" href="./" onClick={openWindow}>Лицензия</a></li>
              <li className="footer__list-item"><a className="footer__list-link" href="./#contacts">Контакты</a></li>
            </ul>
          </div>
        </div>
      </footer>
      {/* <div className="footer-info-wrapper"> */}
        {/* <div className="footer__hr-wrapper"><hr className="footer__hr hr"/></div>

        <div className="footer-info">

          <ul className="footer__list">
            <li className="footer__list-item"><span className='footer__list-item_type_bold'>Полное наименование организации:</span> ООО «АНГУР»</li>
            <li className="footer__list-item"><span className='footer__list-item_type_bold'>Учредителем является</span> Гуржий Андрей Александрович</li>
            <li className="footer__list-item"><span className='footer__list-item_type_bold'>Контактные телефоны:</span> +76-00-79, +29-90-90, +39-90-90</li>
          </ul>

          <ul className="footer__list">
            <li className="footer__list-item"><span className='footer__list-item_type_bold'>Юридический адрес:</span> 693000, г.Южно-Сахалинск, пр.Победы 55В, кв.63</li>
            <li className="footer__list-item"><span className='footer__list-item_type_bold'>Фактический адрес:</span> 693000, г.Южно-Сахалинск, пр.Победы 10-Б, помещение 20</li>
          </ul>

          <p className="footer__credits">&copy; 2021-2022 Клиника “Лоран”.</p>
        </div> */}
      {/* </div> */}
    </>

  )
}

export default Footer;