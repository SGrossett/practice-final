import SetPomodoro from './SetPomodoro';
import Countdown from './Countdown'
import { useState } from 'react';

function TimerSidebar({startPomodoro, setStartPomodoro}) {
  const [studyTime, setStudyTime] = useState(60);
  const [breakTime, setBreakTime] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  
  return (
    <div className='container flex flex-col space-y-12 items-center text-white p-5 h-screen border-gray-900 text-xs lg:text-sm border-l overflow-y-scroll scrollbar-hide max-w-[12rem] lg:max-w-[15rem] md:inline-flex pb-40'>
      <div className='mt-5'>
        <p className='text-xs'>Maximize your time with</p>
        <h1 className='text-5xl'>Pomify</h1>
      </div>

      <div className=''>
        {startPomodoro? <Countdown 
         startPomodoro={startPomodoro} 
         setStartPomodoro={setStartPomodoro} 
         studyTime={studyTime}
         setStudyTime={setStudyTime}
         breakTime={breakTime}
         setBreakTime={setBreakTime}
         longBreak={longBreak}
         setLongBreak={setLongBreak}
        />  : 
        <SetPomodoro 
        startPomodoro={startPomodoro} 
        setStartPomodoro={setStartPomodoro} 
        studyTime={studyTime}
        setStudyTime={setStudyTime}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        longBreak={longBreak}
        setLongBreak={setLongBreak}
        />
        }
      </div>
    </div>
  )
}

export default TimerSidebar;