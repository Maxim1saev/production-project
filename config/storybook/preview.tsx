import { Preview } from '@storybook/react';
import { RouterDecorator } from './RouterDecorator';
import { StyleDecorator } from './StyleDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },

    decorators: [
        StyleDecorator,
        RouterDecorator,
    ],
};

export default preview;
