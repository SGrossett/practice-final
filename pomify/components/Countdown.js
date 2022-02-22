import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Countdown = ({ key = 1, timer = 5, animate = true, children }, props) => {
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 5}
      colors={['#0754c1', 0.33]}
      strokeWidth={8}
      trailColor="#1f2937"
      onComplete={() => 
        {/* stop countdown circle */}
      }
    >
      {({ remainingTime }) => remainingTime }
    </CountdownCircleTimer>
  )
}

export default Countdown;