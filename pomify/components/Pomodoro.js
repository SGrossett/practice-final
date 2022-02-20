import React, { useState } from 'react';
import Button from './Button';

const Pomodoro = () => {
  const [timer, setTimer] = useState({
    pomodoro: 25,
    short: 5,
    long: 15,
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
  
  const submitTimer = (event) => {
    event.preventDefault();
  }

  return (
    <div className=''>
      <form noValidate>
        <div className='text-black'>
          <div>
            <label className=''>
              <span className='text-white'>Pomodoro</span>
                <input
                  name='timer'
                  type='number'
                  min='25'
                  max='60'
                  className='timer-input'
                  onChange={changeTime}
                  value={timer.pomodoro}
                />
            </label>
          </div>
          <div>
            <label className=''>
              <span className=''>Short Break</span>
                <input
                  name='shortBreak'
                  type='number'
                  min='5'
                  max='30'
                  className='timer-input'
                  onChange={changeTime}
                  value={timer.short}
                />
            </label>
          </div>
          <div>
            <label className=''>
              <span className=''>Long Break</span>
                <input
                  name='longBreak'
                  type='number'
                  min='15'
                  max='60'
                  className='timer-input'
                  onChange={changeTime}
                  value={timer.long}
                />
            </label>
          </div>
        </div>
        <Button onCLick={submitTimer} title='Set Timer' />
      </form>
    </div>
  )
}

export default Pomodoro;