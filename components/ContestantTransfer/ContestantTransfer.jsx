import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import PlayerCard from '../PlayerCard/PlayerCard';
import { ContainerStyled } from './styled';
import { Transfer } from '../../types';

function ContestantTransfer({
  playerOut,
  playerIn,
}) {
  return (
    <ContainerStyled>
      <PlayerCard player_name={playerOut.name} points={playerOut.points} />
      <FaArrowRight size="5em" />
      <PlayerCard player_name={playerIn.name} points={playerIn.points} />
    </ContainerStyled>
  );
}

ContestantTransfer.propTypes = Transfer;

export default ContestantTransfer;
