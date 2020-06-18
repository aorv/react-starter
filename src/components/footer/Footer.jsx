import React from 'react';

const year = new Date().getFullYear();

export const Footer = () => (
  <footer className="p-4 md:p-16 text-center">
    <span className="copyright opacity-50">&copy; {year} React Starter.</span>
  </footer>
);
