import React, { HTMLProps } from 'react';
import cn from 'classnames';

import { Row } from './Row';
import { Col } from './Col';

export const Grid = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => (
  <div className={cn('ms-Grid', className)} {...props}>
    {children}
  </div>
);

Grid.Row = Row;
Grid.Col = Col;
