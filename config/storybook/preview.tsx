import { Preview } from '@storybook/react';
import { RouterDecorator } from './RouterDecorator';

import { StyleDecorator } from './StyleDecorator';
// import 'loki/configure-react'; 

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
    // ThemeDecorator(Theme.DARK),
    ],
};

export default preview;
