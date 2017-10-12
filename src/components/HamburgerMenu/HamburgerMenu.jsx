import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import hamburgerStyles from 'hamburgers/_sass/hamburgers/hamburgers.scss';
import './HamburgerMenu.scss';

export function HamburgerMenu(props) {
  const { type, className, active, onClick } = props;

  const classes = cx(hamburgerStyles.hamburger, hamburgerStyles[`hamburger--${type}`], className, {
    [hamburgerStyles[`is-active`]]: active, // used internally for animations
    'is-active': active // used by other components
  });

  return (
    <button type="button" className={classes} onClick={onClick}>
      <span className={hamburgerStyles[`hamburger-box`]}>
        <span className={hamburgerStyles[`hamburger-inner`]} />
      </span>
    </button>
  );
}

HamburgerMenu.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string
};

HamburgerMenu.defaultProps = {
  onClick() {},
  active: false,
  type: 'boring',
  className: ''
};
