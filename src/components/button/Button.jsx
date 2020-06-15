import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Spinner } from '..';
export const Button = ({
  children,
  accessibilityLabel,
  onClick = () => { },
  to,
  className,
  spinnerColour = 'green',
  reference,
  modifier: {
    type = 'primary',
    loading = false,
    disabled = false,
    full = false,
    fullAtSmall = false,
    size = 'medium'
  } = {}
}) => {
  const buttonClassNames = classNames(
    'text-white rounded px-4 relative focus:outline-none',
    {
      'bg-green-500 text-white': type === 'primary' && !disabled,
      'bg-blue-500 text-white': type === 'secondary' && !disabled,
      'bg-primary text-white': type === 'brand' && !disabled,
      'bg-white text-gray-600 border border-gray-500':
        type === 'ghost' && !disabled,
      'bg-white text-red-600 border border-red-500':
        type === 'error-ghost' && !disabled,
      'bg-red-500 text-white border border-red-500':
        type === 'error' && !disabled,
      'h-8 text-sm': size === 'small',
      'h-10': size === 'medium',
      'h-12': size === 'large',
      'w-full': full,
      'w-full md:w-auto': fullAtSmall,
      'bg-gray-400 border border-gray-400 text-white cursor-not-allowed': disabled
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
        className={classNames(
          buttonClassNames,
          'inline-flex items-center justify-center'
        )}
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
      ref={reference}
    >
      {loading && (
        <Spinner modifier={{ type: spinnerColour, customSize: '10' }} />
      )}
      <span
        className={classNames('flex items-center justify-center', {
          invisible: loading
        })}
        aria-hidden={accessibilityLabel ? 'true' : 'false'}
      >
        {children}
      </span>
    </button>
  );
};
