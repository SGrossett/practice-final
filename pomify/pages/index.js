import ContextSettingsProvider from '../context/ContextSettings';
import { getSession } from 'next-auth/react';
import HomeSidebar from '../components/HomeSidebar';
import Center from '../components/Center';
import Player from '../components/Player';
import TimerSideBar from '../components/TimerSideBar';
import { useState } from 'react';
import Game from '../components/Game/Game'


export default function Home() {
  const [startPomodoro, setStartPomodoro] = useState(false);
  const [lofi, setLofi] = useState(false);
  const [ticTac, setTicTac] = useState(false);
  const [gameTime, setGameTime] = useState(false);
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex"> 
        <HomeSidebar gameTime={gameTime} setGameTime={setGameTime}  /> 
        {gameTime? <Game /> :  
        <Center 
          lofi={lofi} 
          setLofi={setLofi} 
          ticTac={ticTac} 
          setTicTac={setTicTac} />
          }
          <TimerSideBar 
        startPomodoro={startPomodoro} 
        setStartPomodoro={setStartPomodoro} /> 
      </main>

      <div className='sticky bottom-0'>
        <Player lofi={lofi} setLofi={setLofi}/>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session }
  }
}