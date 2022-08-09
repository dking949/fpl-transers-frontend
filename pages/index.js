import styles from '../styles/Home.module.css'
import { CssVarsProvider } from '@mui/joy/styles';
import PlayerCard from '../components/PlayerCard/PlayerCard'

export default function Home() {
  return (
    <div className={styles.container}>
      <CssVarsProvider>
        <PlayerCard playerName={'Mo Salah'} playerPoints={20} />
      </CssVarsProvider>
    </div>
  )
}
