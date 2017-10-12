import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from '../ContactForm.scss';

export const ContactFormField = ({
  input,
  label,
  placeholder,
  type,
  displayErrorMessages,
  meta: { touched, error }
}) => (
  <div className={styles.field}>
    <label htmlFor={input.name}>{label}</label>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className={cx(styles.input, {
        [styles.error]: touched && error
      })}
    />
    {touched && displayErrorMessages && (error && <span className={cx(styles.error, styles.message)}>{error}</span>)}
  </div>
);

ContactFormField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  displayErrorMessages: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

ContactFormField.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  displayErrorMessages: false
};
