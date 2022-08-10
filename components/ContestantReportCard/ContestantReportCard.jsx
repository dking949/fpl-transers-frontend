import React from 'react';
import { ContainerStyled } from './styled';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import PropTypes from 'prop-types';
import { Transfer } from '../../types';

function ContestantReportCard({
  contestantName,
  contestantTitle, // MVP/Loser etc,
  transfers,
  netPointsChange
}) {
  return (
    <ContainerStyled>
      <Card variant="outlined" sx={{ minWidth: '320px' }}>
        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&auto=format&fit=crop&w=3270"
            alt=""
          />
        </AspectRatio>
      </Card>
    </ContainerStyled>
  )
}

ContestantReportCard.propTypes = {
  contestantName: PropTypes.string,
  contestantTitle: PropTypes.string,
  transfers: PropTypes.arrayOf(Transfer),
  netPointsChange: PropTypes.string, // -5, +10
}


export default ContestantReportCard