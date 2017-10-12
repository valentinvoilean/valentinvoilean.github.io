import { connect } from 'react-redux';

export const withReduxConnect = connect(state => ({
  isMenuActive: state.mainMenu.isActive
}));
