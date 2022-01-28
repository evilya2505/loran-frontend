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
            <h3 className="about__text-title">Donec quis mattis felis</h3>
            <p className="about__text-subtitle">
              Donec quis mattis felis, tristique bibendum risus. Duis suscipit, purus ac malesuada sagittis,
            lorem orci pulvinar ex, sed ornare sem ex ac massa. Fusce sodales pretium enim vel interdum.
            Suspendisse blandit dolor sit amet risus efficitur egestas.
            </p>
          </div>
          <img className="about__img" src={imagePath} alt="изображение клиники"></img>
        </div>
      </section>
    </div>
  );
}

export default About;