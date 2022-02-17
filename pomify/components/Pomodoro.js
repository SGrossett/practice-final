import { useState } from 'react';

const Pomodoro = () => {
  const [timer, setTimer] = useState({
    pomodoro: 25.0,
    short: 5.0,
    long: 15.0,
    active: 'pomodoro'
  });

  return (
    <div className=''>
      <form noValidate>
        <div className=''>
          <input type='text' name='timer' value={timer.pomodoro} />
          <input type='text' name='shortBreak' value={timer.short} />
          <input type='text' name='longBreak' value={timer.long} />
        </div>
      </form>
    </div>
  )
}

export default Pomodoro;