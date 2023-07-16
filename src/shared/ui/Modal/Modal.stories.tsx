import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator';
import { Modal } from './Modal';

type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: 'shared/Modal',
};

export default meta;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Text Text Text Text Text Text Text Text TextText Text Text Text Text TextText Text Text Text Text Text',
    },
};

// export const Dark: Story = {
//     args: {
//         isOpen: true,
//         children: 'Text Text Text Text Text TextText Text Text Text Text TextText Text Text Text Text TextText Text Text Text Text TextText Text Text Text Text TextText Text Text Text Text Text',
//     },
//     decorators: [
//         ThemeDecorator(Theme.DARK),
//     ],
// };
