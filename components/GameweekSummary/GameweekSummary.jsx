import React from 'react';
import ContestantReportCard from '../ContestantReportCard/ContestantReportCard';
import { ContainerStyled } from './styled';

function GameweekSummary({ mvp, shitebag }) {
  return (
    <ContainerStyled>
      <ContestantReportCard contestantName={mvp.name} contestantTitle="MVP" transfers={mvp.transfer_details.moves} transferCost={mvp.transfer_details.totalTransferCost} />
      <ContestantReportCard contestantName={shitebag.name} contestantTitle="Shitebag" transfers={shitebag.transfer_details.moves} transferCost={shitebag.transfer_details.totalTransferCost} />
    </ContainerStyled>
  );
}

export default GameweekSummary;
