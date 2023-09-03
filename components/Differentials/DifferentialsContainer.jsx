import React from 'react';
import Card from '@mui/joy/Card';
import { BsInfoCircle } from 'react-icons/bs';
import Tooltip from '@mui/joy/Tooltip';
import IconButton from '@mui/joy/IconButton';
import DifferentialPlayerCard from './DifferentialPlayerCard';
import TitleContainerStyled from './styled';

const DIFFERENTIAL_DEFINITION = (
  <div>
    <span>Differential is catagorised as a player who</span>
    <ul>
      <li>
        Scored
        {' '}
        {'>'}
        = 6 points in the gameweek
      </li>
      <li>
        Is owned by
        {' '}
        {'<='}
        20% of other minileague members
      </li>
    </ul>
  </div>
);

function DifferentialsContainer({ differentials }) {
  const renderDifferentials = () => differentials.map((differential) => (
    <DifferentialPlayerCard
      key={differential.id}
      player={differential}
      ownedBy={differential.ownedBy}
    />
  ));

  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          minWidth: '350px', width: 'fit-content', margin: 'auto', height: 'fit-content',
        }}
      >
        <TitleContainerStyled>
          <h2>
            Differentials
          </h2>
          <div style={{ display: 'flex' }}>
            <Tooltip title={DIFFERENTIAL_DEFINITION} variant="solid" placement="right">
              <IconButton>
                <BsInfoCircle />
              </IconButton>

            </Tooltip>

          </div>
        </TitleContainerStyled>
        <div>
          { renderDifferentials() }
        </div>
      </Card>
    </div>
  );
}

export default DifferentialsContainer;
