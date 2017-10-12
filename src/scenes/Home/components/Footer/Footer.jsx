import React from 'react';
import { Link } from 'react-scroll';

import EmailIcon from 'img/email.svg';
import LinkedinIcon from 'img/linkedin.svg';
import GithubIcon from 'img/github.svg';
import StackOverflowIcon from 'img/stackOverflow.svg';
import TwitterIcon from 'img/twitter.svg';

import { LINKS } from 'constants/links';
import { LINK_OPTIONS } from './Footer.constants';

import styles from './Footer.scss';

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <h3 className={styles.tag}>I focus on quality and I pay great attention to details.</h3>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link {...LINK_OPTIONS} to="home">
                Home
              </Link>
            </li>
            <li>
              <Link {...LINK_OPTIONS} to="about">
                About
              </Link>
            </li>
            <li>
              <Link {...LINK_OPTIONS} to="services">
                Services
              </Link>
            </li>
            <li>
              <Link {...LINK_OPTIONS} to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.copyright} itemProp="author" itemScope itemType="http://schema.org/Person">
          ©2017 <span itemProp="givenName">Valentin</span> <span itemProp="familyName">Voilean</span>. All rights
          reserverd.
        </div>
        <div className={styles.socialIcons}>
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
  );
}
