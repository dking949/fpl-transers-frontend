import React, { useState } from 'react';
import { CardStyled, UnorderedListStyled } from './styled';
import PlayerCard from '../PlayerCard/PlayerCard';

function CaptaincyRow({
  playerName,
  photoUrl,
  captainedBy,
  points,
  fixture,
}) {
  const captainedByList = useState(
    // eslint-disable-next-line react/jsx-key
    captainedBy.map((contestant) => <li>{contestant.name}</li>),
  );

  const playerPoints = points ?? 0;

  return (
    <CardStyled>
      <PlayerCard
        player_name={playerName}
        points={playerPoints}
        photo_url={photoUrl}
      />
      <div>
        Captained By
        <UnorderedListStyled>
          {captainedByList}
        </UnorderedListStyled>
      </div>

      <div>
        Fixture:
        {' '}
        {fixture}
      </div>
    </CardStyled>
  );
}

export default CaptaincyRow;
