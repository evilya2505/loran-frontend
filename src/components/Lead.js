import imagePath from '../images/3E9A8803_.jpg';

function Lead(props) {
  return (
    <div className="lead-wrapper">
      <hr className="hr" />
      <section className="lead">
        <div className="lead__texts">
          <h1 className="lead__title">
            Consult a doctor anytime, anywhere by video call
          </h1>
          <p className="lead__subtitle">
            Vivamus feugiat sapien sit amet pulvinar suscipit.
          </p>
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