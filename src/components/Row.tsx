import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

type Element = HTMLDivElement;

export interface RowProps extends HTMLProps<HTMLDivElement> {}

export const Row = forwardRef<Element, RowProps>(
  ({ children, className, ...props }, ref) => (
    <div className={clsx('ms-Grid-row', className)} {...props} ref={ref}>
      {children}
    </div>
  )
);
