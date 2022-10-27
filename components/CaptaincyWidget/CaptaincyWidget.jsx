import React, { useState } from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import CaptaincyRow from '../CaptaincyRow/CaptaincyRow';
import ContainerStyled from './styled';

function CaptaincyWidget({ players }) {
  const captainedPlayers = useState([players.map((plyr) => (
    // eslint-disable-next-line react/jsx-key
    <CaptaincyRow
      playerName={plyr.name}
      photoUrl={plyr.photo_url}
      captainedBy={plyr.captainedBy}
      // captainedByPercent={plyr.captainedByPercent}
      fixture={plyr.fixture}
    />
  ))]);

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 'fit-content', height: 'fit-content',
      }}
    >
      <Typography level="h1" sx={{ fontSize: '2em', mt: 2 }}>
        Captaincy
      </Typography>
      <ContainerStyled>
        {captainedPlayers}
      </ContainerStyled>
    </Card>
  );
}

export default CaptaincyWidget;
