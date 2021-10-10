import React from 'react';
import { Element } from 'react-scroll';

import { ContactForm } from './ContactForm';

import styles from './Contact.scss';

import PhoneIcon from 'img/phone.svg';
import LocationIcon from 'img/location.svg';
import EmailIcon from 'img/emailFull.svg';

import { LINKS } from 'constants/links';

export function Contact() {
  return (
    <Element name="contact" className={styles.wrapper}>
      <div className="container">
        <div className={styles.section} itemProp="author" itemScope itemType="http://schema.org/Person">
          <aside className={styles.sidebar}>
            <h3 className={styles.title}>Contact</h3>
            <h4 className={styles.tag}>Write me a line</h4>
            <p className={styles.textContent}>
              Feel free to react out to me for any question or comment regarding my services I offer.
            </p>
            <p className={styles.info}>
              <LocationIcon height={11} />
              <span itemProp="address">Brasov, Romania</span>
            </p>
            <p className={styles.info}>
              <PhoneIcon height={11} />
              <span itemProp="telephone">(+40) 758 864 127</span>
            </p>
            <p className={styles.info}>
              <EmailIcon height={11} />
              <a href={LINKS.email}>
                <span itemProp="email">vvoilean@gmail.com</span>
              </a>
            </p>
          </aside>
          <div className={styles.form}>
            <ContactForm />
          </div>
        </div>
      </div>
    </Element>
  );
}
