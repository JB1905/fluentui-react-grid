import React from 'react';
import { render } from '@testing-library/react';

import CompoundGrid, { Grid, Row, Col } from '../src';

describe('Grid', () => {
  it.each`
    dir
    ${'ltr'}
    ${'rtl'}
    ${undefined}
  `('should render the grid with dir: $dir', ({ dir }) => {
    const { container } = render(
      <Grid dir={dir}>
        <Row>
          <Col>Hello</Col>
          <Col>World</Col>
        </Row>
      </Grid>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the grid with custom params', () => {
    const { container } = render(
      <CompoundGrid>
        <CompoundGrid.Row>
          <CompoundGrid.Col>Hello</CompoundGrid.Col>

          <CompoundGrid.Col
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
            smPush={1}
            smPull={2}
            mdPush={3}
            mdPull={4}
            lgPush={5}
            lgPull={6}
            xlPush={7}
            xlPull={8}
            xxlPush={9}
            xxlPull={10}
            xxxlPush={11}
            xxxlPull={12}
            hiddenMdDown
            hiddenMdUp
            hiddenLgDown
            hiddenLgUp
            hiddenXlDown
            hiddenXlUp
            hiddenXxlDown
            hiddenXxlUp
          >
            World
          </CompoundGrid.Col>
        </CompoundGrid.Row>
      </CompoundGrid>
    );

    expect(container).toMatchSnapshot();
  });

  it.todo('empty grid')
  it.todo('only col')
  it.todo('only row')
  it.todo('incorrect nesting')
});
