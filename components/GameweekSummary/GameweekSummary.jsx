import React from 'react';
import ContestantReportCard from '../ContestantReportCard/ContestantReportCard';
import ContainerStyled from './styled';

function GameweekSummary({ mvp, woodenSpoon }) {
  return (
    <ContainerStyled>
      <ContestantReportCard contestantName={mvp.name} contestantTitle="MVP" transfers={mvp.transfer_details.moves} transferCost={mvp.transfer_details.totalTransferCost} />
      <ContestantReportCard contestantName={woodenSpoon.name} contestantTitle="Wooden Spoon" transfers={woodenSpoon.transfer_details.moves} transferCost={woodenSpoon.transfer_details.totalTransferCost} />
    </ContainerStyled>
  );
}

export default GameweekSummary;
