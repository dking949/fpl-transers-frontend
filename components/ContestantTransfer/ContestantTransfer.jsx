import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import PlayerCard from "../PlayerCard/PlayerCard";
import ContainerStyled from "./styled";
import { Transfer } from "../../types";

function ContestantTransfer({ playerOut, playerIn }) {
  const [arrow, setArrow] = useState(null);

  const getArrowIcon = () => {
    const screenWidth = window.screen.width;

    if (screenWidth < 600) {
      return <FaArrowDown size="5em" />;
    }
    return <FaArrowRight size="5em" />;
  };

  useEffect(() => {
    const arrowIcon = getArrowIcon();
    setArrow(arrowIcon);
  }, []);

  return (
    <ContainerStyled>
      <PlayerCard
        player_name={playerOut.name}
        points={playerOut.points}
        photo_url={playerOut.photo_url}
      />
      {arrow}
      <PlayerCard
        player_name={playerIn.name}
        points={playerIn.points}
        photo_url={playerIn.photo_url}
      />
    </ContainerStyled>
  );
}

ContestantTransfer.propTypes = Transfer;

export default ContestantTransfer;
