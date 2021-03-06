import React from 'react';
import { Element, Link } from 'react-scroll';
import { Parallax, Background } from 'react-parallax';

import { TextSection } from 'components/TextSection';

import { MEDIA_QUERIES } from 'constants/mediaQueries';

import styles from './AboutMe.scss';

import { LINK_OPTIONS } from './AboutMe.constants';

import LaptopSmall from 'img/laptop_small.jpg';
import LaptopLarge from 'img/laptop_large.jpg';

export function AboutMe() {
  return (
    <Element name="about" className={styles.wrapper}>
      <TextSection
        title="About me"
        tag="Hello, I'm Valentin"
        className="container"
        buttonLink="/cv.html"
        buttonText="Download CV"
      >
        <p>
          I’m a <b>Microsoft Certified Professional Developer</b> specialised on front‑end technologies with 10+ years of professional experience.
        </p>
        <p itemProp="author" itemScope itemType="http://schema.org/Person">
          I develop modern, highly interactive, responsive websites & web apps with cutting edge technologies such as React/Redux and AngularJS.
        </p>
        <p>
          I’m strongly focused on modularity and maintainability and I pay great attention to details.
        </p>
      </TextSection>

      <div className={styles.getQuotesWrapper}>
        <Parallax className={styles.gallery} strength={300}>
          <Background>
            <picture data-depth="0.5" data-pointer-events="false">
              <source media={MEDIA_QUERIES.mdMin} srcSet={LaptopLarge} />
              <img src={LaptopSmall} alt="cetate" className={styles.image} />
            </picture>
          </Background>
        </Parallax>
        <div className={styles.galleryContent}>
          <h2 className={styles.title}>{"Let's work together"}</h2>
          <p className={styles.text}>{"I'm available for freelance projects."}</p>
          <Link {...LINK_OPTIONS} to="contact" className={styles.button}>
            Get quotes
          </Link>
        </div>
      </div>
    </Element>
  );
}
