import React, { HTMLProps } from 'react';
import clsx from 'clsx';

import type { Dir } from '../types';

export interface GridProps extends Omit<HTMLProps<HTMLDivElement>, 'dir'> {
  readonly dir?: Dir;
}

export const Grid = ({
  children,
  className,
  dir = 'ltr',
  ...props
}: GridProps) => (
  <div className={clsx('ms-Grid', className)} dir={dir} {...props}>
    {children}
  </div>
);
