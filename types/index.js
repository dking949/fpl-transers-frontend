import { shape, number, string } from 'prop-types';

export const Player = shape({
  playerId: number.isRequired,
  playerName: string.isRequired,
  playerGameweekPoints: number,
});

export const Transfer = shape({
  playerOut: Player.isRequired,
  playerIn: Player.isRequired,
});