import Head from "next/head";
import { CssVarsProvider } from "@mui/joy/styles";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CircularProgress } from "@mui/joy";
import {
  ContentContainerStyled,
  FormStyled,
  InputContainerStyled,
  HyperlinkStyled,
  LeagueInputStyled,
  LeagueInputSearchButtonStyled,
  CircularProgressContainerStyled,
} from "../styles/pageStyles/landingPage/styled";
import Hero from "../components/Hero";

export default function Search() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    router.push(`/league/${inputText}`);
  };

  return (
    <div className="background">
      <div className="content">
        <Head>
          <title>FPL Transfers</title>
          <meta
            name="fpl transfers"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <CssVarsProvider>
          <ContentContainerStyled>
            <Hero />
            <InputContainerStyled>
              <FormStyled onSubmit={onSubmitHandler}>
                <LeagueInputStyled
                  size="lg"
                  placeholder="Search FPL League ID"
                  required
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  type="number"
                />
                <LeagueInputSearchButtonStyled type="submit">
                  Submit
                </LeagueInputSearchButtonStyled>
              </FormStyled>
              <HyperlinkStyled href="/league">
                See an example from my FPL league
              </HyperlinkStyled>
            </InputContainerStyled>
            <CircularProgressContainerStyled>
              {loading && <CircularProgress />}
            </CircularProgressContainerStyled>
          </ContentContainerStyled>
        </CssVarsProvider>
      </div>
    </div>
  );
}
