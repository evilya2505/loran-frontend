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
              <p className="contacts__info-subtitle">пр.Победы, 106</p>
            </div>
            <div className="contacts__info-item">
              <img src={phonePath} className="contacts__info-icon" alt="иконка телефона"/>
              <h4 className="contacts__info-title">Номер телефона:</h4>
              <p className="contacts__info-subtitle">+ 39-90-90</p>
            </div>
            <div className="contacts__info-item">
              <img className="contacts__info-icon" alt="иконка инстаграма" src={instagramIcon} />
              <p className="contacts__info-subtitle">@vehicula</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts;