import React from 'react';
import { CardStyled } from './styled';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Image from 'next/image';
import salah from '../../public/salah.png';
import PropTypes from 'prop-types';
import { Player } from '../../types';

function PlayerCard({ playerName, playerGameweekPoints }) {
  return (
    // TODO: Need a better solution than hardcoding the card widths
    <CardStyled variant="outlined" sx={{ maxWidth: '450px', minWidth: '400px' }}>
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
        Points: {playerGameweekPoints}
      </Typography>
    </CardStyled>
  )
}

PlayerCard.propTypes = Player;

export default PlayerCard;
