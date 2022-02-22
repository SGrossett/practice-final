import Game from "../components/Game/Game"
import Player from '../components/Player';
import StatsSidebar from "../components/Stats/StatsSidebar";
import StatsCenter from "../components/Stats/StatsCenter"

function Statistics() {
    return (
      <div className="bg-black h-screen">
        <div className="">
          <StatsSidebar />
          <StatsCenter />
        </div>
        {/* <div className='sticky bottom-0'></div> */}
      </div>
    )
  }
  
  export default Statistics