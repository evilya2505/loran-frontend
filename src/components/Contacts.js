import instagramIcon from '../images/instagram.svg';
import locationPath from '../images/location.svg';
import phonePath from '../images/phone.svg';
import React from 'react';
import { useInView } from 'react-intersection-observer';

function Contacts({ handleMenuEl }) {
  const { ref, inView } = useInView({ threshold: 1 });

  React.useEffect(() => {
    handleMenuEl('contacts', inView);
  }, [inView, handleMenuEl]);

  return (
    <div className="contacts-wrapper" id="contacts" ref={ref}>
      <section className="contacts">
        <h2 className="section-title contacts__section-title">Контакты</h2>
        <hr className="hr"></hr>
        <div className="contacts__content">
        <iframe title="map" src="https://yandex.ru/map-widget/v1/-/CCU5Q6xQ8C" className="contacts__iframe"></iframe>
          <div className="contacts__info">
            <div className="contacts__info-item">
              <img src={locationPath} className="contacts__info-icon" alt="иконка локация"/>
              <h4 className="contacts__info-title">Адрес:</h4>
              <p className="contacts__info-subtitle">пр.Победы 10-Б</p>
            </div>
            <div className="contacts__info-item">
              <img src={phonePath} className="contacts__info-icon" alt="иконка телефона"/>
              <h4 className="contacts__info-title">Номерa телефона:</h4>
              <div className="contacts__info-phone-nums">
                <a href="tel:8 (94242) 76 00 79" className="contacts__info-subtitle contacts__info-phone">8 (4242) 76 00 79, </a>
                <a href="tel:+29-90-90" className="contacts__info-subtitle contacts__info-phone">+ 29-90-90, </a>
                <a href="tel:+39-90-90" className="contacts__info-subtitle contacts__info-phone">+ 39-90-90</a>
              </div>

            </div>
            <div className="contacts__info-item">
              <img className="contacts__info-icon" alt="иконка инстаграма" src={instagramIcon} />
              <a className="contacts__info-link" href="https://www.instagram.com/klinika_loran/" target="_blank" rel="noreferrer">
                <p className="contacts__info-subtitle">@klinika_loran</p>
              </a>

              <a className="contacts__info-link" href="https://www.instagram.com/doctors65/" target="_blank" rel="noreferrer">
                <p className="contacts__info-subtitle">@doctors65</p>
              </a>
            </div>
            <div className="contacts__info-item contacts__info-item_type_no-icon">
              <h4 className="contacts__info-title">График&nbsp;работы:</h4>
              <p className="contacts__info-subtitle">в будние дни с 10:00 до 20:00, в cубботу с 10:00 до 14:00, воскресенье выходной</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts;