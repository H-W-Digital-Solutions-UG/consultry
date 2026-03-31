import { moduleStory } from '@hubspot/cms-dev-server/storybook';
import { Component, fields } from './index.jsx';

export default {
  title: 'Tier 1/InlineEmailCapture',
  component: Component,
};

export const Default = moduleStory(Component, fields);
