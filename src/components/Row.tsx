import React, { HTMLProps } from 'react';
import cn from 'classnames';

export const Row = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => (
  <div className={cn('ms-Grid-row', className)} {...props}>
    {children}
  </div>
);
