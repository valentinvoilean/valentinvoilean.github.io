import React from 'react';
import cx from 'classnames';
import EscapeOutside from 'react-escape-outside';
import { Link } from 'react-scroll';
import styles from './Logo.scss';

export class Logo extends React.PureComponent {
  state = {
    active: false
  };

  activateLogo = () => {
    this.setState({ active: true });
  };

  deactivateLogo = () => {
    this.setState({ active: false });
  };

  toggleActivation = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const classes = cx(styles.logo, {
      [styles.enter]: this.state.active,
      [styles.leave]: !this.state.active
    });

    return (
      <EscapeOutside onEscapeOutside={this.deactivateLogo}>
        <Link to="home" duration={500} smooth>
          <div
            className={classes}
            onMouseEnter={this.activateLogo}
            onMouseLeave={this.deactivateLogo}
            onTouchEnd={this.toggleActivation}
          >
            <div className={styles.square} />
            <span className={styles.firstLetter}>V</span>
            <span className={styles.surname}>Valentin</span>
            <span className={styles.firstName}>Voilean</span>
          </div>
        </Link>
      </EscapeOutside>
    );
  }
}
