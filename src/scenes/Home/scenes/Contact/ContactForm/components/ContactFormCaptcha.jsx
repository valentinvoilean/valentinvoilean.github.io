import React from 'react';
import PropTypes from 'prop-types';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

import styles from '../ContactForm.scss';

export const ContactFormCaptcha = (props) => (
  <div className={styles.field}>
    <GoogleReCaptcha onVerify={props.input.onChange} />
  </div>
);

ContactFormCaptcha.propTypes = {
  input: PropTypes.object.isRequired
};
