import React from 'react';
import { Meta, Story } from '@storybook/react';
import { styled } from '@storybook/theming';

import CompoundGrid, { Grid, Row, Col } from '../src';

type Dir = 'ltr' | 'rtl';

interface Props {
  readonly dir: Dir;
}

export default {
  title: 'Grid',
  component: CompoundGrid,
  argTypes: {
    dir: {
      control: {
        type: 'inline-radio',
        options: ['ltr', 'rtl'],
      },
    },
  },
  args: {
    dir: 'ltr',
  },
} as Meta;

const style = { width: '100%' };

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

PushAndPull.storyName = 'Push and pull';

export const Visibility: Story = () => (
  <CompoundGrid style={style} dir="ltr">
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
    disabled: true,
  },
};

export const WithoutCompoundComponents: Story = () => (
  <Grid style={style} dir="ltr">
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
    disabled: true,
  },
};
