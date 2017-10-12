import React, { PureComponent } from 'react';
import cx from 'classnames';
import Slider from 'react-slick';
import MediaQuery from 'react-responsive';

import styles from './Services.scss';

import { ServicesSlideContent } from './ServicesSlideContent';

import SmartPhoneIcon from 'img/smartphone.svg';
import CodingIcon from 'img/coding.svg';
import IdeaIcon from 'img/idea.svg';
import PhotoCameraIcon from 'img/photo-camera.svg';

import { LINKS } from 'constants/links';
import { SLIDER_OPTIONS } from './ServicesSlider.constants';
import { MEDIA_QUERIES } from 'constants/mediaQueries';

export class ServicesSlider extends PureComponent {
  getSliderContent() {
    return [
      <div key="WebDevelopment" className={styles.slide}>
        <ServicesSlideContent Icon={CodingIcon} title="Web Development">
          <span className={styles.text}>
            HTML, CSS, JS, jQuery, React, Angular,
            <br />
            Node, Webpack,
            <br />
            SASS, LESS
          </span>
        </ServicesSlideContent>
      </div>,

      <div key="MobileApp" className={styles.slide}>
        <ServicesSlideContent Icon={SmartPhoneIcon} title="Mobile App">
          <span className={styles.text}>
            React Native, Meteor, <br />
            Phonegap, Cordova
          </span>
        </ServicesSlideContent>
      </div>,

      <div key="WebDesign" className={styles.slide}>
        <ServicesSlideContent Icon={IdeaIcon} title="Web Design">
          <span className={styles.text}>
            Sketch, <br />
            Adobe Photoshop,
            <br />
            Adobe XD
          </span>
        </ServicesSlideContent>
      </div>,

      <div key="Photography" className={styles.slide}>
        <ServicesSlideContent Icon={PhotoCameraIcon} title="Photography">
          <div>
            <span className={styles.text}>Adobe Lightroom,</span>
            <a className={styles.link} href={LINKS.photo}>
              500px
            </a>
          </div>
        </ServicesSlideContent>
      </div>
    ];
  }

  render() {
    return (
      <div className={styles.sliderWrapper}>
        <MediaQuery query={MEDIA_QUERIES.smMax}>
          <Slider {...SLIDER_OPTIONS} className={cx('container', styles.slider)}>
            {this.getSliderContent()}
          </Slider>
        </MediaQuery>

        <MediaQuery query={MEDIA_QUERIES.mdMin}>
          <div className={cx('container', styles.slider)}>{this.getSliderContent()}</div>
        </MediaQuery>
      </div>
    );
  }
}
