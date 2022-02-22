import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Countdown = ({ key, timer, animate, children }) => {
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={['#0754c1', 0.33]}
      strokeWidth={8}
      trailColor="#1f2937"
      onComplete={() => 
        {/* stop countdown circle */}
      }
    >
      {({ remainingTime }) => <Text>{remainingTime}</Text>}
    </CountdownCircleTimer>
  )
}

export default Countdown;