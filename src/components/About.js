import imagePath from '../images/3E9A8999_.jpg';
import { useInView } from 'react-intersection-observer';
import React from 'react';

function About({ handleMenuEl }) {
  const { ref, inView } = useInView({ threshold: 1 });

  React.useEffect(() => {
    handleMenuEl('about', inView);
  }, [inView, handleMenuEl]);

  return (
    <div className="about-wrapper" id="about-us" ref={ref}>
      <section className="about">
        <h2 className="about__title">О Нас</h2>
        <hr className="hr"></hr>
        <div className="about__info">
          <div className="about__text">
            {/* <h3 className="about__text-title">Donec quis mattis felis</h3> */}
            <p className="about__text-subtitle">
            Клиника создана в 2021 для оказания помощи прекрасной половине человечества. Мы предлагаем инновационные методы лечения и диагностики.
            </p>
          </div>
          <img className="about__img" src={imagePath} alt="изображение клиники"></img>
        </div>
      </section>
    </div>
  );
}

export default About;