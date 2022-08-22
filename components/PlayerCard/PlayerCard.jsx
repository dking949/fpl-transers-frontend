/* eslint-disable camelcase */
import React from 'react';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Image from 'next/image';
import CardStyled from './styled';
import { Player } from '../../types';

function PlayerCard({ player_name, points, photo_url }) {
  return (
    <CardStyled variant="outlined">
      <CardOverflow>
        <AspectRatio objectFit="contain" maxHeight="300px">
          <Image
            src={photo_url}
            width={300}
            height={300}
            alt="Player Pic"
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
        {player_name}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        Points:
        {' '}
        {points}
      </Typography>
    </CardStyled>
  );
}

PlayerCard.propTypes = Player;

export default PlayerCard;
