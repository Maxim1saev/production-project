import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'shared/Button',
};

export default meta;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlinedSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlinedSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const BackgroundSquare: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
        square: true,
    },
};

export const BackgroundSquareSizeM: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.M,
    },
};

export const BackgroundSquareSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.L,
    },
};

export const BackgroundSquareSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.XL,
    },
};
