import React from 'react';
import { Element } from 'react-scroll';
import MediaQuery from 'react-responsive';
import { Parallax, Background } from 'react-parallax';
import Typist from 'react-typist';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { MEDIA_QUERIES } from 'constants/mediaQueries';
import { LINKS } from 'constants/links';

import styles from './Gallery.scss';
import scrollDownAnimation from './animations/scrollDown.animation.scss';
import animatedMesssageAnimation from './animations/animatedMesssage.animation.scss';
import socialIconsAnimation from './animations/socialIcons.animation.scss';

import ScrollDownDesktopIcon from 'img/scrollDown_desktop.svg';
import ScrollDownMobileIcon from 'img/scrollDown_mobile.svg';

import CetateSmall from 'img/cetate_small.jpg';
import CetateMedium from 'img/cetate_medium.jpg';
import CetateBig from 'img/cetate_big.jpg';
import EmailIcon from 'img/email.svg';
import LinkedinIcon from 'img/linkedin.svg';
import GithubIcon from 'img/github.svg';
import StackOverflowIcon from 'img/stackOverflow.svg';
import TwitterIcon from 'img/twitter.svg';

export class Gallery extends React.PureComponent {
  state = {
    showSocialIcons: false
  };

  delayGenerator = (mean, std, current) => (current.lineIdx > 4 ? 35 : 70);

  displaySocialIcons = () => {
    setTimeout(() => {
      this.setState({ showSocialIcons: true });
    }, 1000);
  };

  render() {
    const transitionLength = parseInt(socialIconsAnimation.transitionlength, 10);

    return (
      <Element name="home" className={styles.wrapper}>
        <Parallax className={styles.gallery} strength={300}>
          <Background>
            <picture data-depth="0.5" data-pointer-events="false">
              <source media={MEDIA_QUERIES.mdMin} srcSet={CetateBig} />
              <source media={MEDIA_QUERIES.smMin} srcSet={CetateMedium} />
              <img src={CetateSmall} className={styles.image} alt="cetate" />
            </picture>
          </Background>
        </Parallax>

        <div className={styles.verticallyCenteredContent}>
          <div className={animatedMesssageAnimation.base}>
            <span>Valentin Voilean</span>
          </div>

          <div className={styles.socialIcons} component="div">
            <div>
              <a href={LINKS.email}>
                <EmailIcon alt="email" />
              </a>
              <a href={LINKS.linkedin}>
                <LinkedinIcon alt="linkedin" />
              </a>
              <a href={LINKS.github}>
                <GithubIcon alt="github" />
              </a>
              <a href={LINKS.stackOverflow}>
                <StackOverflowIcon alt="stackoverflow" />
              </a>
              <a href={LINKS.twitter}>
                <TwitterIcon alt="twitter" />
              </a>
            </div>
          </div>
        </div>

        <div className={scrollDownAnimation.base}>
          <span className={scrollDownAnimation.txt}>Scroll Down</span>
          <MediaQuery query={MEDIA_QUERIES.smMax}>
            <ScrollDownMobileIcon className={scrollDownAnimation.img} alt="scrollDown" />
          </MediaQuery>

          <MediaQuery query={MEDIA_QUERIES.mdMin}>
            <ScrollDownDesktopIcon className={scrollDownAnimation.img} alt="scrollDown" />
          </MediaQuery>
        </div>
      </Element>
    );
  }
}
