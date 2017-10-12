/* eslint-disable no-undefined */
export const requiredEmail = value => (value ? undefined : 'An email address is required');
export const requiredName = value => (value ? undefined : 'The name is required');
export const requiredMessage = value => (value ? undefined : 'The message is required');

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

// Password
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined;

export const maxLength = max => value =>
  value && value.length > max ? 'Must be MAX characters or less'.replace('MAX', max) : undefined;

export const minLength = min => value =>
  value && value.length < min ? 'Must be MIN characters or more'.replace('MIN', min) : undefined;

export const emailValidations = [requiredEmail, email];

export const nameValidations = [requiredName, alphaNumeric, minLength(3), maxLength(30)];

export const messageValidations = [requiredMessage, minLength(5), maxLength(200)];
/* eslint-enable no-undefined */
