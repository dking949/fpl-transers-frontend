import {
  shape, number, string, bool, arrayOf,
} from 'prop-types';

export const Player = shape({
  name: string.isRequired,
  points: number.isRequired,
  photo_url: string.isRequired,
});

export const Transfer = shape({
  out: Player.isRequired,
  in: Player.isRequired,
});

const TransferDetail = shape({
  has_free_transfer: bool.isRequired,
  moves: arrayOf(Transfer),
  totalTransferCost: number.isRequired,
});

export const PlayerGameweekSummary = shape({
  id: number.isRequired,
  name: string.isRequired,
  team_name: string.isRequired,
  transfer_details: arrayOf(TransferDetail).isRequired,
  chip_played: string,
});

export const Contestant = shape({
  id: number.isRequired,
  name: string.isRequired,
});
