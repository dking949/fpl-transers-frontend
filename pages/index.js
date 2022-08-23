/* eslint-disable react/jsx-filename-extension */
import { CssVarsProvider } from '@mui/joy/styles';
import GameweekSummary from '../components/GameweekSummary/GameweekSummary';

const API_ENDPOINT = 'https://tzmjbc96de.execute-api.us-east-1.amazonaws.com/';

export async function getStaticProps() {
  const data = await fetch(API_ENDPOINT);
  const fplData = await data.json();

  return {
    props: {
      fplData,
    },
    revalidate: 3600, // 1 hour
  };
}

export default function Home({ fplData }) {
  return (
    <div>
      <CssVarsProvider>
        <GameweekSummary mvp={fplData.mvp} shitebag={fplData.shitebag} />
      </CssVarsProvider>
    </div>
  );
}
