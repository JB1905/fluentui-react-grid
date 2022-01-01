import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

import { __DEV__ } from '../constants';

import type { Dir } from '../types';

type Element = HTMLDivElement;

export interface GridProps extends Omit<HTMLProps<Element>, 'dir'> {
  readonly dir?: Dir;
}

export const Grid = forwardRef<Element, GridProps>(
  ({ children, className, dir = 'ltr', ...props }, ref) => (
    <div className={clsx('ms-Grid', className)} dir={dir} ref={ref} {...props}>
      {children}
    </div>
  )
);

if (__DEV__) {
  Grid.displayName = 'Grid';
}
