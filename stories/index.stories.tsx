import React from 'react';
import { Meta, Story } from '@storybook/react';
import { styled } from '@storybook/theming';

import { Grid, Row, Col } from '../src';

import { dirs } from '../src/constants/dirs';

import type { Dir } from '../src/types';

interface Props {
  readonly dir: Dir;
}

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    dir: {
      control: {
        type: 'inline-radio',
        options: dirs,
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
  <Grid style={style} dir={dir}>
    <Grid.Row>
      <Grid.Col sizeSm="6" sizeMd={4} sizeLg={2}>
        <DemoBlock>A</DemoBlock>
      </Grid.Col>

      <Grid.Col sizeSm={6} sizeMd="8" sizeLg={10}>
        <DemoBlock>B</DemoBlock>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export const Inheritance: Story<Props> = ({ dir }) => (
  <Grid style={style} dir={dir}>
    <Grid.Row>
      <Grid.Col sizeSm={12} sizeLg="4">
        <DemoBlock>Example</DemoBlock>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export const PushAndPull: Story<Props> = ({ dir }) => (
  <Grid style={style} dir={dir}>
    <Grid.Row>
      <Grid.Col sizeSm={4} smPush="8">
        <DemoBlock>First in code</DemoBlock>
      </Grid.Col>

      <Grid.Col sizeSm={8} smPull={4}>
        <DemoBlock>Second in code</DemoBlock>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

PushAndPull.storyName = 'Push and pull';

export const Visibility: Story = () => (
  <Grid style={style}>
    <Grid.Row>
      <Grid.Col sizeSm={12} hiddenXxlUp>
        <DemoBlock>Visible on smaller screens</DemoBlock>
      </Grid.Col>

      <Grid.Col sizeSm="12" hiddenXlDown>
        <DemoBlock>Visible on larger screens</DemoBlock>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

Visibility.parameters = {
  controls: {
    disabled: true,
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
    disabled: true,
  },
};
