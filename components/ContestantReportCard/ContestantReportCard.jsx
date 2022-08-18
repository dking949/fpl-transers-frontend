/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Card from '@mui/joy/Card';
import PropTypes from 'prop-types';
import { ContainerStyled, TransferListStyled } from './styled';
import { Transfer } from '../../types';
import ContestantTransfer from '../ContestantTransfer/ContestantTransfer';

function ContestantReportCard({
  contestantName,
  contestantTitle, // MVP/Loser etc,
  transfers,
}) {
  // TODO: Could I create a custom hook here???
  const [renderedTransfers, setRenderedTransfers] = useState([]);
  const [netPointsChange, setNetPointsChange] = useState('');

  /**
   * Given an array of transfers made, function will calculate the net points chnage
   * from those transfers
   *
   * @param {Transfer[]} contestantTransfers - The array of transfers made
   */
  const calculateNetPointsChange = (contestantTransfers) => {
    const totalPlayerOutPoints = contestantTransfers.reduce((prevTransfer, nextTransfer) => prevTransfer + nextTransfer.out.points, 0);
    const totalPlayerInPoints = contestantTransfers.reduce((prevTransfer, nextTransfer) => prevTransfer + nextTransfer.in.points, 0);

    const netChange = totalPlayerInPoints - totalPlayerOutPoints;

    if (Math.sign(netChange) === 1) {
      setNetPointsChange(`+${netChange}`);
    } else {
      setNetPointsChange(`${netChange}`);
    }
  };

  useEffect(() => {
    const transferListItems = transfers.map((transfer, idx) => (
      <li key={idx}>
        <ContestantTransfer playerOut={transfer.out} playerIn={transfer.in} />
      </li>
    ));
    setRenderedTransfers(transferListItems);
    calculateNetPointsChange(transfers);
  }, []);

  return (
    <ContainerStyled>
      <Card variant="outlined" sx={{ minWidth: '320px' }}>
        <h1>{contestantTitle}</h1>
        <h2>{contestantName}</h2>
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
};

export default ContestantReportCard;
