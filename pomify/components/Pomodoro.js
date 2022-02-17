import React, { useState } from 'react';

const Pomodoro = () => {
  const [timer, setTimer] = useState({
    pomodoro: 25.0,
    short: 5.0,
    long: 15.0,
    active: 'pomodoro'
  });

  const changeTime = (time) => {
    const { name, value } = time.target;

    if (name === 'timer') {
      setTimer({ ...timer, pomodoro: parseInt(value) });
    } else if (name === 'shortBreak') {
      setTimer({ ...timer, short: parseInt(value) });
    } else if (name === 'longBreak') {
      setTimer({ ...timer, long: parseInt(value) });
    }
    console.log(timer)
  };

  return (
    <div className=''>
      <form noValidate>
        <div className='text-black'>
          <input  name='timer' onChange={changeTime} value={timer.pomodoro} />
          <input  name='shortBreak' onChange={changeTime} value={timer.short} />
          <input  name='longBreak' onChange={changeTime} value={timer.long} />
        </div>
      </form>
    </div>
  )
}

export default Pomodoro;