import styles from '../styles/Home.module.css'
import { CssVarsProvider } from '@mui/joy/styles';
import PlayerCard from '../components/PlayerCard/PlayerCard'
import ContestantTransfer from '../components/ContestantTransfer/ContestantTransfer';
import GameweekSummary from '../components/GameweekSummary/GameweekSummary';

export default function Home() {

  const dummyMVP = {
    "id": 1,
    "player_name" : "Jimbo Jones",
    "entry_name": "Is this team name?",
    "transfer_details": {
        "has_free_transfer": true,
        "moves": [{
          "in": {
            playerId: 44,
            playerName: "Darwin Nunez",
            playerGameweekPoints: 13,
          },
          "out": {
            playerId: 1,
            playerName: "Harry Kane",
            playerGameweekPoints: 6,
          }
        }]
    },
    "contestant_chip_played": ""
  }

  const dummyShitebag = {
    "id": 2,
    "player_name" : "Moe Syzlack",
    "entry_name": "Is this team name?",
    "transfer_details": {
        "has_free_transfer": true,
        "moves": [{
            "in": {
              playerId: 77,
              playerName: "Eddie Nketiah",
              playerGameweekPoints: 2,
            },
            "out": {
              playerId: 5,
              playerName: "Erling Haaland",
              playerGameweekPoints: 12,
            }
        }]
    },
    "contestant_chip_played": ""
  }

  return (
    <div className={styles.container}>
      <CssVarsProvider>
        {/* <PlayerCard playerName={'Mo Salah'} playerPoints={20} /> */}
        {/* <ContestantTransfer playerIn={{
          playerName: 'James Maddison',
          playerPoints: 2
        }} playerOut={{
          playerName: 'Mason Mount',
          playerPoints: 6
        }}/> */}

        <GameweekSummary mvp={dummyMVP} shitebag={dummyShitebag} />
      </CssVarsProvider>
    </div>
  )
}
