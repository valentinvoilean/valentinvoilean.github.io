import { compose } from 'redux';
import IsScrolling from 'react-is-scrolling';

import { withReduxConnect } from './withReduxConnect';

import { StickyHeader } from './StickyHeader';

export const StickyHeaderContainer = compose(
  withReduxConnect,
  IsScrolling
)(StickyHeader);
