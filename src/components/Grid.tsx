import React, { HTMLProps } from 'react';
import clsx from 'clsx';

export interface GridProps extends HTMLProps<HTMLDivElement> {}

export const Grid = ({ children, className, ...props }: GridProps) => (
  <div className={clsx('ms-Grid', className)} {...props}>
    {children}
  </div>
);
