const initialState = {
  isActive: false
};

const MAIN_MENU_TOGGLE = 'MAIN_MENU::TOGGLE';

/**
 * Reducer
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case MAIN_MENU_TOGGLE: {
      if (typeof action.status === 'boolean') {
        return {
          ...state,
          isActive: action.status
        };
      }

      return {
        ...state,
        isActive: !state.isActive
      };
    }
    default:
      return state;
  }
};

/**
 * Actions
 * @param status
 */
export const toggleMainMenu = status => ({
  type: MAIN_MENU_TOGGLE,
  status
});
