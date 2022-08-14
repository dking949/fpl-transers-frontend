import { shape, number, string } from 'prop-types';

export const Player = shape({
  playerId: number,
  playerName: string.isRequired,
  playerGameweekPoints: number.isRequired,
});

export const Transfer = shape({
  playerOut: Player.isRequired,
  playerIn: Player.isRequired,
});