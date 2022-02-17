import { getSession } from 'next-auth/react';
import HomeSidebar from '../components/HomeSidebar';
import Center from '../components/Center';
import Player from '../components/Player';
import TimerSideBar from '../components/TimerSideBar';

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <HomeSidebar />
        <Center />
        <TimerSideBar />
      </main>

      <div className='sticky bottom-0'>
        <Player />
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