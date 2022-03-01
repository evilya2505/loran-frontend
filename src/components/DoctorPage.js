import Header from "./Header";

function DoctorPage( { handlePageScroll, name, infoObj } ) {
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
                {infoObj.direction}
              </p>

              <hr className="doctor-content__hr"></hr>

              <ul className="doctor-content__list">
                <li className="doctor-content__list-item">Время приема: {infoObj.time}</li>
                <li className="doctor-content__list-item">Образование: {infoObj.education}</li>
              </ul>
            </div>
          </section>
        </main>
      </div>

    </>
  )
}

export default DoctorPage;