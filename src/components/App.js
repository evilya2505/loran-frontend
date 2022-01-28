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

        <Route exact path="/тестовый-врач">
          <DoctorPage handlePageScroll={handlePageScroll} name="MATTIS Odio Vehicula"/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
