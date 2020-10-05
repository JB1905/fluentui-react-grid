import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Grid } from '../src';

interface Props {}

export default {
  title: 'Grid',
  component: Grid,
  args: {},
} as Meta;

export const normal: Story<Props> = () => (
  <Grid>
    <Grid.Row>
      <Grid.Col></Grid.Col>
    </Grid.Row>
  </Grid>
);
