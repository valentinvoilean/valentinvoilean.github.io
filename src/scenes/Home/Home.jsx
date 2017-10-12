import React from 'react';
import PropTypes from 'prop-types';
import { Events, scrollSpy, scroller } from 'react-scroll';

import styles from './Home.scss';

import { AboutMe, Services, Contact } from './scenes';
import { Gallery, Logo, MainMenu, StickyHeader, Footer } from './components';

import { SCROLL_OPTIONS } from './Home.constants';

export class Home extends React.PureComponent {
  static propTypes = {
    toggleMainMenu: PropTypes.func.isRequired
  };

  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      this.props.toggleMainMenu(false);
    });

    scrollSpy.update();
    scroller.scrollTo('home', SCROLL_OPTIONS);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <StickyHeader>
          <Logo />
          <MainMenu />
        </StickyHeader>

        <Gallery />

        <AboutMe />
        <Services />
        <Contact />

        <Footer />
      </div>
    );
  }
}
