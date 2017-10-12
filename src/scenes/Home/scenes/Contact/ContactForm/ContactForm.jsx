import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import cx from 'classnames';

import { ContactFormField } from './components/ContactFormField';
import { ContactFormTextarea } from './components/ContactFormTextarea';
import { ContactFormCaptcha } from './components/ContactFormCaptcha';

import styles from './ContactForm.scss';

import { emailValidations, nameValidations, messageValidations } from './validations';

import LoadingIcon from 'img/loading.svg';

export class ContactForm extends React.PureComponent {
  handleSubmit = values => {
    this.props.sendMessage(values);
  };

  render() {
    const { handleSubmit, messageStatus } = this.props;
    const { message, isPending, error } = messageStatus;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Field
          name="name"
          component={ContactFormField}
          placeholder="John Smith"
          type="text"
          validate={nameValidations}
          label="Full Name *"
          displayErrorMessages
        />
        <Field
          name="email"
          component={ContactFormField}
          placeholder="john@smith.com"
          type="email"
          validate={emailValidations}
          label="Email Address *"
          displayErrorMessages
        />
        <Field
          name="message"
          component={ContactFormTextarea}
          placeholder="Hi!..."
          type="textarea"
          validate={messageValidations}
          label="Your Message *"
          displayErrorMessages
        />
        <Field name="g-recaptcha-response" component={ContactFormCaptcha} />
        <button className={styles.button} type="submit">
          {isPending && [
            <span key="buttonMessage" className={styles.buttonMessage}>
              Sending message...
            </span>,
            <LoadingIcon key="icon" className={styles.loadingIcon} />
          ]}
          {!isPending && 'Send message'}
        </button>

        {!!message.length && (
          <div
            className={cx(styles.formMessage, {
              [styles.error]: error
            })}
          >
            {message}
          </div>
        )}
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  messageStatus: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired
};
