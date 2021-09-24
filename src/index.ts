import { Grid } from './components/Grid';
import { Row } from './components/Row';
import { Col } from './components/Col';

export { Grid, Row, Col };

export type { GridProps } from './components/Grid';
export type { RowProps } from './components/Row';
export type { ColProps } from './components/Col';

const CompoundGrid = Grid as typeof Grid & {
  Row: typeof Row;
  Col: typeof Col;
};

CompoundGrid.Row = Row;
CompoundGrid.Col = Col;

export default CompoundGrid;
