import { compose } from 'redux';

import { withReduxForm, withReduxConnect } from './hocs';

import { ContactForm } from './ContactForm';

export const ContactFormContainer = compose(
  withReduxForm,
  withReduxConnect
)(ContactForm);
