import React from 'react';
import { Page } from '../../components'
import ScrollAnimation from 'react-animate-on-scroll';

const pageTitle = 'About';

export const About = () => (
  <Page pageTitle={pageTitle}>
    <ScrollAnimation animateIn="slideUp">
      <h1>{pageTitle}</h1>
    </ScrollAnimation>
    <ScrollAnimation animateIn="slideUp" delay={300}>
      <p className="w-1/2 text-center mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        reiciendis blanditiis hic harum, voluptas quia eaque repudiandae eius ad
        ducimus. Numquam dicta voluptatum, nobis quibusdam atque eaque placeat
        cumque fugiat?
      </p>
    </ScrollAnimation>
  </Page>
);
