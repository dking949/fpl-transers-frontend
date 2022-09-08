import React from 'react';
import {
  render,
} from '@testing-library/react';
import { expect, test } from '@jest/globals';
import PlayerCard from './PlayerCard';

const dummyImageUrl = 'https:resources.premierleague.com/premierleague/photos/players/110x140/p223094.png';

test('PlayerCard matches snapshot', () => {
  const component = render(<PlayerCard player_name="John" points={10} photo_url={dummyImageUrl} />);

  expect(component.container).toMatchSnapshot();
});
