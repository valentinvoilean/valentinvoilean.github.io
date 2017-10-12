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
          I’m a <b>Microsoft Certified Professional Developer</b> specialised in the client-side or Front End interface,
          connecting the user with complex backend technologies.
        </p>
        <p itemProp="author" itemScope itemType="http://schema.org/Person">
          In short, I like to call myself a <b itemProp="jobTitle">React developer</b>, since, for the last 2 years I’ve
          been developing applications with <b>React & Redux</b>.
        </p>
        <p>
          I’m always eager to learn new technologies and passionate about developing great ideas. Love facing challenges
          and creating successful products.
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
