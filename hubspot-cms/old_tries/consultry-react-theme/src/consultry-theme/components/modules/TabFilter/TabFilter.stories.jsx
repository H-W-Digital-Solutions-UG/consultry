import { moduleStory } from '@hubspot/cms-dev-server/storybook';
import { Component, fields } from './index.jsx';

export default {
  title: 'Tier 2/TabFilter',
  component: Component,
};

export const Default = moduleStory(Component, fields);
