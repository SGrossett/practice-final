import { getSession } from 'next-auth/react';
import HomeSidebar from '../components/HomeSidebar';
import Center from '../components/Center';
import Player from '../components/Player';
import TimerSideBar from '../components/TimerSideBar';
import { useState } from 'react';

export default function Home() {
  const [lofi, setLofi] = useState(false);
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <HomeSidebar />
        <Center lofi={lofi} setLofi={setLofi} />
        <TimerSideBar />
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