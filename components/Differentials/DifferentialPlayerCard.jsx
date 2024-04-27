/* eslint-disable import/prefer-default-export */
import React from "react";
import PropTypes from "prop-types";
import PlayerCard from "../PlayerCard/PlayerCard";
import { Player, Contestant } from "../../types";

function DifferentialPlayerCard({ player, ownedBy }) {
  const mappedOwnedByList = ownedBy.map((contestant) => (
    <li key={contestant.id}>{contestant.name}</li>
  ));

  return (
    <>
      <PlayerCard
        player_name={player.name}
        points={player.points}
        photo_url={player.photo_url}
      />
      <div>
        Owned By
        <ul>{mappedOwnedByList}</ul>
      </div>
    </>
  );
}

DifferentialPlayerCard.propTypes = {
  player: Player.isRequired,
  ownedBy: PropTypes.arrayOf(Contestant).isRequired,
};

export default DifferentialPlayerCard;
