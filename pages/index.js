/* eslint-disable react/jsx-filename-extension */
import { CssVarsProvider } from '@mui/joy/styles';
import Head from 'next/head';
import styled from 'styled-components';
import GameweekSummary from '../components/GameweekSummary/GameweekSummary';
// import CaptaincyWidget from '../components/CaptaincyWidget/CaptaincyWidget';
// import DifferentialsContainer from '../components/Differentials/DifferentialsContainer';

const API_ENDPOINT = 'https://tzmjbc96de.execute-api.us-east-1.amazonaws.com/';

const ContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px;
    gap: 5em;
    max-width: 100vw;
  `;

export async function getStaticProps() {
  const data = await fetch(API_ENDPOINT);
  const fplData = await data.json();

  return {
    props: {
      fplData,
    },
    revalidate: 30, // 3600, // 1 hour
  };
}

export default function Home({ fplData }) {
  return (
    <div>
      <Head>
        <title>FPL Transfers</title>
        <meta name="fpl transfers" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CssVarsProvider>
        <ContainerStyled>
          <h1>{fplData.league_name}</h1>
          <GameweekSummary mvp={fplData.mvp} woodenSpoon={fplData.shitebag} />
          { /* Turning off captaincy widget as its not functioning properly */}
          {/* <CaptaincyWidget players={fplData.captaincy} /> */}
          {/* <DifferentialsContainer /> */}
        </ContainerStyled>
      </CssVarsProvider>
    </div>
  );
}
