import { connect } from 'react-redux';

import { toggleMainMenu } from './components/MainMenu/MainMenu.ducks';

export const withReduxConnect = connect(
  null,
  { toggleMainMenu }
);
