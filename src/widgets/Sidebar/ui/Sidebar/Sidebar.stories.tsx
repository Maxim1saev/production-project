import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from '../../../../../config/storybook/ThemeDecorator'
import { Sidebar } from './Sidebar';
import { Theme } from 'app/providers/ThemeProvider';

type Story = StoryObj<typeof Sidebar>;

 const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'widgets/Sidebar',
};

export default meta

export const Light: Story = {
  args:{
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ],
};

export const Dark: Story = {
  args:{
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
};
