import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

import type { Dir } from '../types';

type Element = HTMLDivElement;

export interface GridProps extends Omit<HTMLProps<Element>, 'dir'> {
  readonly dir?: Dir;
}

export const Grid = forwardRef<Element, GridProps>(
  ({ children, className, dir = 'ltr', ...props }, ref) => (
    <div className={clsx('ms-Grid', className)} dir={dir} {...props} ref={ref}>
      {children}
    </div>
  )
);
