import { CssVarsProvider } from "@mui/joy/styles";
import Head from "next/head";
import styled from "styled-components";
import GameweekSummary from "../../components/GameweekSummary/GameweekSummary";
import CaptaincyWidget from "../../components/CaptaincyWidget/CaptaincyWidget";
import DifferentialsContainer from "../../components/Differentials/DifferentialsContainer";

const API_ENDPOINT =
  "https://tzmjbc96de.execute-api.us-east-1.amazonaws.com?league_id=1267504";

const WidgetContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
  gap: 5em;
  max-width: 100vw;
`;

const TitleStyled = styled.h1`
  display: flex;
  justify-content: center;
`;

export async function getStaticProps() {
  // TODO: Use AJax or GraphQL to pass league ID
  const data = await fetch(API_ENDPOINT);
  const fplData = await data.json();

  return {
    props: {
      fplData,
    },
    revalidate: 30, // 3600, // 1 hour
  };
}

export default function League({ fplData }) {
  const { transfers, captain, differentials } = fplData;

  return (
    <div>
      <Head>
        <title>FPL Transfers</title>
        <meta
          name="fpl transfers"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <CssVarsProvider>
        <div style={{ position: "relative", top: "80px" }}>
          <TitleStyled>{transfers.league_name}</TitleStyled>
          <WidgetContainerStyled>
            <GameweekSummary
              mvp={transfers.mvp}
              woodenSpoon={transfers.shitebag}
            />
            <CaptaincyWidget players={captain} />
            <DifferentialsContainer differentials={differentials} />
          </WidgetContainerStyled>
        </div>
      </CssVarsProvider>
    </div>
  );
}
