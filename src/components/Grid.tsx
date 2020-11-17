import React, { HTMLProps } from 'react';
import cn from 'classnames';

import { Row } from './Row';
import { Col } from './Col';

interface Props extends HTMLProps<HTMLDivElement> {}

export const Grid = ({ children, className, ...props }: Props) => (
  <div className={cn('ms-Grid', className)} {...props}>
    {children}
  </div>
);

Grid.Row = Row;
Grid.Col = Col;
