import React from 'react';
import { Meta, Story } from '@storybook/react';
import { styled } from '@storybook/theming';

import CompoundGrid, { Grid, Row, Col } from '../src';

import { dirs } from '../src/constants/dirs';

import type { Dir } from '../src/types';

import { grid, GridSchema } from '../__mocks__/gridSchema';

interface Props {
  readonly dir: Dir;
}

const style = { width: '100%' };

export default {
  title: 'Grid',
  component: Grid,
  subcomponents: { Row, Col },
  argTypes: {
    dir: {
      options: dirs,
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    dir: 'ltr',
  } as Props,
  decorators: [
    (Story) => (
      <div
        style={{
          ...style,
          minWidth: 320,
          marginTop: 16,
          marginLeft: 8,
          marginRight: 8,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const DemoBlock = styled.div`
  background-color: #a19f9d;
  color: #fff;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Basics: Story<Props> = ({ dir }) => (
  <CompoundGrid style={style} dir={dir}>
    <CompoundGrid.Row>
      <CompoundGrid.Col sizeSm="6" sizeMd={4} sizeLg={2}>
        <DemoBlock>A</DemoBlock>
      </CompoundGrid.Col>

      <CompoundGrid.Col sizeSm={6} sizeMd="8" sizeLg={10}>
        <DemoBlock>B</DemoBlock>
      </CompoundGrid.Col>
    </CompoundGrid.Row>
  </CompoundGrid>
);

export const Inheritance: Story<Props> = ({ dir }) => (
  <CompoundGrid style={style} dir={dir}>
    <CompoundGrid.Row>
      <CompoundGrid.Col sizeSm={12} sizeLg="4">
        <DemoBlock>Example</DemoBlock>
      </CompoundGrid.Col>
    </CompoundGrid.Row>
  </CompoundGrid>
);

export const PushAndPull: Story<Props> = ({ dir }) => (
  <CompoundGrid style={style} dir={dir}>
    <CompoundGrid.Row>
      <CompoundGrid.Col sizeSm={4} smPush="8">
        <DemoBlock>First in code</DemoBlock>
      </CompoundGrid.Col>

      <CompoundGrid.Col sizeSm={8} smPull={4}>
        <DemoBlock>Second in code</DemoBlock>
      </CompoundGrid.Col>
    </CompoundGrid.Row>
  </CompoundGrid>
);

PushAndPull.storyName = 'Push and Pull';

export const Visibility: Story = () => (
  <CompoundGrid style={style}>
    <CompoundGrid.Row>
      <CompoundGrid.Col sizeSm={12} hiddenXxlUp>
        <DemoBlock>Visible on smaller screens</DemoBlock>
      </CompoundGrid.Col>

      <CompoundGrid.Col sizeSm="12" hiddenXlDown>
        <DemoBlock>Visible on larger screens</DemoBlock>
      </CompoundGrid.Col>
    </CompoundGrid.Row>
  </CompoundGrid>
);

Visibility.parameters = {
  controls: {
    disable: true,
  },
};

export const WithoutCompoundComponents: Story = () => (
  <Grid style={style}>
    <Row>
      <Col sizeSm="6" sizeMd={4} sizeLg={2}>
        <DemoBlock>A</DemoBlock>
      </Col>

      <Col sizeSm={6} sizeMd="8" sizeLg={10}>
        <DemoBlock>B</DemoBlock>
      </Col>
    </Row>
  </Grid>
);

WithoutCompoundComponents.parameters = {
  controls: {
    disable: true,
  },
};

export const Interactive: Story<
  Props & {
    readonly grid: GridSchema;
  }
> = ({ dir, grid }) => (
  <CompoundGrid style={style} dir={dir}>
    {grid.map((row, rowIndex) => (
      <CompoundGrid.Row key={rowIndex}>
        {row.map(({ children, ...colProps }, colIndex) => (
          <CompoundGrid.Col {...colProps} key={colIndex}>
            <DemoBlock>{children}</DemoBlock>
          </CompoundGrid.Col>
        ))}
      </CompoundGrid.Row>
    ))}
  </CompoundGrid>
);

Interactive.storyName = 'Interactive Example';
Interactive.args = { grid };
