import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-scroll';
import MediaQuery from 'react-responsive';
import EscapeOutside from 'react-escape-outside';

import { HamburgerMenu } from 'components/HamburgerMenu';

import { toggleMainMenu } from './MainMenu.ducks';

import { MEDIA_QUERIES } from 'constants/mediaQueries';
import { LINK_OPTIONS } from './MainMenu.constants';

import styles from './MainMenu.scss';

export class MainMenuComponent extends React.PureComponent {
  static propTypes = {
    // Store Props
    isActive: PropTypes.bool.isRequired,

    // Store Actions
    toggleMainMenu: PropTypes.func.isRequired
  };

  state = { active: false };

  handleClick = () => {
    this.props.toggleMainMenu();
  };

  handleEscapeOutside = () => {
    this.props.toggleMainMenu(false);
  };

  render() {
    return (
      <EscapeOutside onEscapeOutside={this.handleEscapeOutside} className={styles.mainmenu}>
        <div>
          <MediaQuery query={MEDIA_QUERIES.smMax}>
            <HamburgerMenu
              active={this.props.isActive}
              type="collapse"
              onClick={this.handleClick}
              className={styles.hamburger}
            />
          </MediaQuery>

          <span className={styles.background} />
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link {...LINK_OPTIONS} to="home" data-hover="Home">
                  Home
                </Link>
              </li>
              <li>
                <Link {...LINK_OPTIONS} to="about" data-hover="About">
                  About
                </Link>
              </li>
              <li>
                <Link {...LINK_OPTIONS} to="services" data-hover="Services">
                  Services
                </Link>
              </li>
              <li>
                <Link {...LINK_OPTIONS} to="contact" data-hover="Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </EscapeOutside>
    );
  }
}

const mapStateToProps = state => ({
  isActive: state.mainMenu.isActive
});

const mapDispatchToProps = {
  toggleMainMenu
};

export const MainMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenuComponent);
