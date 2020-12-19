import React, { HTMLProps } from 'react';
import clsx from 'clsx';

export interface Props extends HTMLProps<HTMLDivElement> {}

export const Row = ({ children, className, ...props }: Props) => (
  <div className={clsx('ms-Grid-row', className)} {...props}>
    {children}
  </div>
);
