/* eslint-disable react/jsx-filename-extension */
import { useEffect } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import styles from '../styles/Home.module.css';
import GameweekSummary from '../components/GameweekSummary/GameweekSummary';
import apiResp from '../public/actualApiResponse.json';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const API_ENDPOINT = 'https://tzmjbc96de.execute-api.us-east-1.amazonaws.com/';

export async function getStaticProps(context) {
  // const { data, error } = await fetch(API_ENDPOINT);
  const fplData = apiResp.body;
  return {
    props: {
      fplData,
    }, // will be passed to the page component as props
  };
}

export default function Home({ fplData }) {
  return (
    <div className={styles.container}>
      <CssVarsProvider>
        <GameweekSummary mvp={fplData.mvp} shitebag={fplData.shitebag} />
      </CssVarsProvider>
    </div>
  );
}
