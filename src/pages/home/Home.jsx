import React from 'react';
import { Page, Button } from '../../components';
import ScrollAnimation from 'react-animate-on-scroll';

const pageTitle = 'Home';

export const Home = () => (
  <Page pageTitle={pageTitle}>
    <ScrollAnimation animateIn="slideUp">
      <h1>{pageTitle}</h1>
    </ScrollAnimation>
    <ScrollAnimation animateIn="slideUp" delay={300}>
      <div className="text-center my-8">
        <p className="mb-6 w-1/2 m-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quasi
          explicabo voluptatibus dolores impedit temporibus maxime enim nobis
          accusamus rem nihil cum voluptatem nisi quod incidunt voluptates
          asperiores vero molestias?
        </p>
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button to="/about">Link</Button>
        <Button type="submit">Submit</Button>
        <Button loading>Link</Button>
        <Button disabled>Link</Button>
      </div>
    </ScrollAnimation>
  </Page>
);
