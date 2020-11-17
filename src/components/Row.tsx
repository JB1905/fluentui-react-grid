import React, { HTMLProps } from 'react';
import cn from 'classnames';

export interface Props extends HTMLProps<HTMLDivElement> {}

export const Row = ({ children, className, ...props }: Props) => (
  <div className={cn('ms-Grid-row', className)} {...props}>
    {children}
  </div>
);
