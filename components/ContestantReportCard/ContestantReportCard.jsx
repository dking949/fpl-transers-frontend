import React from 'react';
import { ContainerStyled } from './styled';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import PropTypes from 'prop-types';
import { Transfer } from '../../types';
import ContestantTransfer from '../ContestantTransfer/ContestantTransfer';
import { TransferListStyled } from './styled';

function ContestantReportCard({
  contestantName,
  contestantTitle, // MVP/Loser etc,
  transfers,
  netPointsChange
}) {

  return (
    <ContainerStyled>
      <Card variant="outlined" sx={{ minWidth: '320px'}}>
        <h1>{contestantTitle}</h1>
        <h2>{contestantName}</h2>
        <TransferListStyled>
          {transfers.map((transfer, idx) => {
            return(
              <li key={idx}>
                <ContestantTransfer playerOut={transfer.out} playerIn={transfer.in} />
              </li>
            )
          })}
        </TransferListStyled>
        <h2>Net points change: {netPointsChange}</h2>
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