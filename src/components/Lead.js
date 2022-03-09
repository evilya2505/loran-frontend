import imagePath from '../images/3E9A8803_.jpg';

function Lead(props) {
  return (
    <div className="lead-wrapper">
      <hr className="hr" />
      <section className="lead">
        <div className="lead__texts">
          <h1 className="lead__title">
            Проконсультируйтесь с врачом в любое время и в любом месте по телефону
          </h1>

          <div className="lead__phone-numbers">
            <p className="lead__subtitle">
              Телефон для записи:
            </p>
            <a href="tel:8 (94242) 76 00 79" className="lead__phone-number">8 (4242) 76 00 79</a>
            <a href="tel:+39-90-90" className="lead__phone-number">+39-90-90</a>
            <a href="tel:+29-90-90" className="lead__phone-number">+29-90-90</a>
          </div>
          <a className="lead__link" href="https://med.sakh.com/clinic-loran" target="_blank" rel="noreferrer">Запись через сайт</a>
        </div>
        <div className="lead__img-section">
          <div className="lead__img-wrapper"/>
          <img src={imagePath} alt="изображение клиники" className="lead__img"></img>
          <a href="./#about-us" className="lead__btn">О Клинике</a>
        </div>
      </section>
    </div>
  );
}

export default Lead;