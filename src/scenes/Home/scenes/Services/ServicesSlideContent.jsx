import React from 'react';
import PropTypes from 'prop-types';
import styles from './Services.scss';

export function ServicesSlideContent({ Icon, title, children }) {
  return (
    <div className={styles.content}>
      <div className={styles.topLeftCorner} />
      <div className={styles.topRightCorner} />
      <Icon className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      {children}
      <div className={styles.bottomLeftCorner} />
      <div className={styles.bottomRightCorner} />
    </div>
  );
}

ServicesSlideContent.propTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
