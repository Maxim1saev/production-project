import 'app/styles/index.scss' // компоненты изолированы, поэтому тут не видны глобальные стили
import React from 'react'
import { StoryFn } from '@storybook/react';

export  const StyleDecorator = (Story: StoryFn) =>  <Story />
