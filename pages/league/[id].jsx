import { CssVarsProvider } from "@mui/joy/styles";
import Head from "next/head";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/joy";
import ContainerStyled from "../../styles/pageStyles/league/styled";
import GameweekSummary from "../../components/GameweekSummary/GameweekSummary";
import CaptaincyWidget from "../../components/CaptaincyWidget/CaptaincyWidget";
import DifferentialsContainer from "../../components/Differentials/DifferentialsContainer";

const API_ENDPOINT = "https://tzmjbc96de.execute-api.us-east-1.amazonaws.com/";

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
  text-align: center;
  color: white;
`;

export default function League() {
  const [loading, setLoading] = useState(true);
  const [transfers, setTransfers] = useState(null);
  const [captain, setCaptain] = useState(null);
  const [differentials, setDifferentials] = useState(null);

  const router = useRouter();

  const fetchFplData = async () => {
    // TODO: Use AJax or GraphQL to pass league ID
    // TODO: Fix CORS
    let fplData = await fetch(`${API_ENDPOINT}?league_id=${router.query.id}`);

    if (fplData.ok) {
      fplData = await fplData.json();
      setTransfers(fplData.transfers);
      setCaptain(fplData.captain);
      setDifferentials(fplData.differentials);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      fetchFplData();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

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
        <ContainerStyled>
          {!loading && (
            <>
              <TitleStyled>{transfers.league_name}</TitleStyled>
              <WidgetContainerStyled>
                <GameweekSummary
                  mvp={transfers.mvp}
                  woodenSpoon={transfers.shitebag}
                />
                <CaptaincyWidget players={captain} />
                <DifferentialsContainer differentials={differentials} />
              </WidgetContainerStyled>
            </>
          )}
          {loading && <CircularProgress size="lg" />}
        </ContainerStyled>
      </CssVarsProvider>
    </div>
  );
}
