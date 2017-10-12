import { connect } from 'react-redux';
import { getFormValues, getFormMeta, getFormSyncErrors } from 'redux-form';

import { ACTIONS } from '../duck';

export const withReduxConnect = connect(
  state => ({
    formValues: getFormValues('contact')(state),
    formMeta: getFormMeta('contact')(state),
    formSyncErrors: getFormSyncErrors('contact')(state),
    messageStatus: state.contactForm
  }),
  { sendMessage: ACTIONS.sendMessage }
);
