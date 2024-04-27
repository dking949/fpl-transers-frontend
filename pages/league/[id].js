import { CssVarsProvider } from "@mui/joy/styles";
import Head from "next/head";
import { useState, useEffect } from "react";
import styled from "styled-components";
import GameweekSummary from "../../components/GameweekSummary/GameweekSummary";
import CaptaincyWidget from "../../components/CaptaincyWidget/CaptaincyWidget";
import DifferentialsContainer from "../../components/Differentials/DifferentialsContainer";
import { useRouter } from "next/router";

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
`;

// export async function getStaticPaths() {
//   return {
//     paths: [
//       // String variant:
//       "/league/id",
//       // Object variant:
//       { params: { id: "id" } }, // TODO: Is this correct?
//     ],
//     fallback: true,
//   };
// }

export default function League() {
  const [loading, setLoading] = useState(true);
  const [transfers, setTransfers] = useState({});
  const [captain, setCaptain] = useState({});
  const [differentials, setDifferentials] = useState({});

  const router = useRouter();

  const fetchFplData = async () => {
    // TODO: Use AJax or GraphQL to pass league ID
    // TODO: Fix CORS
    const fplData = await fetch(API_ENDPOINT);

    if (fplData.ok) {
      setTransfers(fplData.transfers);
      setCaptain(fplData.captain);
      setDifferentials(fplData.differentials);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFplData();
  }, []);

  return (
    <div>
      <Head>
        <title>FPL Transfers</title>
        <meta
          name="fpl transfers"
          content="initial-scale=1.0, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <CssVarsProvider>
        <TitleStyled>{router.query.id}</TitleStyled>
        {!loading && (
          <WidgetContainerStyled>
            <GameweekSummary
              mvp={transfers.mvp}
              woodenSpoon={transfers.shitebag}
            />
            <CaptaincyWidget players={captain} />
            <DifferentialsContainer differentials={differentials} />
          </WidgetContainerStyled>
        )}
      </CssVarsProvider>
    </div>
  );
}
