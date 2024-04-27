import React, { useCallback } from "react";
import Card from "@mui/joy/Card";
import { BsInfoCircle } from "react-icons/bs";
import Tooltip from "@mui/joy/Tooltip";
import IconButton from "@mui/joy/IconButton";
import DifferentialPlayerCard from "./DifferentialPlayerCard";
import { TitleContainerStyled, DifferentialListStyled } from "./styled";

const DIFFERENTIAL_DEFINITION = (
  <div>
    <span>Differential is catagorised as a player who</span>
    <ul>
      <li>Scored {">"}= 6 points in the gameweek</li>
      <li>
        Is owned by {"<="}
        20% of other minileague members
      </li>
    </ul>
  </div>
);

function DifferentialsContainer({ differentials }) {
  const mappedDifferentials = useCallback(
    () =>
      differentials.map((differential) => (
        <li key={differential.id}>
          <DifferentialPlayerCard
            key={differential.id}
            player={differential}
            ownedBy={differential.ownedBy}
          />
        </li>
      )),
    [differentials],
  );

  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          minWidth: "350px",
          width: "fit-content",
          margin: "auto",
          height: "fit-content",
        }}
      >
        <TitleContainerStyled>
          <h1>Differentials</h1>
          <div style={{ display: "flex" }}>
            <Tooltip
              title={DIFFERENTIAL_DEFINITION}
              variant="solid"
              placement="top"
              leaveTouchDelay={5000}
            >
              <IconButton>
                <BsInfoCircle />
              </IconButton>
            </Tooltip>
          </div>
        </TitleContainerStyled>
        <DifferentialListStyled>{mappedDifferentials()}</DifferentialListStyled>
      </Card>
    </div>
  );
}

export default DifferentialsContainer;
