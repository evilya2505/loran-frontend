import Header from './Header';
import { Link } from 'react-router-dom';

function DirectionPage( { handlePageScroll, title }) {
  return (
    <>
      <Header handlePageScroll={handlePageScroll} />
      <main className="direction-page">
        <section className="direction-lead">
          <h1 className="direction-lead__title">{title}</h1>
          <div className="direction-lead__img" />
        </section>

        <section className="direction-info">
          <p className="direction-info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet tortor et purus facilisis venenatis. Sed dui metus, porta a porta id, porta at eros. Donec varius purus egestas tincidunt scelerisque. Nulla massa quam, ultricies vel ullamcorper feugiat, suscipit et dui.</p>
          <p className="direction-info__text">Praesent pulvinar faucibus aliquet. Aliquam sit amet consequat sapien. Phasellus nibh nunc, semper eget mi vel, sagittis sollicitudin ligula. Sed tempus accumsan arcu eu tempor. Fusce vel nisl a magna semper lacinia. Fusce sollicitudin lorem enim, ac imperdiet arcu rutrum quis. Maecenas sed justo urna. Suspendisse quam eros, pretium non diam eget, pharetra varius felis. Sed auctor accumsan tellus, id vulputate nunc lacinia eget.</p>
          <h2 className="direction-info__title">Praesent pulvinar faucibus aliquet:</h2>
          <ul className="direction-info__list">
            <li className="direction-info__list-item">Aliquam sit amet consequat sapien.</li>
            <li className="direction-info__list-item">Phasellus nibh nunc, semper eget mi vel.</li>
            <li className="direction-info__list-item">Sagittis sollicitudin ligula.</li>
            <li className="direction-info__list-item">Fusce vel nisl a magna semper lacinia.</li>
            <li className="direction-info__list-item">Sed auctor accumsan tellus.</li>
          </ul>
        </section>

        <section className="direction-doctors">
          <ul className="direction-doctors__list">
            <li className="direction-doctors__card doctor-card-direction">
              <div className="doctor-card-direction__info">
                <div className="doctor-card-direction__img"></div>
                <p className="doctor-card-direction__subtitle">Lorem, Ipsum</p>
                <h3 className="doctor-card-direction__title">MATTIS Odio Vehicula</h3>
              </div>
              <Link to="/тестовый-врач" className="doctor-card-direction__link">Подробнее</Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default DirectionPage;