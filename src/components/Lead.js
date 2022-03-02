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
          <p className="lead__subtitle">
            Телефоны для записи: 8 (94242) 76 00 79, +39&#8209;90&#8209;90
          </p>
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