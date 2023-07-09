/* eslint-disable max-len */
const config = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', 'storybook-css-modules'],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    features: { storyStoreV7: true },

};
export default config;
export const core = {
    builder: 'webpack5',

};
