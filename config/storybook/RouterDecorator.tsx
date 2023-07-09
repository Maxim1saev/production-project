import React from 'react';
import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { classNames } from '../../src/shared/lib/classNames/classNames';

import { Theme } from '../../src/app/providers/ThemeProvider';

export const RouterDecorator = (Story: StoryFn) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
