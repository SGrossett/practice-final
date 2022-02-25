import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const clocksettings = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60)
  const seconds = remainingTime % 60

  return `${minutes}:${seconds}`
}

const Countdown = ({ key = 1, timer = 5, animate = true, children = clocksettings,startPomodoro,
  setStartPomodoro,
  studyTime,
  setStudyTime,
  breakTime,
  setBreakTime,
  longBreak,
  setLongBreak}) => {
    
  return (
    <div className='flex flex-col items-center'>
      <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={studyTime * 60}
      colors={['#0754c1', 0.33]}
      strokeWidth={8}
      trailColor="#1f2937"
      onComplete={() => 
        {/* stop countdown circle */}
      }
    >
      {children}
      {/* {({ remainingTime }) => remainingTime } */}
    </CountdownCircleTimer>
    <button className='mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={() => setStartPomodoro(!startPomodoro)}>
          New Timer
        </button>
    </div>
  )
}

export default Countdown;