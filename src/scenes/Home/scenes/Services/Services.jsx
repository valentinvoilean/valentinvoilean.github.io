import React from 'react';
import { Element } from 'react-scroll';

import { ServicesSlider } from './ServicesSlider';

import { TextSection } from 'components/TextSection';

import styles from './Services.scss';

import { LINKS } from 'constants/links';

export function Services() {
  return (
    <Element name="services" className={styles.wrapper}>
      <TextSection title="Services" tag="What do I do" className="container" isRightAligned>
        <p>I have been working on several different projects for small and large companies around the world.</p>
        <p>
          You can find more info about my commercial experience on my <a href={LINKS.linkedin}>LinkedIn</a> account. 
          Also, if you are interested in my personal proiects and involvment in open source ones please check my{' '}
          <a href={LINKS.github}>Github</a> profile.
        </p>
      </TextSection>

      <ServicesSlider />
    </Element>
  );
}
