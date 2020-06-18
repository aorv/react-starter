import React from 'react';
import { Helmet } from "react-helmet";
import { SITE_TITLE } from '../../utils/constants';

export const Page = ({
  pageTitle,
  children
}) => (
  <>
    <Helmet>
        <title>{pageTitle == 'Home' ? SITE_TITLE : `${pageTitle} | ${SITE_TITLE}` }</title>
    </Helmet>
    {children}
  </>
);
