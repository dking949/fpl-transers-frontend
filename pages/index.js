import styles from '../styles/Home.module.css'
import { CssVarsProvider } from '@mui/joy/styles';
import PlayerCard from '../components/PlayerCard/PlayerCard'
import ContestantTransfer from '../components/ContestantTransfer/ContestantTransfer';

export default function Home() {
  return (
    <div className={styles.container}>
      <CssVarsProvider>
        {/* <PlayerCard playerName={'Mo Salah'} playerPoints={20} /> */}
        <ContestantTransfer playerIn={{
          playerName: 'James Maddison',
          playerPoints: 2
        }} playerOut={{
          playerName: 'Mason Mount',
          playerPoints: 6
        }}/>
      </CssVarsProvider>
    </div>
  )
}
