import React from 'react';
import { NavLink } from "react-router-dom";

export const Header = () => (
  <header className="p-4 md:p-16 flex items-center justify-between">
    <NavLink to="/">
      <img width="175" src="img/logo.svg" alt=""/>
    </NavLink>

    <nav>
      <NavLink className="c-nav-link" to="/">Home</NavLink>
      <NavLink className="c-nav-link" to="/about">About</NavLink>
    </nav>
  </header>
);
