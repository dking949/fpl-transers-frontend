/* eslint-disable max-len */
import React, { useState } from 'react';
import Card from '@mui/joy/Card';
import PropTypes from 'prop-types';
import Typography from '@mui/joy/Typography';
import { ContainerStyled, TransferListStyled, TransferListItemStyled } from './styled';
import { Transfer } from '../../types';
import ContestantTransfer from '../ContestantTransfer/ContestantTransfer';

/**
   * Given an array of transfers made, function will calculate the net points chnage
   * from those transfers.
   *
   * @param {Transfer[]} contestantTransfers - The array of transfers made
   */
const calculateNetPointsChange = (contestantTransfers, transferCost) => {
  const totalPlayerOutPoints = contestantTransfers.reduce((prevTransfer, nextTransfer) => prevTransfer + nextTransfer.out.points, 0);
  const totalPlayerInPoints = contestantTransfers.reduce((prevTransfer, nextTransfer) => prevTransfer + nextTransfer.in.points, 0);

  let netChange = totalPlayerInPoints - totalPlayerOutPoints;
  netChange -= transferCost;

  if (Math.sign(netChange) === 1) {
    return `+${netChange}`;
  }
  return `${netChange}`;
};
function ContestantReportCard({
  contestantName,
  contestantTitle, // MVP/Loser etc,
  transfers,
  transferCost,
}) {
  // State variables
  const renderedTransfers = useState([transfers.map((transfer, idx) => (
    // eslint-disable-next-line react/no-array-index-key
    <TransferListItemStyled key={idx}>
      <ContestantTransfer playerOut={transfer.out} playerIn={transfer.in} />
    </TransferListItemStyled>
  ))]);
  // eslint-disable-next-line no-use-before-define
  const netPointsChange = useState(() => calculateNetPointsChange(transfers, transferCost));

  return (
    <ContainerStyled>
      <Card
        variant="outlined"
        sx={{
          minWidth: '350px', width: 'fit-content', maxWidth: '600px', margin: 'auto',
        }}
      >
        <Typography level="h1" sx={{ fontSize: '2em', mt: 2 }}>
          {contestantTitle}
        </Typography>
        <Typography level="h2" sx={{ fontSize: '1.5em', mt: 2 }}>
          {contestantName}
        </Typography>
        <div>
          <TransferListStyled>
            {renderedTransfers}
          </TransferListStyled>
        </div>
        <h2>
          Net Differential:
          {netPointsChange}
        </h2>
      </Card>
    </ContainerStyled>
  );
}

ContestantReportCard.propTypes = {
  contestantName: PropTypes.string.isRequired,
  contestantTitle: PropTypes.string.isRequired,
  transfers: PropTypes.arrayOf(Transfer).isRequired,
  transferCost: PropTypes.number.isRequired,
};

export default ContestantReportCard;
