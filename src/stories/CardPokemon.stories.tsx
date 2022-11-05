import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouterProps } from 'react-router-dom';

import CardPokemon from '../components/CardPokemon';

export default {
  title: 'Example/CardPokemon',
  component: CardPokemon,
} as ComponentMeta<typeof CardPokemon>;

const Template: ComponentStory<typeof CardPokemon> = (args) => <CardPokemon {...args} />;

export const Card = Template.bind({});
Card.args = {
  id: 1,
  name: "Muryllo",
  types: [{
    type: {
      name: "Grass"
    }
  }]
};