import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from '../ContactForm.scss';

export function ContactFormCaptcha(props) {
  return (
    <div className={styles.field}>
      <ReCAPTCHA sitekey={process.env.RECAPTCHA_SITE_KEY} onChange={props.input.onChange} />
    </div>
  );
}

ContactFormCaptcha.propTypes = {
  input: PropTypes.object.isRequired
};
