import { combineReducers } from "redux";
import { doctorsReducer } from "./doctors";
import { servicesReducer } from "./services";
import { authReducer } from "./auth";
import { directionsReducer } from "./directions";
import { formReducer } from "./form";

export const rootReducer = combineReducers({
  doctors: doctorsReducer,
  services: servicesReducer,
  auth: authReducer,
  directions: directionsReducer,
  form: formReducer,
});
