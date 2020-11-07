import React, { HTMLProps } from 'react';
import cn from 'classnames';

import { Row, RowProps } from './Row';
import { Col, ColProps } from './Col';

interface GridProps extends HTMLProps<HTMLDivElement> {}

export const Grid: React.FC<GridProps> & {
  Row: React.FC<RowProps>;
  Col: React.FC<ColProps>;
} = ({ children, className, ...props }) => (
  <div {...props} className={cn('ms-Grid', className)} dir="ltr">
    {children}
  </div>
);

Grid.Row = Row;
Grid.Col = Col;
