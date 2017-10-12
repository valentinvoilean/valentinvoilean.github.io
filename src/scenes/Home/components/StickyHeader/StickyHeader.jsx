import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Waypoint } from 'react-waypoint';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './StickyHeader.scss';
import animations from './animations/slideInFromTopAnimation.scss';

export class StickyHeader extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    scrollDirection: PropTypes.string.isRequired,
    isMenuActive: PropTypes.bool.isRequired
  };

  state = {
    isSticky: false
  };

  handleWaypointEnter = () => {
    this.setState({ isSticky: false });
  };

  handleWaypointLeave = () => {
    this.setState({ isSticky: true });
  };

  render() {
    const { children, scrollDirection, isMenuActive } = this.props;

    const headerStyles = cx(styles.stickyHeader, {
      [styles.isSticky]: this.state.isSticky
    });

    const isHeaderActive = scrollDirection === 'up' || !this.state.isSticky || isMenuActive;

    return (
      <div className={styles.header}>
        <Waypoint onEnter={this.handleWaypointEnter} />
        <TransitionGroup component="div">
          {isHeaderActive && (
            <CSSTransition
              classNames={animations}
              timeout={{
                enter: parseInt(animations.transitionlength, 10),
                exit: parseInt(animations.transitionlength, 10)
              }}
            >
              <header className={headerStyles}>
                <div className={cx(styles.headerWrapper, 'container-desktop')}>{children}</div>
              </header>
            </CSSTransition>
          )}
        </TransitionGroup>
        <Waypoint topOffset="-75px" onLeave={this.handleWaypointLeave} />
      </div>
    );
  }
}
