import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './TextSection.scss';

export function TextSection({ title, tag, children, isRightAligned, className, buttonText, buttonLink }) {
  return (
    <div
      className={cx(
        styles.section,
        {
          [styles.isRightAligned]: isRightAligned
        },
        className
      )}
    >
      <aside className={styles.sidebar}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.tag}>{tag}</h2>

        {!!buttonText.length && (
          <a href={buttonLink} className={styles.button}>
            {buttonText}
          </a>
        )}
      </aside>
      <section className={styles.textContent}>{children}</section>
    </div>
  );
}

TextSection.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isRightAligned: PropTypes.bool,
  className: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
};

TextSection.defaultProps = {
  isRightAligned: false,
  className: '',
  buttonText: '',
  buttonLink: '#'
};
