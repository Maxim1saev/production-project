import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from '../../../../config/storybook/ThemeDecorator'
import { Button, ThemeButton } from './Button';
import { Theme } from 'app/providers/ThemeProvider';

type Story = StoryObj<typeof Button>;

 const meta: Meta<typeof Button> = {
  component: Button,
  title: 'shared/Button',
};

export default meta

export const Primary: Story = {
  args:{
    children: 'Text',
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
};


export const Clear: Story = {
  args:{
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
  };



export const Outlined: Story = {
  args:{
    children: 'Text',
    theme: ThemeButton.OUTLINE, 
  },
  };

