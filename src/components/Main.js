import Directions from "./Directions";
import Doctors from "./Doctors";
import About from "./About";
import Contacts from "./Contacts";

function Main({ handleMenuEl }) {
  return (
    <>
    <Directions handleMenuEl={handleMenuEl}></Directions>
    <About handleMenuEl={handleMenuEl} />
    <Doctors handleMenuEl={handleMenuEl} />
    <Contacts handleMenuEl={handleMenuEl} />
    </>
  );
}

export default Main;