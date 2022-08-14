import React from 'react'
import ContestantReportCard from '../ContestantReportCard/ContestantReportCard'
import { ContainerStyled } from './styled'

function GameweekSummary({ mvp, shitebag}) {
  return (
    <ContainerStyled>
      <ContestantReportCard contestantName={mvp.player_name} contestantTitle="MVP" transfers={mvp.transfer_details.moves} netPointsChange="TODO"/>
      <ContestantReportCard contestantName={shitebag.player_name} contestantTitle="Shitebag" transfers={shitebag.transfer_details.moves} netPointsChange="TODO"/>
    </ContainerStyled>
  )
}

export default GameweekSummary
