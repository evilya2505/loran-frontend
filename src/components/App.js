import Main from "./Main";
import Header from "./Header";
import Lead from "./Lead";
import Footer from "./Footer";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import DoctorPage from "./DoctorPage";
import DirectionPage from "./DirectionPage";
import PricesPage from "./PricesPage";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../services/actions/doctors";
import { getServices } from "../services/actions/services";
import LoginPage from "./LoginPage";
import { authorization, getUserInfo } from "../services/actions/auth";
import { getDirections } from "../services/actions/directions";
import EditorDoctorsDetails from "./EditorDoctorsDetails";
import EditorPage from "./EditorPage";
import Modal from "./Modal";
import { SET_CURRENT_DOCTOR_INFO } from "../services/actions/doctors";
function App() {
  const [isScrollAllowed, setIsScrollAllowed] = React.useState(true);
  const [isAboutSectionVisible, setAboutSectionVisibility] =
    React.useState(false);
  const [isDoctorsSectionVisible, setDoctorsSectionVisibility] =
    React.useState(false);
  const [isContactsSectionVisible, setContactsSectionVisibility] =
    React.useState(false);
  const [isDirectionSectionVisible, setDirectionSectionVisibility] =
    React.useState(false);
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    React.useState(false);
  const userInfo = useSelector((store) => store.auth.userInfo);
  const loggedIn = useSelector((store) => store.auth.loggedIn);
  const currentDoctor = useSelector((store) => store.doctors.currentDoctorInfo);
  const isOnSubmit = useSelector((store) => store.form.isOnSubmit);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(getDoctors());
    dispatch(getServices());
    dispatch(getDirections());
  }, [dispatch]);

  React.useEffect(() => {
    if (!loggedIn) {
      dispatch(getUserInfo());
    }

    if (
      location.pathname.includes("/admin/login") &&
      JSON.stringify(userInfo) !== "{}"
    ) {
      navigate("/");
    }
  }, [location.pathname, navigate, userInfo]);

  function handleMenuEl(element, isVisible) {
    switch (element) {
      case "about":
        isVisible
          ? setAboutSectionVisibility(true)
          : setAboutSectionVisibility(false);
        break;
      case "doctors":
        isVisible
          ? setDoctorsSectionVisibility(true)
          : setDoctorsSectionVisibility(false);
        break;
      case "contacts":
        isVisible
          ? setContactsSectionVisibility(true)
          : setContactsSectionVisibility(false);
        break;
      case "directions":
        isVisible
          ? setDirectionSectionVisibility(true)
          : setDirectionSectionVisibility(false);
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

  function handleLoginSubmit(userData) {
    dispatch(authorization(userData));
  }

  function closePopup() {
    setIsConfirmationModalVisible(false);
  }

  const modal = <Modal closePopup={closePopup}></Modal>;

  return (
    <div className={isScrollAllowed ? `page` : `page page_type_no-scroll`}>
      <Header
        handlePageScroll={handlePageScroll}
        isAboutSectionVisible={isAboutSectionVisible}
        isDoctorsSectionVisible={isDoctorsSectionVisible}
        isContactsSectionVisible={isContactsSectionVisible}
        isDirectionSectionVisible={isDirectionSectionVisible}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="page__top-wrapper">
                <Lead />
              </div>

              <Main handleMenuEl={handleMenuEl} />
            </>
          }
        />
        <Route path="/directions/:path" element={<DirectionPage />} />
        <Route path="/doctors/:path" element={<DoctorPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route
          path="/admin/login"
          element={<LoginPage handleLoginSubmit={handleLoginSubmit} />}
        />
        <Route path="/admin/editor" element={<EditorPage />}>
          <Route path="doctors" element={<EditorDoctorsDetails />} />
          <Route path="directions" element={<EditorDoctorsDetails />} />
          <Route path="prices" element={<EditorDoctorsDetails />} />
          <Route path="users" element={<EditorDoctorsDetails />} />
        </Route>
      </Routes>

      <Footer />

      {isConfirmationModalVisible && modal}
    </div>
  );
}

export default App;
