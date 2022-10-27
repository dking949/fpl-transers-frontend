import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Image from 'next/image';
import { CardStyled, UnorderedListStyled } from './styled';

function CaptaincyRow({
  playerName,
  photoUrl,
  captainedBy,
  /* captainedByPercent */
  fixture,
}) {
  const captainedByList = useState(
    // eslint-disable-next-line react/jsx-key
    captainedBy.map((contestant) => <li>{contestant.name}</li>),
  );

  return (
    <CardStyled>
      <AspectRatio ratio={1} objectFit="cover">
        <Image
          src={photoUrl}
          width={80}
          height={120}
          alt="Player Pic"
        />
      </AspectRatio>
      <div>{playerName}</div>
      <UnorderedListStyled>
        {captainedByList}
      </UnorderedListStyled>
      {/* <div>
        {captainedByPercent}
        %
      </div> */}
      <div>
        {fixture}
      </div>
    </CardStyled>
  );
}

export default CaptaincyRow;
