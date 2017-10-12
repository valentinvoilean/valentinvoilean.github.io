import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import contactForm from 'scenes/Home/scenes/Contact/ContactForm/duck';
import mainMenuReducer from 'scenes/Home/components/MainMenu/MainMenu.ducks';

export default combineReducers({
  mainMenu: mainMenuReducer,
  form: formReducer,
  contactForm
});
