import React from 'react';
<<<<<<< HEAD
import { Page, Button } from '../../components'
=======
import { Page } from '../../components';
>>>>>>> origin/setup

const pageTitle = 'Home';

export const Home = () => (
  <Page pageTitle={pageTitle}>
    <h1>{pageTitle}</h1>
<<<<<<< HEAD
    <p className="w-1/2 text-center mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, placeat! Ratione quia maiores quas nisi culpa libero, non velit, aperiam maxime sint minus amet consectetur architecto distinctio quod cumque quae!</p>
    <div className="text-center my-8">
      <Button>Button</Button>
      <Button variant="secondary">Button</Button>
      <Button to="/about">Link</Button>
      <Button type="submit">Submit</Button>
      <Button loading>Link</Button>
      <Button disabled>Link</Button>
    </div>
=======
    <p className="w-1/2 text-center mx-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, placeat!
      Ratione quia maiores quas nisi culpa libero, non velit, aperiam maxime
      sint minus amet consectetur architecto distinctio quod cumque quae!
    </p>
>>>>>>> origin/setup
  </Page>
);
