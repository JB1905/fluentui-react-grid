import React, { HTMLProps } from 'react';
import cn from 'classnames';

interface Props extends HTMLProps<HTMLDivElement> {}

export const Row = ({ children, className, ...props }: Props) => (
  <div {...props} className={cn('ms-Grid-row', className)}>
    {children}
  </div>
);
