import { StoryFn } from '@storybook/react';
import { classNames } from '../../src/shared/lib/classNames/classNames';

import { Theme, ThemeProvider } from '../../src/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={classNames('app', {}, [theme])}>
            <Story />
        </div>
    </ThemeProvider>
);
