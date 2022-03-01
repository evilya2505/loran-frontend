import Main from "./Main";
import Header from "./Header";
import Lead from "./Lead";
import Footer from "./Footer";
import { Switch ,Route } from 'react-router-dom';
import React from "react";
import DoctorPage from "./DoctorPage";
import DirectionPage from "./DirectionPage";

function App() {
  const [isScrollAllowed, setIsScrollAllowed] = React.useState(true);
  const [isAboutSectionVisible, setAboutSectionVisibility] = React.useState(false);
  const [isDoctorsSectionVisible, setDoctorsSectionVisibility] = React.useState(false);
  const [isContactsSectionVisible, setContactsSectionVisibility] = React.useState(false);
  const [isDirectionSectionVisible, setDirectionSectionVisibility] = React.useState(false);

  function handleMenuEl(element, isVisible) {
    switch (element) {
      case 'about':
        isVisible ? setAboutSectionVisibility(true) : setAboutSectionVisibility(false);
        break;
      case 'doctors':
        isVisible ? setDoctorsSectionVisibility(true) : setDoctorsSectionVisibility(false);
        break;
      case 'contacts':
        isVisible ? setContactsSectionVisibility(true) : setContactsSectionVisibility(false);
        break;
      case 'directions':
        isVisible ? setDirectionSectionVisibility(true) : setDirectionSectionVisibility(false);
        break;
      default:
        break;
    }
  }

  function handlePageScroll(isMenuOpened) {
    if (isMenuOpened) {
      setIsScrollAllowed(false);
    } else {
      setIsScrollAllowed(true);
    }
  }

  return (
    <div className={isScrollAllowed ? `page` : `page page_type_no-scroll`}>
      <Switch>
        <Route exact path="/">
          <div className="page__top-wrapper">
            <Header
              handlePageScroll={handlePageScroll}
              isAboutSectionVisible={isAboutSectionVisible}
              isDoctorsSectionVisible={isDoctorsSectionVisible}
              isContactsSectionVisible={isContactsSectionVisible}
              isDirectionSectionVisible={isDirectionSectionVisible}
            />
            <Lead />
          </div>
          <Main handleMenuEl={handleMenuEl}></Main>
        </Route>

        <Route exact path="/узи">
          <DirectionPage handlePageScroll={handlePageScroll} title='Узи'/>
        </Route>

        <Route exact path="/косметология">
          <DirectionPage handlePageScroll={handlePageScroll} title='Косметология'/>
        </Route>

        <Route exact path="/гемабанк">
          <DirectionPage handlePageScroll={handlePageScroll} title='Гемабанк'/>
        </Route>

        <Route exact path="/gurzhiy-andrey-alexandrovich">
          <DoctorPage
            handlePageScroll={handlePageScroll}
            name="Гуржий Андрей Александрович"
            infoObj={{direction: "Врач акушер-гинеколог", time: "Время приема: Понедельник, Среда , Пятница с 16-30 до 19-00", education:"Закончил Амурскую Государственную Медицинскую академию в 1996г"}}/>
        </Route>

        <Route exact path="/gorbunov-vyacheslav-alexandrovich">
          <DoctorPage
            handlePageScroll={handlePageScroll}
            name="Горбунов Вячеслав Александрович"
            infoObj={{direction: "Врач ультразвуковой диагностики", time: "Понедельник, Среда , Пятница с 16-30 до 19-00", education:"Закончил Амурскую Государственную Медицинскую академию в 1996г"}}/>
        </Route>

        <Route exact path="/gulevich-evgeniya-alexandrovna">
          <DoctorPage
            handlePageScroll={handlePageScroll}
            name="Гулевич Евгения Александровна"
            infoObj={{direction: "Врач акушер-гинеколог", time: "Вторник, Четверг с 16-30 до 19-00", education:"Закончил Амурскую Государственную Медицинскую академию в 2012г"}}/>
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
