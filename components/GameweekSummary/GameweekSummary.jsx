import React from 'react'
import ContestantReportCard from '../ContestantReportCard/ContestantReportCard'

function GameweekSummary({ mvp, shitebag}) {
  return (
    <div>
      <ContestantReportCard contestantName={mvp.player_name} contestantTitle="MVP" transfers={mvp.transfer_details.moves} netPointsChange="TODO"/>
      <ContestantReportCard contestantName={shitebag.player_name} contestantTitle="Shitebag" transfers={shitebag.transfer_details.moves} netPointsChange="TODO"/>
    </div>
  )
}

export default GameweekSummary
