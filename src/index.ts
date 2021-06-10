import { Grid, GridProps } from './components/Grid';
import { Row, RowProps } from './components/Row';
import { Col, ColProps } from './components/Col';

export { Grid, GridProps, Row, RowProps, Col, ColProps };

const CompoundGrid = Grid as typeof Grid & {
  Row: typeof Row;
  Col: typeof Col;
};

CompoundGrid.Row = Row;
CompoundGrid.Col = Col;

export default CompoundGrid;
