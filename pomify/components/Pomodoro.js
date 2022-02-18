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

    if (isNaN(value) || value === '') { 
      setTimer({ ...timer });  
    } else {
      if (name === 'timer' && value) {
        setTimer({ ...timer, pomodoro: parseInt(value) });
      } else if (name === 'shortBreak') {
        setTimer({ ...timer, short: parseInt(value) });
      } else if (name === 'longBreak') {
        setTimer({ ...timer, long: parseInt(value) });
      } else { 
        setTimer({ ...timer });  
      }
    }
  };

  console.log(timer)
  
  const submit = (event) => {
    event.preventDefault();
  }

  return (
    <div className=''>
      <form noValidate>
        <div className='text-black'>
          <input  name='timer' onChange={changeTime} value={timer.pomodoro} />
          <input  name='shortBreak' onChange={changeTime} value={timer.short} />
          <input  name='longBreak' onChange={changeTime} value={timer.long} />
        </div>
        <Button onCLick={submit} title='Set Timer' />
      </form>
    </div>
  )
}

export default Pomodoro;