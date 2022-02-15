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
  )
}
