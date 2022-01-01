import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

import { __DEV__ } from '../constants';

type Element = HTMLDivElement;

export interface RowProps extends HTMLProps<Element> {}

export const Row = forwardRef<Element, RowProps>(
  ({ children, className, ...props }, ref) => (
    <div className={clsx('ms-Grid-row', className)} ref={ref} {...props}>
      {children}
    </div>
  )
);

if (__DEV__) {
  Row.displayName = 'Row';
}
