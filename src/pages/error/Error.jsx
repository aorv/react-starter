import React from 'react';
import { Page } from '../../components'

const pageTitle = 'Error 404';

export const Error = () => (
  <Page pageTitle={pageTitle}>
    <h1>{pageTitle} - Oops, page not found!</h1>
  </Page>
);
