import { RouterDecorator } from './RouterDecorator';
import { StyleDecorator } from './StyleDecorator';
import 'loki/configure-react';

const preview = {
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
