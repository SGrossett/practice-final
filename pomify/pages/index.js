import { getSession } from 'next-auth/react';
import HomeSidebar from '../components/HomeSidebar';
import Center from '../components/Center';

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <HomeSidebar />
        <Center />
        {/* Sidebar */}
      </main>

      <div>{/* Player and timer */}</div>
    </div>
  );
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session }
  }
}