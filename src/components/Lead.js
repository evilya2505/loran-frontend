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
            <p className="lead__phone-number">8 (94242) 76 00 79</p>
            <p className="lead__phone-number">+39-90-90</p>
            <p className="lead__phone-number">+29-90-90</p>
          </div>
          <a className="lead__link" href="https://med.sakh.com/clinic-loran">Запись через сайт</a>
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