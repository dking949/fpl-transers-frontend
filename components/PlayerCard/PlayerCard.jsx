import React from 'react';
import { CardStyled } from './styled';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Image from 'next/image';
import salah from '../../public/salah.png'

function PlayerCard({ playerName, playerPoints}) {
  return (
    <CardStyled variant="outlined" sx={{ maxWidth: '450px' }}>
      <CardOverflow>
        <AspectRatio objectFit='contain' maxHeight="300px">
          <Image
            src={salah}
            alt="Player Pic"
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
        {playerName}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        Points: {playerPoints}
      </Typography>
    </CardStyled>
  )
}

export default PlayerCard;
