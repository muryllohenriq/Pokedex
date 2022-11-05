import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Badge from '../components/Badge';

export default {
  title: 'Example/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Dragon = Template.bind({});
Dragon.args = {
  name: "Dragon",
};

export const Grass = Template.bind({});
Grass.args = {
  name: "Grass",
};