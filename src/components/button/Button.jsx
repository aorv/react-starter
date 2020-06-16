import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Button = ({
  children,
  secondary,
  loading,
  disabled,
  accessibilityLabel,
  onClick = () => { },
  to,
  className
}) => {
  const buttonClassNames = classNames(
    'button',
    {
      'button--secondary': secondary,
      'cursor-not-allowed': disabled
    },
    className
  );

  const onClickHandler = e => {
    if (!loading && !disabled) {
      onClick(e);
    }
  };

  if (to) {
    if (disabled) {
      return (
        <span aria-label={accessibilityLabel} className={buttonClassNames}>
          {children}
        </span>
      );
    }
    return (
      <NavLink
        to={to}
        className={buttonClassNames}
        aria-label={accessibilityLabel}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      type="button"
      className={buttonClassNames}
      onClick={e => onClickHandler(e)}
      disabled={disabled || loading}
      aria-label={accessibilityLabel}
      aria-disabled={disabled || loading}
    >
      {
        loading ?
        // TO DO: Replace with spinner component
        'loading…' :
        children
      }
    </button>
  );
};
