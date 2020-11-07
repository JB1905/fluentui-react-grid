import React, { HTMLProps } from 'react';
import cn from 'classnames';

export interface RowProps extends HTMLProps<HTMLDivElement> {}

export const Row = ({ children, className, ...props }: RowProps) => (
  <div {...props} className={cn('ms-Grid-row', className)}>
    {children}
  </div>
);
