import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Image from 'next/image';
import salah from '../../public/salah.png';
import { CardStyled } from './styled';

function CaptaincyRow({
  playerName, captainedBy, captainedByPercent, fixture,
}) {
  const captainedByList = useState(
    // eslint-disable-next-line react/jsx-key
    captainedBy.map((contestant) => <li>{contestant.name}</li>),
  );

  return (
    <CardStyled>
      <AspectRatio ratio={1} objectFit="cover">
        <Image
          src={salah}
          width={80}
          height={120}
          alt="Player Pic"
        />
      </AspectRatio>
      <div>{playerName}</div>
      <div>
        {captainedByList}
      </div>
      <div>
        {captainedByPercent}
        %
      </div>
      <div>
        {fixture}
      </div>
    </CardStyled>
  );
}

export default CaptaincyRow;
