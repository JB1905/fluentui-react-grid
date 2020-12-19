import React, { HTMLProps } from 'react';
import clsx from 'clsx';

import { Row } from './Row';
import { Col } from './Col';

interface Props extends HTMLProps<HTMLDivElement> {}

export const Grid = ({ children, className, ...props }: Props) => (
  <div className={clsx('ms-Grid', className)} {...props}>
    {children}
  </div>
);

Grid.Row = Row;
Grid.Col = Col;
