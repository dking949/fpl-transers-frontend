import React from 'react'
import PlayerCard from '../PlayerCard/PlayerCard';
import { ContainerStyled } from './styled';
import { FaArrowRight } from 'react-icons/fa';
import { Transfer } from '../../types';

function ContestantTransfer({
  playerOut,
  playerIn,
}) {

  console.log({playerOut});
  return (
   <ContainerStyled>
      <PlayerCard {...playerOut}></PlayerCard>
      <FaArrowRight size="5em"/>
      <PlayerCard {...playerIn}></PlayerCard>
   </ContainerStyled>
  )
}

ContestantTransfer.propTypes = Transfer;

export default ContestantTransfer;