import React, { useState } from 'react';
import Typography from '@mui/joy/Typography';
import CaptaincyRow from '../CaptaincyRow/CaptaincyRow';
import { ContainerStyled, CardStyled } from './styled';

function CaptaincyWidget({ players }) {
  const captainedPlayers = useState([players.map((plyr) => (
    <CaptaincyRow
      key={plyr.id}
      playerName={plyr.name}
      photoUrl={plyr.photo_url}
      captainedBy={plyr.captainedBy}
      points={plyr.points}
      fixture={plyr.fixture}
    />
  ))]);

  return (
    <CardStyled
      variant="outlined"
    >
      <Typography level="h1" sx={{ fontSize: '2em', mt: 2 }}>
        Captaincy
      </Typography>
      <ContainerStyled>
        {captainedPlayers}
      </ContainerStyled>
    </CardStyled>
  );
}

export default CaptaincyWidget;
