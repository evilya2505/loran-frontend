import Header from "./Header";

function DoctorPage( { handlePageScroll, name } ) {
  return (
    <>
      <Header handlePageScroll={handlePageScroll}/>
      <div className="doctor-wrapper">
        <main className="doctor">
          <h1 className="doctor__title">
            {name}
          </h1>

          <section className="doctor-content">
            <div className="doctor-content__img"></div>
            <div className="doctor-content__info">
              <p className="doctor-content__text">
                Praesent pulvinar faucibus aliquet. Aliquam sit amet consequat sapien. Phasellus nibh nunc, semper eget mi vel, sagittis sollicitudin ligula. Sed tempus accumsan arcu eu tempor. Fusce vel nisl a magna semper lacinia. Fusce sollicitudin lorem enim, ac imperdiet arcu rutrum quis. Maecenas sed justo urna. Suspendisse quam eros, pretium non diam eget, pharetra varius felis. Sed auctor accumsan tellus, id vulputate nunc lacinia eget.
              </p>

              <hr className="doctor-content__hr"></hr>

              <ul className="doctor-content__list">
                <li className="doctor-content__list-item">Hac habitasse</li>
                <li className="doctor-content__list-item">Laoreet nibh</li>
                <li className="doctor-content__list-item">Lacus risus fermentum</li>
                <li className="doctor-content__list-item">Aliquet molestie</li>
                <li className="doctor-content__list-item">Cras aliquet</li>
              </ul>
            </div>
          </section>
        </main>
      </div>

    </>
  )
}

export default DoctorPage;