import React, { HTMLProps } from 'react';
import clsx from 'clsx';

interface Props extends HTMLProps<HTMLDivElement> {}

export const Grid = ({ children, className, ...props }: Props) => (
  <div className={clsx('ms-Grid', className)} {...props}>
    {children}
  </div>
);
