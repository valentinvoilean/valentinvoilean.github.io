import axios from 'axios';

const initialState = {
  error: false,
  message: '',
  isPending: false
};

export const types = {
  contactRequest: 'CONTACT_REQUEST',
  contactSuccess: 'CONTACT_SUCCESS',
  contactFail: 'CONTACT_FAIL'
};

/**
 * Reducer
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case types.contactRequest:
      return { ...state, isPending: true };
    case types.contactSuccess:
      return { ...state, error: false, message: action.message, isPending: false };
    case types.contactFail:
      return { ...state, error: true, message: action.message, isPending: false };
    default:
      return state;
  }
}

/**
 Actions
 */

export const ACTIONS = {
  sendMessage: formValues => async dispatch => {
    try {
      dispatch({ type: types.contactRequest });
      const response = await axios.post('http://contact.valentinvoilean.com/contact', formValues);
      const {
        data: { responseCode, responseDesc }
      } = response;

      if (responseCode === 0) {
        return dispatch({ type: types.contactSuccess, message: responseDesc });
      }

      return dispatch({ type: types.contactFail, message: responseDesc });
    } catch (error) {
      dispatch({ type: types.contactFail, message: 'Unexpected server error. Please try again later.' });
    }
  }
};
