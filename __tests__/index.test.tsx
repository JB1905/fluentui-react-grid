import React from 'react';
import { render } from '@testing-library/react';

import { Grid, Row, Col } from '../src';

describe('Grid', () => {
  it('should render grid without params', () => {
    const { container } = render(
      <Grid>
        <Row>
          <Col>Hello</Col>
          <Col>World</Col>
        </Row>
      </Grid>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render grid with custom params', () => {
    const { container } = render(
      <Grid>
        <Grid.Row>
          <Grid.Col>Hello</Grid.Col>

          <Grid.Col
            className="custom-class-name"
            sizeSm={12}
            sizeMd={8}
            sizeLg={6}
            sizeXl={4}
            sizeXxl={3}
            sizeXxxl={2}
            hiddenSm
            hiddenMd
            hiddenLg
            hiddenXl
            hiddenXxl
            hiddenXxxl
            smPush={2}
            smPull={2}
            mdPush={2}
            mdPull={2}
            lgPush={2}
            lgPull={2}
            xlPush={2}
            xlPull={2}
            xxlPush={2}
            xxlPull={2}
            xxxlPush={2}
            xxxlPull={2}
            hiddenMdDown
            hiddenMdUp
            hiddenLgDown
            hiddenLgUp
            hiddenXlDown
            hiddenXlUp
            hiddenXxlDown
            hiddenXxlUp
          >
            World!
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );

    expect(container).toMatchSnapshot();
  });
});
