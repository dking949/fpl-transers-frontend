import React from 'react'
import PlayerCard from '../PlayerCard/PlayerCard';
import { ContainerStyled } from './styled';
import { FaArrowRight } from 'react-icons/fa';

function ContestantTransfer({
  playerOut,
  playerIn,
}) {
  return (
   <ContainerStyled>
      <PlayerCard {...playerOut}></PlayerCard>
      <FaArrowRight size="5em"/>
      <PlayerCard {...playerIn}></PlayerCard>
   </ContainerStyled>
  )
}

export default ContestantTransfer