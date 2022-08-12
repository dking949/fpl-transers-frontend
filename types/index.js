import { shape, number, string } from 'prop-types';

export const Player = shape({
  playerId: number, // TODO: Weird behaviour with isRequired that needs sorting
  playerName: string,
  playerGameweekPoints: number,
});

export const Transfer = shape({
  playerOut: Player.isRequired,
  playerIn: Player.isRequired,
});