import React from 'react';

import { classnames } from '@utils/helpers';

import styles from './Button.module.scss';
import '@app/globals.scss'

type ButtonProps = {
  onClick?: () => void,
  className?: string,
  children: React.ReactElement | string,
}

const Button = ({ onClick, className = '', children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classnames(styles.button, 'box-shadow', className)}
    >
      {children}
    </button>
  )
}

export default Button;
