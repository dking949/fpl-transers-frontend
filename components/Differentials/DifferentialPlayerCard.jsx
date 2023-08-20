/* eslint-disable import/prefer-default-export */
import React from 'react';
// import PropTypes from 'prop-types';
import PlayerCard from '../PlayerCard/PlayerCard';
// import { Player, Contestant } from '../../types';

function DifferentialPlayerCard() {
  // const mappedOwnedByList = ownedBy.map((contestant) => <li>{contestant.name}</li>);

  /*
player.player_name
player.points
player.photo_url
*/

  return (
    <>
      <PlayerCard
        player_name="Kane"
        points={10}
        photo_url="https:resources.premierleague.com/premierleague/photos/players/110x140/p78830.png"
      />
      <div>
        Owned By
        <ul>
          {/* {mappedOwnedByList} */}
          <li>Darren</li>
          <li>Peter</li>
        </ul>
      </div>
    </>

  );
}

// DifferentialPlayerCard.propTypes = {
//   player: Player.isRequired,
//   ownedBy: PropTypes.arrayOf(Contestant).isRequired,
// };

export default DifferentialPlayerCard;
