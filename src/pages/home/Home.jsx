import React from 'react';
import { Page } from '../../components'

const pageTitle = 'Home';

export const Home = () => (
  <Page pageTitle={pageTitle}>
    <h1>{pageTitle}</h1>
    <p className="w-1/2 text-center mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, placeat! Ratione quia maiores quas nisi culpa libero, non velit, aperiam maxime sint minus amet consectetur architecto distinctio quod cumque quae!</p>
  </Page>
);