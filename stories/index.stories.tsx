import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Grid } from '../src';

export default {
  title: 'Grid',
  component: Grid,
} as Meta;

const style = { width: '100%' };

export const basics: Story = () => (
  <Grid style={style}>
    <Grid.Row>
      <Grid.Col sizeSm="6" sizeMd={4} sizeLg={2}>
        A
      </Grid.Col>

      <Grid.Col sizeSm={6} sizeMd="8" sizeLg={10}>
        B
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export const inheritance: Story = () => (
  <Grid style={style}>
    <Grid.Row>
      <Grid.Col sizeSm={12} sizeLg="4">
        Example
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export const pushAndPull: Story = () => (
  <Grid style={style}>
    <Grid.Row>
      <Grid.Col sizeSm={4} smPush="8">
        First in code
      </Grid.Col>

      <Grid.Col sizeSm={8} smPull={4}>
        Second in code
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export const visibility: Story = () => (
  <Grid style={style}>
    <Grid.Row>
      <Grid.Col sizeSm={12} hiddenXxlUp>
        Visible on smaller screens
      </Grid.Col>

      <Grid.Col sizeSm="12" hiddenXlDown>
        Visible on larger screens
      </Grid.Col>
    </Grid.Row>
  </Grid>
);
