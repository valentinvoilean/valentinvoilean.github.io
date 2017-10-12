import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from '../ContactForm.scss';

export const ContactFormTextarea = ({
  input,
  label,
  placeholder,
  type,
  displayErrorMessages,
  meta: { touched, error }
}) => (
  <div className={styles.field}>
    <label htmlFor={input.name}>{label}</label>
    <textarea
      {...input}
      placeholder={placeholder}
      type={type}
      className={cx(styles.textarea, {
        [styles.error]: touched && error
      })}
    />
    {touched && displayErrorMessages && (error && <span className={cx(styles.error, styles.message)}>{error}</span>)}
  </div>
);

ContactFormTextarea.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  displayErrorMessages: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

ContactFormTextarea.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  displayErrorMessages: false
};
