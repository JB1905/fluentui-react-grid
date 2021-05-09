import React, { HTMLProps } from 'react';
import clsx from 'clsx';

export interface RowProps extends HTMLProps<HTMLDivElement> {}

export const Row = ({ children, className, ...props }: RowProps) => (
  <div className={clsx('ms-Grid-row', className)} {...props}>
    {children}
  </div>
);
