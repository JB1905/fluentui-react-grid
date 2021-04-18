import { Grid, Props } from './components/Grid';
import { Row } from './components/Row';
import { Col } from './components/Col';

export { Grid, Row, Col };

interface X extends Props {}

// TODO
const CompoundGrid = Grid as typeof Grid & {
  Row: typeof Row;
  Col: typeof Col;
};

// {
//   ({ children, className, ...props }: Props): JSX.Element;
//   Row: any;
//   Col: any;
// };

CompoundGrid.Row = Row;
CompoundGrid.Col = Col;

export default CompoundGrid;
